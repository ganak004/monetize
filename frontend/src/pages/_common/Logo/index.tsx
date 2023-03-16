import styles from "./Logo.module.scss";

interface ILogo {
  color: "light" | "dark";
}

const Logo = ({ color }: ILogo) => {
  return (
    <div
      className={`${styles.logo} ${
        color === "light" ? styles.logoLight : styles.logoDark
      }`}
    >
      M
    </div>
  );
};

export default Logo;
