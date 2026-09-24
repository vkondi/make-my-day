import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import {
  formatMoodLabel,
  generatePrediction as generatePredictionResult,
  getMoodEmoji,
  type PredictionResult
} from './prediction-engine';
import { Footer } from './Footer';

type ViewState = 'idle' | 'generating' | 'revealed';
type AnticipationPhase = 'idle' | 'hmm' | 'consulting' | 'invoking';

const suspenseLines = [
  'Consulting cosmic logistics',
  'Aligning tiny coincidences',
  'Polishing today\'s omen',
  'Checking snack-based prophecies'
] as const;

const nightSuspenseLines = [
  'Running a low-light forecast',
  'Night shift omen in progress',
  'Consulting moonlit probabilities'
] as const;

const TODAY_VISIT_KEY = 'make-my-day-visit-date';

function playRevealChime(): void {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) {
      return;
    }

    const context = new AudioCtx();
    const oscillatorA = context.createOscillator();
    const oscillatorB = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime;

    oscillatorA.type = 'triangle';
    oscillatorB.type = 'sine';
    oscillatorA.frequency.setValueAtTime(392, now);
    oscillatorB.frequency.setValueAtTime(523.25, now + 0.025);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.012, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

    oscillatorA.connect(gain);
    oscillatorB.connect(gain);
    gain.connect(context.destination);

    oscillatorA.start(now);
    oscillatorB.start(now + 0.018);
    oscillatorA.stop(now + 0.14);
    oscillatorB.stop(now + 0.16);

    void oscillatorB.addEventListener('ended', () => {
      void context.close();
    });
  } catch {
    // Audio feedback is optional and should never block interaction.
  }
}

