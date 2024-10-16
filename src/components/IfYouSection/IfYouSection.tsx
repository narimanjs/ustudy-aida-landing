import styles from "./IfYouSection.module.scss";

const IfYouSection = () => {
  return (
    <section className={styles.ifYouSection}>
      <h2>Если ты...</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <img
            src='/Frame 511.png'
            alt='Thinking girl'
          />
        </div>
        <div className={styles.bubbles}>
          <span className={`${styles.bubble} ${styles.bubbleRed}`}>
            Боишься за результат?
          </span>
          <span className={`${styles.bubble} ${styles.bubbleGreen}`}>
            Хочешь поступить на грант?
          </span>
          <span className={`${styles.bubble} ${styles.bubbleBlue}`}>
            Сложно взять себя в руки?
          </span>
          <span className={`${styles.bubble} ${styles.bubbleYellow}`}>
            Не знаешь с чего начать?
          </span>
          <span className={`${styles.bubble} ${styles.bubbleOrange}`}>
            Испытываешь стресс?
          </span>
        </div>
      </div>
    </section>
  );
};

export default IfYouSection;
