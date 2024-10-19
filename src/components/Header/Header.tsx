import React, { useState } from "react";
import styles from "./Header.module.scss";
import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";
import Form from "../../ui/Form/Form";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href='/'>
            <img
              src='/assets/img/UStudy.svg'
              alt='ustudy logo'
            />
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
            <Button
              text='Связаться с нами'
              color='primary'
              disableScale={true}
              onClick={openModal}
            />
          </div>
        </nav>
      </header>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <Form />
      </Modal>
    </>
  );
};

export default Header;
