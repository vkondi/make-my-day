export type PredictionCategory =
  | 'wholesome'
  | 'weirdly_specific'
  | 'mildly_inconvenient'
  | 'suspiciously_accurate'
  | 'indian_edition';

export type PredictionMood = 'playful' | 'warm' | 'absurd' | 'chaotic' | 'grounded';

export type PredictionEntry = {
  id: string;
  category: PredictionCategory;
  prediction: string;
  mood: PredictionMood;
  rarity: number;
};

export const predictionCatalog: readonly PredictionEntry[] = [
  // Wholesome Category
  {
    id: 'wholesome-1',
    category: 'wholesome',
    prediction: 'Someone will smile 😊 at you for no reason, and you will smile back before you realize it.',
    mood: 'warm',
    rarity: 0.82
  },
  {
    id: 'wholesome-2',
    category: 'wholesome',
    prediction: 'A tiny act of kindness 🤗 will fix your mood faster than any motivational reel.',
    mood: 'warm',
    rarity: 0.76
  },
  {
    id: 'wholesome-3',
    category: 'wholesome',
    prediction: 'You will finish one small task and feel like your life is finally under control.',
    mood: 'playful',
    rarity: 0.71
  },
  {
    id: 'wholesome-4',
    category: 'wholesome',
    prediction: 'Someone will remember a tiny detail 💝 about you, and it will make your whole day softer.',
    mood: 'warm',
    rarity: 0.66
  },
  {
    id: 'wholesome-5',
    category: 'wholesome',
    prediction: 'You will help someone in under 30 seconds and still think about it tonight.',
    mood: 'grounded',
    rarity: 0.6
  },
  {
    id: 'wholesome-6',
    category: 'wholesome',
    prediction: 'You will make a good decision today. It will probably be the one nobody notices.',
    mood: 'grounded',
    rarity: 0.64
  },
  {
    id: 'wholesome-7',
    category: 'wholesome',
    prediction: 'You will be fine. Not immediately. But eventually. ✨',
    mood: 'warm',
    rarity: 0.66
  },
  // Weirdly Specific Category
  {
    id: 'weird-1',
    category: 'weirdly_specific',
    prediction: 'You\'ll open the fridge 🍽️, stare inside for 4 seconds, and close it without taking anything.',
    mood: 'absurd',
    rarity: 0.69
  },
  {
    id: 'weird-2',
    category: 'weirdly_specific',
    prediction: 'At 3:17 PM ⏰, a perfectly timed snack will appear exactly when your energy quits the group chat.',
    mood: 'playful',
    rarity: 0.63
  },
  {
    id: 'weird-3',
    category: 'weirdly_specific',
    prediction: 'A random lyric 🎵 will solve one emotional crisis and create two new ones.',
    mood: 'absurd',
    rarity: 0.58
  },
  {
    id: 'weird-4',
    category: 'weirdly_specific',
    prediction: 'You will type a search query so specific 🔍 that even the internet will pause to judge you.',
    mood: 'chaotic',
    rarity: 0.62
  },
  {
    id: 'weird-5',
    category: 'weirdly_specific',
    prediction: 'A single sock 🧦 will reappear in a place you definitely checked twice.',
    mood: 'absurd',
    rarity: 0.55
  },
  {
    id: 'weird-6',
    category: 'weirdly_specific',
    prediction: 'You will type "haha" while maintaining a completely neutral facial expression.',
    mood: 'playful',
    rarity: 0.65
  },
  {
    id: 'weird-7',
    category: 'weirdly_specific',
    prediction: 'You will wait for the lift ⬆️, watch three people walk past, and still somehow miss it.',
    mood: 'absurd',
    rarity: 0.60
  },
  {
    id: 'weird-8',
    category: 'weirdly_specific',
    prediction: 'The power will go out ⚡ just long enough for you to open every window, then return the second you sit down.',
    mood: 'chaotic',
    rarity: 0.58
  },
  // Mildly Inconvenient Category
  {
    id: 'inconvenient-1',
    category: 'mildly_inconvenient',
    prediction: 'You\'ll walk into a room and immediately forget why.',
    mood: 'grounded',
    rarity: 0.72
  },
  {
    id: 'inconvenient-2',
    category: 'mildly_inconvenient',
    prediction: 'You will send a message, reread it twice, then notice one typo ✍️ exactly 8 minutes later.',
    mood: 'chaotic',
    rarity: 0.61
  },
  {
    id: 'inconvenient-3',
    category: 'mildly_inconvenient',
    prediction: 'You will unplug something 🔌 and instantly forget what needed charging first.',
    mood: 'grounded',
    rarity: 0.56
  },
  {
    id: 'inconvenient-4',
    category: 'mildly_inconvenient',
    prediction: 'You will open your notes app 📝 with urgency, then type only one mysterious word.',
    mood: 'chaotic',
    rarity: 0.59
  },
  {
    id: 'inconvenient-5',
    category: 'mildly_inconvenient',
    prediction: 'One important tab 📑 will vanish, then calmly return after you panic-refresh everything.',
    mood: 'grounded',
    rarity: 0.53
  },
  {
    id: 'inconvenient-6',
    category: 'mildly_inconvenient',
    prediction: 'You will be asked for an ETA ⏳ before anyone has explained the actual requirement.',
    mood: 'chaotic',
    rarity: 0.69
  },
  {
    id: 'inconvenient-7',
    category: 'mildly_inconvenient',
    prediction: 'If you think today was tough, tomorrow may arrive with notes. 📋',
    mood: 'chaotic',
    rarity: 0.44
  },
  // Suspiciously Accurate Category
  {
    id: 'accurate-1',
    category: 'suspiciously_accurate',
    prediction: 'You\'ll unlock your phone 📱 to check one thing and forget what that thing was.',
    mood: 'playful',
    rarity: 0.74
  },
  {
    id: 'accurate-2',
    category: 'suspiciously_accurate',
    prediction: 'Someone will explain something to you that you literally just explained to them. 🔁',
    mood: 'grounded',
    rarity: 0.7
  },
  {
    id: 'accurate-3',
    category: 'suspiciously_accurate',
    prediction: 'You will open one tab for one task and accidentally take a world tour 🌐 of the internet.',
    mood: 'chaotic',
    rarity: 0.64
  },
  {
    id: 'accurate-4',
    category: 'suspiciously_accurate',
    prediction: 'You will say "I am almost done" while beginning an entirely new side quest 🎮.',
    mood: 'playful',
    rarity: 0.67
  },
  {
    id: 'accurate-5',
    category: 'suspiciously_accurate',
    prediction: 'You will overthink a two-line text 💬 and still send it with "lol" at the end for safety.',
    mood: 'grounded',
    rarity: 0.61
  },
  {
    id: 'accurate-6',
    category: 'suspiciously_accurate',
    prediction: 'Someone will tell you a story you have already heard, and you will politely hear it again.',
    mood: 'grounded',
    rarity: 0.73
  },
  {
    id: 'accurate-7',
    category: 'suspiciously_accurate',
    prediction: 'You will say "we should catch up sometime" to someone you genuinely like, and neither of you will schedule it.',
    mood: 'grounded',
    rarity: 0.71
  },
  {
    id: 'accurate-8',
    category: 'suspiciously_accurate',
    prediction: 'You will have nothing particularly interesting happen today, and that may be the best part.',
    mood: 'warm',
    rarity: 0.68
  },
  {
    id: 'accurate-9',
    category: 'suspiciously_accurate',
    prediction: 'You\'ve stopped doom scrolling 🛑. I understand how hard that must have been.',
    mood: 'playful',
    rarity: 0.57
  },
  {
    id: 'accurate-10',
    category: 'suspiciously_accurate',
    prediction: 'Your productivity will peak right after you open Instagram 📸 "for two minutes."',
    mood: 'playful',
    rarity: 0.66
  },
  {
    id: 'accurate-11',
    category: 'suspiciously_accurate',
    prediction: 'You will finally start waking up early ⏰… in the next financial year.',
    mood: 'playful',
    rarity: 0.59
  },
  {
    id: 'accurate-12',
    category: 'suspiciously_accurate',
    prediction: 'You will tell yourself "tomorrow is the day" with the same sincerity as last month.',
    mood: 'playful',
    rarity: 0.63
  },
  // Indian Edition Category
  {
    id: 'india-1',
    category: 'indian_edition',
    prediction: 'Someone at home will ask you to switch off a light 💡 from another room.',
    mood: 'playful',
    rarity: 0.68
  },
  {
    id: 'india-2',
    category: 'indian_edition',
    prediction: 'A distant pressure cooker whistle 🔊 will become the official soundtrack of your concentration.',
    mood: 'grounded',
    rarity: 0.57
  },
  {
    id: 'india-3',
    category: 'indian_edition',
    prediction: 'Your mother will solve every crisis 🍛 with \'beta, have some more.\'',
    mood: 'warm',
    rarity: 0.62
  },
  {
    id: 'india-4',
    category: 'indian_edition',
    prediction: 'A relative will call ☎️, ask where you are, and somehow already know where you are.',
    mood: 'playful',
    rarity: 0.56
  },
  {
    id: 'india-5',
    category: 'indian_edition',
    prediction: 'You will say you are not hungry and then steal exactly three bites 🍽️ from someone else\'s plate.',
    mood: 'absurd',
    rarity: 0.54
  },
  {
    id: 'india-6',
    category: 'indian_edition',
    prediction: 'You will witness a debate about the fan speed 💨 that sounds like international diplomacy.',
    mood: 'chaotic',
    rarity: 0.5
  },
  {
    id: 'india-7',
    category: 'indian_edition',
    prediction: 'The only thing arriving on time this year will be your mother\'s call 📞 asking if you\'ve eaten.',
    mood: 'warm',
    rarity: 0.65
  },
  {
    id: 'india-8',
    category: 'indian_edition',
    prediction: 'Your diet will survive exactly until the first plate 🍪 of hot jalebis appears.',
    mood: 'chaotic',
    rarity: 0.63
  },
  {
    id: 'india-9',
    category: 'indian_edition',
    prediction: 'Your savings 💰 will grow slower than India\'s Olympic medal count.',
    mood: 'chaotic',
    rarity: 0.52
  },
  {
    id: 'india-10',
    category: 'indian_edition',
    prediction: 'Chai ☕ will fix 90% of your problems this year. The remaining 10% will need another cup.',
    mood: 'warm',
    rarity: 0.68
  },
  {
    id: 'india-11',
    category: 'indian_edition',
    prediction: 'An aunt 👧 will still ask about your weight and your job in the same breath.',
    mood: 'chaotic',
    rarity: 0.64
  }
];
