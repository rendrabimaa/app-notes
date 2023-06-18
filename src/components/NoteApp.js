import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { getUserLogged, putAccessToken } from "../utils/api";
import ThemeContext from "../context/ThemeContext";
const LandingPage = lazy(() => import("../pages/LandingPage"));
const About = lazy(() => import("../pages/About"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NotesPage = lazy(() => import("../pages/NotesPage"));
const AddNotePage = lazy(() => import("../pages/AddNotePage"));
const CategoriesPage = lazy(() => import("../pages/CategoriesPage"));
const DetailNotePage = lazy(() => import("../pages/DetailNotePage"));

function NoteApp() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [categoryActive, setCategoryActive] = React.useState('all');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const changeTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', changeTheme);
      return changeTheme;
    });
  };

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  React.useEffect(() => {
    async function fetchAuthedUserData() {
      const { data } = await getUserLogged();

      setAuthedUser(data);
      setInitializing(false);
    }
    fetchAuthedUserData();
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage loginSuccess={onLoginSuccess} />} />
        </Routes>
      </Suspense>
    );
  }
  
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className="app" data-theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/*" element={<NotesPage user={authedUser} setUser={setAuthedUser} categoryActive={categoryActive} />} />
            <Route path="/notes/add" element={<AddNotePage user={authedUser} setUser={setAuthedUser} />} />
            <Route path="/note/:id" element={<DetailNotePage user={authedUser} setUser={setAuthedUser} />} />
            <Route path="/categories" element={<CategoriesPage user={authedUser} setUser={setAuthedUser} setCategoryActive={setCategoryActive} />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
}

export default NoteApp;
