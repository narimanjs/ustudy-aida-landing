import styles from "./SubjectsSection.module.scss";

const SubjectsSection = () => {
  return (
    <section
      className={styles.subjectsSection}
      id='course'
    >
      <div className={styles.topSection}>
        <div className={styles.imageWrapper}>
          <img
            src='/assets/img/ourCourse.png'
            alt='Student learning'
          />
          <div className={styles.imageText}>
            Наши курсы охватывают 5 предметов — всё в одном месте для
            максимальной эффективности!
          </div>
        </div>
        <div className={styles.sideCards}>
          <div className={styles.card}>
            <img
              src='/assets/img/mathematics.png'
              alt='Matmatics'
            />
            <div className={styles.cardText}>Математическая грамотность</div>
          </div>
          <div className={styles.card}>
            <img
              src='/assets/img/Reading.png'
              alt='Gramar reading'
            />
            <div className={styles.cardText}>Грамотность чтения</div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.card}>
          <img
            src='/assets/img/biology.png'
            alt='Biology'
          />
          <div className={styles.cardText}>Биология</div>
        </div>
        <div className={styles.card}>
          <img
            src='/assets/img/chemistry.png'
            alt='Chemistry'
          />
          <div className={styles.cardText}>Химия</div>
        </div>
        <div className={styles.card}>
          <img
            src='/assets/img/history.png'
            alt='History of Kazakhstan'
          />
          <div className={styles.cardText}>История Казахстана</div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
