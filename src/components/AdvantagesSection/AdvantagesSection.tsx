import styles from "./AdvantagesSection.module.scss";

const AdvantagesSection = () => {
  return (
    <section
      className={styles.advantagesSection}
      id='advantages'
    >
      <h2>Почему Ustudy — лучший выбор для подготовки к ЕНТ?</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <img
            src='/AdvantagesSection.png'
            alt='Working on laptop'
          />
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Все в одном</h3>
            <p>Включает подготовку по всем предметам</p>
          </div>
          <div className={styles.card}>
            <h3>Поддержка менторов</h3>
            <p>Преподаватели с опытом помогут в разборе сложных тем</p>
          </div>
          <div className={styles.card}>
            <h3>Регулярные пробные тесты</h3>
            <p>
              Многочисленные практические задания и тесты помогут чувствовать
              себя уверенно на ЕНТ
            </p>
          </div>
          <div className={styles.card}>
            <h3>Гибкий график</h3>
            <p>Учитесь в удобное время, доступ к материалам 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
