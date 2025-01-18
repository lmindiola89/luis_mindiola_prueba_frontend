import "./index.scss";
import Cardslider from "./components/Cardslider/Cardslider";
import Forms from "./components/Forms/Forms";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Cardslider />
        <Forms />
        <Footer />
      </div>
    </>
  );
}

export default App;
