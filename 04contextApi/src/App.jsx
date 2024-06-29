import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
import { ThemeProvider } from "./context/theme";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>

      <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
