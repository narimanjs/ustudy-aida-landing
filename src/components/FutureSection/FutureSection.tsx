import styles from "./FutureSection.module.scss";
import Button from "#/ui/Button/Button";
import Modal from "#/ui/Modal/Modal";
import Form from "#/ui/Form/Form";
import useModal from "#/utils/hooks/useModal";

const FutureSection = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <section className={styles.futureSection}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h2 className={styles.cardContent1}>Сделай вклад в свое будущее</h2>
          <p>
            Наш курс поможет вам успешно сдать ЕНТ и поступить в выбранный
            университет. Начните готовиться уже сегодня, и создайте прочную
            основу для своей карьеры.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h2>Получите бесплатную консультацию</h2>
          <p className={styles.cardContentP}>
            Нужна помощь? Получите бесплатную консультацию!
          </p>
          <div className={styles.cardButton}>
            <Button
              text='Получить консультацию'
              color='primary'
              size={""}
              onClick={openModal}
            />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <Form onClose={closeModal} />
      </Modal>
    </section>
  );
};

export default FutureSection;
