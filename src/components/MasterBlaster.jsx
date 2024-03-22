import MainSection from './components/MainSection';
import NavBar from "./components/NavBar";
import Header from "./components/header";



function MasterBlaster() {
  return (
      <div className="flex h-screen">
      <NavBar />
      <Header />
      <MainSection />
    </div>
  );
}

export default MasterBlaster;