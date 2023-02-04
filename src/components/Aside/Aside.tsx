import React from "react";
import styles from "./Aside.module.scss";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <span>Dev</span>
        challenges.io
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>Colors</li>
          <li>Typography</li>
          <li>Spaces</li>
          <li>Buttons</li>
          <li className={styles.active}>Inputs</li>
          <li>Grid</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
