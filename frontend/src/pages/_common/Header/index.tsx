import styles from './Header.module.scss';

interface IHeader {
  heading: string,
  subheading?: string,
}

const Header = ({ heading, subheading }: IHeader) => (
  <div className={styles.headingContainer}>
    <h1 className={styles.heading}>{heading}</h1>
    {subheading && <h2 className={styles.subheading}>{subheading}</h2>}
  </div>
);

export default Header;
