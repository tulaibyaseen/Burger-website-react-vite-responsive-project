import Header from "./components/Header";
import Home from "./components/Home";
import Category from "./components/Category";
import Promo from "./components/Promo";
import About from "./components/About";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Navbar Section */}
      <Header />
      <main>
        {/* Home Section */}
        <Home />
        {/* Category Section */}
        <Category />
        {/* Promo Section */}
        <Promo />
        {/* About Section */}
        <About />
        {/* Menu Section */}
        <Menu />
        {/* Review Section */}
        <Review />
        {/* Contact Section */}
        <Contact />
      </main>
      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
