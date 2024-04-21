import styles from "./Display.module.css";

import React from "react";

let Display = ({ calValue }) => {
  return (
    <>
      <input type="text" className={styles.display} value={calValue} />
    </>
  );
};

export default Display;
