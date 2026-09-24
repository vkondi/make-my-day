export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p className="footer-text">© {currentYear} Vishwajeet Kondi</p>
    </footer>
  );
}
