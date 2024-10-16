import styles from "./IntroSection.module.scss";
import Button from "../Button/Button";

const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.content}>
        <h1>
          Подготовься с <span className={styles.highlight}>Ustudy</span> и
          сделай первый шаг к <span className={styles.highlight}>гранту!</span>
        </h1>
        <p>
          Комплексная подготовка к ЕНТ: Химия, Биология и обязательные предметы
          — составляют один курс!
        </p>
        <div className={styles.contentButton}>
          <Button
            text='Записаться на курс'
            color='primary'
            size={""}
          />
        </div>
      </div>
      <div className={styles.image}>
        <img
          src='/IntroSection.png'
          alt='Student'
        />
      </div>
    </section>
  );
};

export default IntroSection;
