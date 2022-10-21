import "./App.css";
import { Navbar, TopSection, Footer, Benefits, Articles } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <TopSection />
        <Benefits />
        <Articles />
        <Footer />
      </div>
    </div>
  );
}

export default App;
