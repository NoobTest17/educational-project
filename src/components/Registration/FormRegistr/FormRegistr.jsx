import React from 'react';
import PointFormRegistr from "./PointRegistrForm/PointFormRegistr";

const FormRegistr = () => {
  return (
    <div>
        <PointFormRegistr title="Фамилия"/>
        <PointFormRegistr title="Имя"/>
        <PointFormRegistr title="Имя"/>
        <PointFormRegistr title="Организация"/>
        <PointFormRegistr title="Контактный телефон"/>
        <PointFormRegistr title="E-mail"/>
        <PointFormRegistr title="Роль"/>
        <PointFormRegistr title="Пароль"/>
        <PointFormRegistr title="Повторите пароль"/>
    </div>
  );
};

export default FormRegistr;