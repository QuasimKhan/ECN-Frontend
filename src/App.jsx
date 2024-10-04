import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import StudyMaterials from "./components/StudyMaterials/StudyMaterials";
import Books from "./components/Books/Books";
import Footer from "./components/Footer/Footer";
import Notices from "./components/Notices/Notices";
import { GalleryWithTab } from "./components/Gallery/Gallery";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import AboutECN from "./components/About/AboutECN/AboutECN";
import ArkaaneShura, { profileData } from "./components/About/ArkaaneShura/ArkaaneShura";
import { Helmet } from "react-helmet";
import ProfileView from "./components/About/ArkaaneShura/ProfileView/ProfileView";
import AboutNaseerpur from "./components/About/AboutNaseerpur/AboutNaseerpur";
import Quran from "./components/Books/Quran/Quran";
import { Layout } from "./components/Dashboard/Layout";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/Dashboard/ProtectedRoute";
import Login from "./pages/Login";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Helmet>
          <title>Educational Committee of Naseerpur - ECN</title>
          <meta
            name="description"
            content="The Educational Committee of Naseerpur (ECN), based in Naseerpur, is dedicated to spreading education and awareness. The Committee tirelessly works to teach and support learning, making a positive impact on society."
          />
          <meta
            name="keywords"
            content="ecn, Educational Committee of Naseerpur, ECNaseerpur, Naseerpur, Naseerpur Azamgarh, Naseerpur Educational society, Naseerpur Educational Committee, Quasim Khan"
          />
          <link rel="canonical" href="https://ecnaseerpur.in" />
          <meta name="robots" content="index,follow" />
          <meta name="author" content="Quasim Khan, ECN" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Educational Committee of Naseerpur - ECN" />
          <meta
            property="og:description"
            content="The Educational Committee of Naseerpur (ECN), based in Naseerpur, is dedicated to spreading education and awareness. The Committee tirelessly works to teach and support learning, making a positive impact on society."
          />
          <meta
            property="og:image"
            content="https://ecnaseerpur.in/assets/logo-CCgY3ykc.png"
          />
          <meta property="og:url" content="https://ecnaseerpur.in" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Educational Committee of Naseerpur - ECN" />
          <meta
            name="twitter:description"
            content="The Educational Committee of Naseerpur (ECN), based in Naseerpur, is dedicated to spreading education and awareness. The Committee tirelessly works to teach and support learning, making a positive impact on society."
          />
          <meta
            name="twitter:image"
            content="https://ecnaseerpur.in/assets/logo-CCgY3ykc.png"
          />
        </Helmet>

        <NavBar /> {/* Public NavBar shown on all pages except login */}
        

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/studymaterials" element={<StudyMaterials />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/quran" element={<Quran />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/gallery" element={<GalleryWithTab />} />
          <Route path="/gallery/:page" element={<GalleryWithTab />} />
          <Route path="/about/aboutecn" element={<AboutECN />} />
          <Route path="/about/arkaane-shura" element={<ArkaaneShura />} />
          <Route path="/about/about-naseerpur" element={<AboutNaseerpur />} />
          <Route path="/about/arkaane-shura/:profileName" element={<ProfileView profileData={profileData} />} />
          <Route path="/login" element={<Login />} />

          
        </Routes>

        <Footer /> {/* Public Footer */}

        <Routes>
          {/* Protected Route for Dashboard */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          } />

          {/* Catch-all Route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
