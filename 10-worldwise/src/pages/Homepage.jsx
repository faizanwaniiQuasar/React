import NavBar from "../component/NavBar";
import AppNav from "../component/AppNav";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <NavBar />
      <AppNav />
      <h1 className="test">World wise</h1>
      <Link to="/app">Go to the App </Link>
    </div>
  );
}

export default Homepage;
