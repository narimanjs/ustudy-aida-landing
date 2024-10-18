import styles from "./ContactSection.module.scss";
import Button from "../Button/Button";

const ContactSection = () => {
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
          <Button
            text='Связаться с нами'
            color='primary'
            size={""}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
