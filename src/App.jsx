import MainSection from './components/MainSection';
import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/header";
import Footer from "./components/Footer";


function App() {
  return (
      <div className="flex p-4">
      <NavBar />
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;