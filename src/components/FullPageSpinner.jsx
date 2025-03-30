import styles from "./FullPageSpinner.module.css";
function FullPageSpinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.spinner}></div>
    </div>
  );
}

export default FullPageSpinner;
