import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <a href='/'>
            <img
              src='/assets/img/UStudy_footer.svg'
              alt='ustudy logo'
            />
          </a>
        </div>

        <div className={styles.socials}>
          <a
            href='https://www.instagram.com/ustudykazakhstan/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/assets/icons/instagram.svg'
              alt='Instagram'
            />
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='/assets/icons/facebook.svg'
              alt='Facebook'
            />
          </a>
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
          <p>Контакты</p>
          <p>
            Телефон: <a href='tel:+77001400505'>+7 (700) 140 05 05 </a>
          </p>
          <p>
            Почта: <a href='mailto:info@ustudy.kz'> info@ustudy.kz</a>
          </p>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Company 2024 all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
