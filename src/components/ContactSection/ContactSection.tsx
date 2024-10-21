import styles from "./ContactSection.module.scss";
import Button from "../../ui/Button/Button";
// import Modal from "#/ui/Modal/Modal";
// import Form from "#/ui/Form/Form";
// import useModal from "#/utils/hooks/useModal";

const ContactSection = () => {
  // Закомментил модалку, так как она не нужна для лендинга
  // const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <section
      className={styles.contactSection}
      id='contacts'
    >
      <div className={styles.icon}>
        <img
          src='/assets/img/question-mark.png'
          alt='Question Icon'
        />
      </div>
      <div className={styles.content}>
        <h2>У вас остались вопросы? Напишите нам!</h2>
        <div className={styles.contactButton}>
          <a
            href='https://wa.me/77001400505'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button
              text='Связаться с нами'
              color='primary'
              size={""}
              // onClick={openModal}
            />
          </a>
        </div>
      </div>
      {/* <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <Form onClose={closeModal} />
      </Modal> */}
    </section>
  );
};

export default ContactSection;
