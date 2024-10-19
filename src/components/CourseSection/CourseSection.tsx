import { useState } from "react";
import styles from "./CourseSection.module.scss";
import Button from "#/ui/Button/Button";
import Modal from "#/ui/Modal/Modal";
import Form from "#/ui/Form/Form";

const CourseSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className={styles.courseSection}>
      <span className={styles.flask1}>
        <img
          src='/assets/img/beaker_5011372 1.png'
          alt='tube'
        />
      </span>
      <div className={styles.imageWrapper}>
        <img
          src='/assets/img/Course.png'
          alt='Student'
        />
      </div>
      <span className={styles.flask2}>
        <img
          src='/assets/img/flask_1448877 1.png'
          alt='tube'
        />
      </span>
      <div className={styles.courseContent}>
        <span className={styles.tube}>
          <img
            src='/assets/img/Test tube with red liquid for chemistry lessons 3D illustration 1.png'
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
            src='/assets/img/microbe_8186946 1.png'
            alt='microbe'
          />
        </span>
        <div className={styles.contactButton}>
          <Button
            text='Записаться на курс'
            color='primary'
            size={""}
            onClick={openModal}
          />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <Form />
      </Modal>
    </section>
  );
};

export default CourseSection;
