import React from "react";
import { Form, Input } from "antd";

type Props = {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value?: string;
};

const CustomInput = ({
  name,
  placeholder,
  type = "text",
  required = true,
  value,
}: Props) => {
  return (
    <Form.Item
      name={name}
      shouldUpdate={true}
      rules={[
        { required, message: "Обязательное поле" },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve();
            }

            if (name === "code") {
              if (value.length < 16 || value.length > 16) {
                return Promise.reject(
                  new Error("Код должен содержать 16 символов")
                );
              }

              if (value[0] !== "2" && value[0] !== "4" && value[0] !== "5") {
                return Promise.reject(
                  new Error(
                    "Не соответствует форматам карт: Visa, MasterCard, Мир"
                  )
                );
              }

              return Promise.resolve();
            }

            if (name === "date") {
              if (value.length < 5 || value.length > 5) {
                return Promise.reject(
                  new Error("Поле должно содержать 5 символов")
                );
              }

              if (value[value.indexOf("/")] !== "/") {
                return Promise.reject(
                  new Error("Поле должно соответствовать формату MM/YY")
                );
              }

              return Promise.resolve();
            }

            if (name === "cvv") {
              if (value.length < 3 || value.length > 3) {
                return Promise.reject(
                  new Error("Поле должно содержать 3 символа")
                );
              }

              return Promise.resolve();
            }

            if (name === "sum") {
              if (+value <= 0) {
                return Promise.reject(new Error("Сумма должна быть больше 0"));
              }

              return Promise.resolve();
            }

            if (name === "phoneNumber") {
              if (value.length < 12 || value.length > 12) {
                return Promise.reject(
                  new Error("Длинна номера должен быть 11 цифр")
                );
              }

              return Promise.resolve();
            }

            return Promise.resolve();
          },
        }),
      ]}
    >
      <Input placeholder={placeholder} type={type} size="large" />
    </Form.Item>
  );
};

export default CustomInput;
