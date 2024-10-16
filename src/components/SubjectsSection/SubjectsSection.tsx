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
            src='/ourCourse.png'
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
              src='/mathematics.png'
              alt='Математическая грамотность'
            />
            <div className={styles.cardText}>Математическая грамотность</div>
          </div>
          <div className={styles.card}>
            <img
              src='/Reading.png'
              alt='Грамотность чтения'
            />
            <div className={styles.cardText}>Грамотность чтения</div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.card}>
          <img
            src='/biology.png'
            alt='Биология'
          />
          <div className={styles.cardText}>Биология</div>
        </div>
        <div className={styles.card}>
          <img
            src='/chemistry.png'
            alt='Химия'
          />
          <div className={styles.cardText}>Химия</div>
        </div>
        <div className={styles.card}>
          <img
            src='/history.png'
            alt='История Казахстана'
          />
          <div className={styles.cardText}>История Казахстана</div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
