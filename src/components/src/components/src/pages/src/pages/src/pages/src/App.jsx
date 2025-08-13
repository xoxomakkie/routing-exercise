import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ContentPage from "./pages/ContentPage";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:id" element={<ContentPage />} />
      </Routes>
    </div>
  );
}
