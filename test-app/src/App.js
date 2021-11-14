import ChangeSection from "./components/changeSection/ChangeSection";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #0ED4FF, #FFFFFF)",
        width: "100vw",
        height: "100vh",
        margin: "-8px",
      }}
    >
      <Header />
      <ChangeSection />
    </div>
  );
};

export default App;
