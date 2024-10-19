import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.scss";

const FormComponent: React.FC = () => {
  const validationSchema = Yup.object({
    lastName: Yup.string()
      .min(2, "Фамилия должна содержать минимум два символа")
      .required("Обязательно"),
    firstName: Yup.string()
      .min(2, "Имя должно содержать минимум 2 символа")
      .required("Обязательно"),
    phone: Yup.string()
      .matches(
        /^(\+?\d{1,4}[-.\s]?|)?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        "Неверный формат номера"
      )
      .required("Обязательно"),
    subject: Yup.string().required("Обязательно выбрать предмет"),
  });

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ firstName: "", lastName: "", phone: "", subject: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const currentDate = new Date().toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          alert(`Данные формы:
                  Фамилия: ${values.lastName}
                  Имя: ${values.firstName}
                  Телефон: ${values.phone}
                  Предмет: ${values.subject}
                  Дата отправки: ${currentDate}`);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.formGroup}>
              <label htmlFor='lastName'>Фамилия:</label>
              <Field
                type='text'
                name='lastName'
              />
              <ErrorMessage
                name='lastName'
                component='div'
                className={styles.errorMessage}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='firstName'>Имя:</label>
              <Field
                type='text'
                name='firstName'
              />
              <ErrorMessage
                name='firstName'
                component='div'
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='phone'>Телефон:</label>
              <Field
                type='tel'
                name='phone'
              />
              <ErrorMessage
                name='phone'
                component='div'
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='subject'>Предмет:</label>
              <Field
                as='select'
                name='subject'
              >
                <option value=''>Выберите предмет</option>
                <option value='Химия'>Химия</option>
                <option value='Биология'>Биология</option>
                <option value='История Казахстана'>История Казахстана</option>
                <option value='Математическая грамотность'>
                  Математическая грамотность
                </option>
                <option value='Грамотность чтения'>Грамотность чтения</option>
              </Field>
              <ErrorMessage
                name='subject'
                component='div'
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.buttonGroup}>
              <button
                type='submit'
                disabled={isSubmitting}
              >
                Отправить
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
