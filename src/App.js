import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Utiliser le mode sombre
      </label>
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <Panel title="Bienvenue">
      <Button>S'inscrire</Button>
      <Button>Se connecter</Button>
    </Panel>
  );
}
/**
 *
 * {children} represente le fils du components Panel
 *
 */
function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
