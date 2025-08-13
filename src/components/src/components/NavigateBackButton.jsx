import { useNavigate } from "react-router-dom";

export default function NavigateBackButton() {
  const navigate = useNavigate();
  return (
    <button
      style={{ marginTop: "1rem" }}
      onClick={() => navigate(-1)}
    >
      ← Go Back
    </button>
  );
}
