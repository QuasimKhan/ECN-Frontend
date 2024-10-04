import { useLocation } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";

const LayoutWithNavBar = ({ children }) => {
  const location = useLocation();  // This will now work without issues

  return (
    <>
      {location.pathname !== "/dashboard" && <NavBar />}
      {children}
      {location.pathname !== "/dashboard" && <Footer />}
    </>
  );
};

export default LayoutWithNavBar;
