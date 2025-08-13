import { Link, useParams } from "react-router-dom";
import { celestialObjects } from "../data/celestialData";

export default function CategoryPage() {
  const { category } = useParams();

  const filtered = celestialObjects.filter(obj => obj.category === category);

  if (filtered.length === 0) {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>No objects found in {category}</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{category.toUpperCase()}</h1>
      <ul>
        {filtered.map(obj => (
          <li key={obj.id}>
            <Link to={`/${category}/${obj.id}`}>{obj.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
