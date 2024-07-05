import { useNavigate } from "react-router-dom";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const navigate = useNavigate();

  const redirectToAppexChart = () => {
    navigate("/apexchart");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#ffffff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={redirectToAppexChart}
      >
        Go to Appex Chart
      </button>
    </div>
  );
}
