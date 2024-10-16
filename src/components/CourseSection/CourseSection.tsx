import styles from "./CourseSection.module.scss";
import Button from "../Button/Button";

const CourseSection = () => {
  return (
    <section className={styles.courseSection}>
      <span className={styles.flask1}>
        <img
          src='/beaker_5011372 1.png'
          alt='tube'
        />
      </span>
      <div className={styles.imageWrapper}>
        <img
          src='/Course.png'
          alt='Student'
        />
      </div>
      <span className={styles.flask2}>
        <img
          src='/flask_1448877 1.png'
          alt='tube'
        />
      </span>
      <div className={styles.courseContent}>
        <span className={styles.tube}>
          <img
            src='/Test tube with red liquid for chemistry lessons 3D illustration 1.png'
            alt='tube'
          />
        </span>
        <h2>Биология-Химия</h2>
        <p>Курс включает: </p>
        <ul>
          <li>Математическая грамотность</li>
          <li>Грамотность чтения</li>
          <li>История Казахстана</li>
          <li>Биология</li>
          <li>Химия</li>
        </ul>
        <p>Длительность курса: 12 месяцев</p>
        <div className={styles.price}>
          <span className={styles.normal}>всего за</span>{" "}
          <strong>16 660 тг/мес</strong>
        </div>
        <span className={styles.microbe}>
          <img
            src='/microbe_8186946 1.png'
            alt='microbe'
          />
        </span>
        <div className={styles.contactButton}>
          <Button
            text='Записаться на курс'
            color='primary'
            size={""}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
