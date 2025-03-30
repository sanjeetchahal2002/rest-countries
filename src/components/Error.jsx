function Error({ message = "Something went very wrong!" }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{message}</div>
  );
}

export default Error;
