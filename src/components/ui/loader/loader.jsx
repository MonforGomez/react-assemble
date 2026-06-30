import { MoonLoader } from "react-spinners";

function Loader() {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(4px)",
        zIndex: 9999,
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center rounded-circle"
        style={{
          width: "250px",
          height: "250px",
          backgroundColor: "rgba(20, 20, 20, 0.6)",
          boxShadow: "0 0 55px #1b8da2",
          border: "1px solid rgba(27, 141, 162, 0.2)",
        }}
      >
        <MoonLoader
          color="#1b8da2"
          loading={true}
          size={150}
          speedMultiplier={0.8}
        />
      </div>
    </div>
  );
}

export default Loader;
