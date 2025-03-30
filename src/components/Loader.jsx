function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        color: "gold",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid rgba(255, 215, 0, 0.5)",
          borderTop: "4px solid gold",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>
      <strong style={{ textTransform: "capitalize", marginTop: "10px" }}>
        Loading...
      </strong>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Loader;
