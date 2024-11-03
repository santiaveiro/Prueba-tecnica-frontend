import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { MeetupProvider } from "./store/MeetupContext";

function App() {
  return (
    <MeetupProvider>
      <Router>
        <div data-testid="app">
          <MainNavigation />
          <Layout>
            <Routes>
              <Route path="/" element={<AllMeetupsPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/new-meetup" element={<NewMeetupsPage />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </MeetupProvider>
  );
}

export default App;
