import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "1rem", color: "#fff" }}>Home</Link>
      <Link to="/planets" style={{ marginRight: "1rem", color: "#fff" }}>Planets</Link>
      <Link to="/stars" style={{ marginRight: "1rem", color: "#fff" }}>Stars</Link>
      <Link to="/galaxies" style={{ marginRight: "1rem", color: "#fff" }}>Galaxies</Link>
    </nav>
  );
}
