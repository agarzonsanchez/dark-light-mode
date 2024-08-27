import useLocalStorage from "./useLocalStorage";
import "./index.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);
  return (
    <div className="dark-light-mode" data-theme={theme}>
      <div className="container">
        <p>Hello world</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