function getTodayKey(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getCurrentTimeLabel(): string {
  return new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

function normalizeWord(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function pickGlitchWord(text: string): string | null {
  const words = text
    .split(' ')
    .map((word) => normalizeWord(word))
    .filter((word) => word.length >= 5);

  if (words.length === 0) {
    return null;
  }

  return words[Math.floor(Math.random() * words.length)];
}

function renderPredictionText(text: string, glitchWord: string | null): ReactNode {
  if (!glitchWord) {
    return text;
  }

  let usedGlitch = false;
  const words = text.split(' ');

  return words.map((word, index) => {
    const normalized = normalizeWord(word);
    const spacer = index < words.length - 1 ? ' ' : '';

    if (!usedGlitch && normalized === glitchWord) {
      usedGlitch = true;
      return (
        <span key={`${word}-${index}`}>
          <span className="glitch-word">{word}</span>
          {spacer}
        </span>
      );
    }

    return (
      <span key={`${word}-${index}`}>
        {word}
        {spacer}
      </span>
    );
  });
}

export default function App() {
  const [viewState, setViewState] = useState<ViewState>('idle');
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [serial, setSerial] = useState<number>(0);
  const [anticipationBeat, setAnticipationBeat] = useState<number>(1);
  const [anticipationPhase, setAnticipationPhase] = useState<AnticipationPhase>('idle');
  const [suspenseBase, setSuspenseBase] = useState<string>(suspenseLines[0]);
  const [metaAside, setMetaAside] = useState<string | null>(null);
  const [timestampLabel, setTimestampLabel] = useState<string>('');
  const [glitchWord, setGlitchWord] = useState<string | null>(null);
  const [microWhisper, setMicroWhisper] = useState<string | null>(null);
  const [typedPrediction, setTypedPrediction] = useState<string>('');
  const [isTypingPrediction, setIsTypingPrediction] = useState<boolean>(false);
  const [isReturningToday, setIsReturningToday] = useState<boolean>(false);
  const anticipationIntervalRef = useRef<number | null>(null);
  const anticipationTimeoutsRef = useRef<number[]>([]);
  const whisperTimeoutRef = useRef<number | null>(null);
  const holdTimeoutRef = useRef<number | null>(null);
  const isPressingRef = useRef<boolean>(false);
  const recentClicksRef = useRef<number[]>([]);
  const lastClickAtRef = useRef<number | null>(null);

  const showWhisper = (line: string, durationMs: number = 2100): void => {
    setMicroWhisper(line);

    if (whisperTimeoutRef.current !== null) {
      window.clearTimeout(whisperTimeoutRef.current);
    }

    whisperTimeoutRef.current = window.setTimeout(() => {
      setMicroWhisper(null);
    }, durationMs);
  };

  useEffect(() => {
    const todayKey = getTodayKey();
    const previous = window.localStorage.getItem(TODAY_VISIT_KEY);
    setIsReturningToday(previous === todayKey);
    window.localStorage.setItem(TODAY_VISIT_KEY, todayKey);
  }, []);

  useEffect(() => {
    if (viewState !== 'revealed' || !prediction) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTypedPrediction(prediction.prediction);
      setIsTypingPrediction(false);
      return;
    }

    setTypedPrediction('');
    setIsTypingPrediction(true);

    let cursor = 0;
    const fullText = prediction.prediction;
    const intervalId = window.setInterval(() => {
      cursor += 1;
      setTypedPrediction(fullText.slice(0, cursor));

      if (cursor >= fullText.length) {
        window.clearInterval(intervalId);
        setIsTypingPrediction(false);
      }
    }, 42);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [prediction, viewState]);

  useEffect(() => {
    return () => {
      if (anticipationIntervalRef.current !== null) {
        window.clearInterval(anticipationIntervalRef.current);
      }

      for (const timeoutId of anticipationTimeoutsRef.current) {
        window.clearTimeout(timeoutId);
      }

      if (whisperTimeoutRef.current !== null) {
        window.clearTimeout(whisperTimeoutRef.current);
      }

      if (holdTimeoutRef.current !== null) {
        window.clearTimeout(holdTimeoutRef.current);
      }
    };
  }, []);

  const suspenseText = `${suspenseBase}${'.'.repeat(anticipationBeat)}`;

  const isBusy = viewState === 'generating';
  const hasResult = viewState === 'revealed' && prediction !== null;

  const getAnticipationLine = (): string => {
    if (anticipationPhase === 'hmm') {
      return 'Hmm...';
    }

    if (anticipationPhase === 'consulting') {
      return 'consulting fate...';
    }

    if (anticipationPhase === 'invoking') {
      return suspenseText;
    }

    return '';
  };

  const clearAnticipationTimers = () => {
    if (anticipationIntervalRef.current !== null) {
      window.clearInterval(anticipationIntervalRef.current);
      anticipationIntervalRef.current = null;
    }

    for (const timeoutId of anticipationTimeoutsRef.current) {
      window.clearTimeout(timeoutId);
    }
    anticipationTimeoutsRef.current = [];
  };

  const generatePrediction = () => {
    if (isBusy) {
      return;
    }

    const previousPrediction = prediction;

    const now = Date.now();
    const hour = new Date().getHours();
    const isNightMode = hour >= 0 && hour < 4;
    const lastClickAt = lastClickAtRef.current;
    const isPatientReplay = lastClickAt !== null && now - lastClickAt >= 5000;

    const recent = recentClicksRef.current.filter((time) => now - time <= 10000);
    recent.push(now);
    recentClicksRef.current = recent;
    const isRapidReplay = recent.length >= 3;

    const suspensePool = isNightMode ? nightSuspenseLines : suspenseLines;
    let nextSuspenseBase: string = suspensePool[Math.floor(Math.random() * suspensePool.length)];

    if (isPatientReplay) {
      nextSuspenseBase = 'Patient people get better omens';
    }

    if (isRapidReplay) {
      nextSuspenseBase = 'Breathe. Fate is buffering';
      showWhisper('Breathe. Fate is buffering.', 1700);
    }

    setSuspenseBase(nextSuspenseBase);

    clearAnticipationTimers();
    setPrediction(null);
    setMetaAside(null);
    setGlitchWord(null);
    setTypedPrediction('');
    setIsTypingPrediction(false);
    setTimestampLabel('');
    setAnticipationBeat(1);
    setAnticipationPhase('hmm');
    setViewState('generating');
    lastClickAtRef.current = now;

    anticipationIntervalRef.current = window.setInterval(() => {
      setAnticipationBeat((beat) => (beat >= 3 ? 1 : beat + 1));
    }, 260);

    anticipationTimeoutsRef.current.push(
      window.setTimeout(() => {
        setAnticipationPhase('consulting');
      }, 420)
    );

    anticipationTimeoutsRef.current.push(
      window.setTimeout(() => {
        setAnticipationPhase('invoking');
      }, 1150)
    );

    anticipationTimeoutsRef.current.push(window.setTimeout(() => {
      clearAnticipationTimers();

      const next = generatePredictionResult(previousPrediction?.id ?? null);
      const nextSerial = serial + 1;
      let nextAside: string | null = null;

      if (nextSerial % 7 === 0) {
        nextAside = "At this point, you're outsourcing your life decisions to a website.";
      }

      if (
        previousPrediction &&
        (previousPrediction.category === next.category || previousPrediction.mood === next.mood)
      ) {
        nextAside = nextAside ? `${nextAside} Pattern detected. Suspicious.` : 'Pattern detected. Suspicious.';
      }

      setPrediction(next);
      setSerial((value) => value + 1);
      setMetaAside(nextAside);
      setTimestampLabel(getCurrentTimeLabel());
      setGlitchWord(Math.random() < 1 / 30 ? pickGlitchWord(next.prediction) : null);
      setAnticipationPhase('idle');
      setViewState('revealed');
      playRevealChime();
    }, 2200));
  };

  const handlePointerDown = () => {
    if (isBusy) {
      return;
    }

    isPressingRef.current = true;

    if (holdTimeoutRef.current !== null) {
      window.clearTimeout(holdTimeoutRef.current);
    }

    holdTimeoutRef.current = window.setTimeout(() => {
      if (isPressingRef.current) {
        showWhisper('Okay, you REALLY need a better day.', 2200);
      }
    }, 2000);
  };

  const clearPressState = () => {
    isPressingRef.current = false;

    if (holdTimeoutRef.current !== null) {
      window.clearTimeout(holdTimeoutRef.current);
      holdTimeoutRef.current = null;
    }
  };

  const handlePointerLeave = () => {
    if (isPressingRef.current && !isBusy) {
      showWhisper('Commitment issues detected.', 1600);
    }
    clearPressState();
  };

  const idlePrompt = useMemo(() => {
    if (isReturningToday && serial === 0) {
      return "You're back. The plot thickens.";
    }

    return 'Press the button when the moment feels right.';
  }, [isReturningToday, serial]);

  return (
    <>
      <main className="app-shell" data-state={viewState}>
        <div className="atmosphere" aria-hidden="true" />

      <section className="toy-stage" data-state={viewState} aria-live="polite">
        {/* <p className="brand-line">Make My Day</p> */}
        <h1 className="hero-title">One tiny prediction for today</h1>

        <button
          className="make-day-button"
          type="button"
          onClick={generatePrediction}
          onPointerDown={handlePointerDown}
          onPointerUp={clearPressState}
          onPointerCancel={clearPressState}
          onPointerLeave={handlePointerLeave}
          disabled={isBusy}
        >
          <span className="button-label button-label--stacked" aria-label="MAKE MY DAY">
            <span>MAKE</span>
            <span>MY</span>
            <span>DAY</span>
          </span>
        </button>

        {microWhisper ? <p className="micro-whisper">{microWhisper}</p> : null}

        <div className="reveal-slot" data-state={viewState}>
          {prediction ? (
            <article
              className={`prediction-card${isBusy ? ' is-transitioning' : ''}`}
              data-visibility={isBusy ? 'holding' : 'visible'}
              key={`${serial}-${prediction.id}`}
            >
              <p className="card-eyebrow">✦ YOUR DAY ✦</p>
              <p className={`prediction-line${isTypingPrediction ? ' is-typing' : ''}`}>
                {isTypingPrediction
                  ? typedPrediction
                  : renderPredictionText(prediction.prediction, glitchWord)}
              </p>
              <p className="card-meta">
                {prediction.categoryMeta.emoji} {prediction.categoryMeta.label} · {getMoodEmoji(prediction.mood)} {formatMoodLabel(prediction.mood)} · Omen #{String(serial).padStart(3, '0')} · {timestampLabel}
              </p>
              {metaAside ? <p className="card-aside">{metaAside}</p> : null}
            </article>
          ) : (
            <div className="placeholder-copy" key={isBusy ? anticipationPhase : 'idle'} aria-hidden="true">
              {isBusy ? getAnticipationLine() : idlePrompt}
            </div>
          )}
        </div>

        {hasResult ? (
          <button className="replay-button" type="button" onClick={generatePrediction}>
            Again
          </button>
        ) : null}
      </section>
    </main>

    <Footer />
    </>
  );
}
