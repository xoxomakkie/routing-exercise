import { useParams, Link } from "react-router-dom";
import { celestialObjects } from "../data/celestialData";
import NavigateBackButton from "../components/NavigateBackButton";

export default function ContentPage() {
  const { category, id } = useParams();

  const object = celestialObjects.find(
    (item) => item.category === category && item.id === id
  );

  if (!object) {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>Not Found</h2>
        <NavigateBackButton />
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{object.title}</h1>
      <p>{object.content}</p>
      <NavigateBackButton />
    </div>
  );
}
