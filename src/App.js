import './App.css';
import NavigationBar from "./components/Header";
import HomePage from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
