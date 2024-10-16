import styles from "./Header.module.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src='/UStudy.png'
          alt='ustudy logo'
        />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href='#about'>О нас</a>
          </li>
          <li>
            <a href='#advantages'>Преимущества</a>
          </li>
          <li>
            <a href='#course'>О курсе</a>
          </li>
          <li>
            <a href='#contacts'>Контакты</a>
          </li>
        </ul>
        <div className={styles.contactButton}>
          <Button
            text='Связаться с нами'
            color='primary'
            size={""}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
