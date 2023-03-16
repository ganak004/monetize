import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context";
import Header from "../_common/Header";
import Logo from "../_common/Logo";
import ProgressBar from "./_common/ProgressBar";
import Income from "./_income-expenditure/Income";
import styles from "./Walkthrough.module.scss";

const Walkthrough = () => {
  const { lightMode } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.main} ${
        lightMode ? styles.backgroundLight : styles.backgroundDark
      }`}
    >
      <Logo color="light" />
      <ProgressBar progress={25} />
      <div className={styles.innerContainer}>
        <Header
          heading="Welcome!"
          subheading="Let's find out a bit about you"
        />
        <Income />
      </div>
    </div>
  );
};

export default Walkthrough;
