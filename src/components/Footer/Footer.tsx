import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img
            src='/UStudy_footer.png'
            alt='ustudy logo'
          />
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.links}>
          <ul>
            <li>
              <a href='#advantages'>Преимущества</a>
            </li>
            <li>
              <a href='#course'>О курсе</a>
            </li>
            <li>
              <a href='#contact'>Связаться с нами</a>
            </li>
          </ul>
        </div>
        <div className={styles.contacts}>
          <p>Контакты:</p>
          <p>Телефон: +7771756585</p>
          <p>Почта: ustudy@mail.ru</p>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className={styles.socials}>
          <a href='https://instagram.com'>
            <img
              src='/instagram.png'
              alt='Instagram'
            />
          </a>
          <a href='https://facebook.com'>
            <img
              src='/facebook.png'
              alt='Facebook'
            />
          </a>
        </div>
        <p>Company 2024 all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
