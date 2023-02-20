import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
};

export default App;
