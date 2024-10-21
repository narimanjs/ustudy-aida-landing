import styles from "./IntroSection.module.scss";
import Button from "#/ui/Button/Button";
import Modal from "#/ui/Modal/Modal";
import Form from "#/ui/Form/Form";
import useModal from "#/utils/hooks/useModal";

const IntroSection = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
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
            onClick={openModal}
          />
        </div>
      </div>
      <div className={styles.image}>
        <img
          src='/assets/img/IntroSection.png'
          alt='Student'
        />
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

export default IntroSection;
