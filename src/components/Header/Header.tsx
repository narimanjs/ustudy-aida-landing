import styles from "./Header.module.scss";
import Button from "#/ui/Button/Button";
// import Modal from "#/ui/Modal/Modal";
// import Form from "#/ui/Form/Form";
import MyIcon from "#/ui/MyIcon/MyIcon";
// import useModal from "#/utils/hooks/useModal";

const Header = () => {
  // Закомментил модалку, так как она не нужна для лендинга
  // const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href='/'>
            <MyIcon />
          </a>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href='#advantages'>Преимущества</a>
            </li>
            <li>
              <a href='#course'>О курсе</a>
            </li>
            <li>
              <a href='#contacts'>Контакты</a>
            </li>
          </ul>
          <div className={styles.contactButton}>
            <a
              href='https://wa.me/77001400505'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button
                text='Связаться с нами'
                color='primary'
                disableScale={true}
                // onClick={openModal}
              />
            </a>
          </div>
        </nav>
      </header>

      {/* <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <Form onClose={closeModal} />
      </Modal> */}
    </>
  );
};

export default Header;
