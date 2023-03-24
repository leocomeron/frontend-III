const ThemeToggleButton = ({ onClick, theme }) => (
  <button
    onClick={onClick}
    style={{ background: theme.background, color: theme.font }}
  >
    {theme.background === "black" ? "🌞" : "🌜"}
  </button>
);

export default ThemeToggleButton;
