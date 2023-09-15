import "./App.css";
import Navbar from "./components/Navbar";
import RouteComponent from "./components/Route";
function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <RouteComponent />
      </main>
    </div>
  );
}

export default App;
