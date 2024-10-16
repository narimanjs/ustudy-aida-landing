import React from "react";
import styles from "./IfYouSection.module.scss";

const IfYouSection: React.FC = () => {
  return (
    <section className={styles.ifYouSection}>
      <h2>Если ты...</h2>
      <div className={styles.content}>
        <div className={styles.ellipseOne}>
          <img
            src='/Ellipse3.png'
            alt='ellipseOne'
          />
        </div>
        <div className={styles.ellipseTwo}>
          <img
            src='/Ellipse2.png'
            alt='ellipseTwo'
          />
        </div>

        <div className={styles.image}>
          <img
            src='/IfYouSection.png'
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
