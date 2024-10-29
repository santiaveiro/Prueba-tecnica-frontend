// App.js
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { FavoriteProvider } from "./store/FavoriteContext";

function App() {
  return (
    <FavoriteProvider>
      <Router>
        <MainNavigation />
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/new-meetup" element={<NewMeetupsPage />} />
          </Routes>
        </Layout>
      </Router>
    </FavoriteProvider>
  );
}

export default App;
