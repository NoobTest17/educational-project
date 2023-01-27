import React from 'react';
import classes from './Form.module.css';
import PointForm from "./PointRegistrForm/PointForm";
import MyButton from "../../UI/button/MyButton";

const Form = () => {
  const fields = [
    {id: 1, title: 'Фамилия', body: '', name: 'surname'},
    {id: 2, title: 'Имя', body: '', name: 'name'},
    {id: 3, title: 'Отчество', body: '', name: 'patronymic'},
    {id: 4, title: 'Организация', body: '', name: 'organization'},
    {id: 5, title: 'Контактный телефон', body: '', name: 'phone'},
    {id: 6, title: 'E-mail', body: '', name: 'email'},
    {id: 7, title: 'Роль', body: '', name: 'role'},
    {id: 8, title: 'Пароль', body: '', name: 'password'},
    {id: 9, title: 'Повторите пароль', body: '', name: 'confirmationsPassword'},
  ];
  const arrayData = [];
  const newData = {};
  const changeData = (localData) => {
    newData[localData.name] = localData.value;
  }
  const addNewData = (e) => {
    e.preventDefault();
    console.log(newData)
  }

  return (
    <form>
      <div>
        {fields.map(field => {
          return <PointForm
            key={field.id}
            title={field.title}
            name={field.name}
            change = {changeData}
          />
        })}
      </div>
      <div className={classes.btn}>
        <MyButton onClick={addNewData}>Зарегестрироваться</MyButton>
      </div>
    </form>
  );
};

export default Form;