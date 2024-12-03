import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import Features from "./sections/Features.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Hero from "./sections/Hero.jsx";
import Events from "./pages/Events.jsx";
import Competitions from "./pages/Competitions.jsx";
import Gallery from "./pages/Gallery.jsx";
import Team from "./pages/Team.jsx";
import Schedule from "./pages/Schedule.jsx";
import Register from "./pages/Register.jsx";

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Hero />
              <Features />
              <Faq />
              <Testimonials />
              <Download />
            </MainLayout>
          }
        />
        <Route
          path="/events"
          element={
            <MainLayout>
              <Events />
            </MainLayout>
          }
        />
        <Route
          path="/competitions"
          element={
            <MainLayout>
              <Competitions />
            </MainLayout>
          }
        />
        <Route
          path="/schedule"
          element={
            <MainLayout>
              <Schedule />
            </MainLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <MainLayout>
              <Gallery />
            </MainLayout>
          }
        />
        <Route
          path="/team"
          element={
            <MainLayout>
              <Team />
            </MainLayout>
          }
        />
        <Route
          path="/register"
          element={
            <MainLayout>
              <Register />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
