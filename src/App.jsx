import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store/store";
import FullPageSpinner from "./components/FullPageSpinner";

import ThemeProvider from "./contexts/ThemeContext";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const CountryPage = lazy(() => import("./pages/CountryPage/CountryPage"));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Suspense fallback={<FullPageSpinner />}>
            <Routes>
              <Route path="/" element={<Navigate to="/app" replace={true} />} />
              <Route path="/app" element={<HomePage />} />
              <Route path="/app/:id" element={<CountryPage />} />
              <Route path="*" element={<div>PAGE NOT FOUND🥲</div>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
