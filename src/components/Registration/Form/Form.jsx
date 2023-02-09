import React, {useState} from 'react';
import classes from './Form.module.css';
import FormItem from "./FormItem/FormItem";
import MyButton from "../../UI/button/MyButton";

const Form = () => {
  const [itemForm, setItemFrom] = useState([
    {id: 1, title: 'Фамилия', body: '', name: 'surname'},
    {id: 2, title: 'Имя', body: '', name: 'name'},
    {id: 3, title: 'Отчество', body: '', name: 'patronymic'},
    {id: 4, title: 'Организация', body: '', name: 'organization'},
    {id: 5, title: 'Контактный телефон', body: '', name: 'phone'},
    {id: 6, title: 'E-mail', body: '', name: 'email'},
    {id: 7, title: 'Роль', body: '', name: 'role'},
    {id: 8, title: 'Пароль', body: '', name: 'password'},
    {id: 9, title: 'Повторите пароль', body: '', name: 'confirmationsPassword'},
  ]);

  return (
    <form className={classes.form}>
      {itemForm.map(item => <FormItem
        key={item.id}
        title={item.title}
        body={item.body}
      />)}
      <div className={classes.form__btn}>
        <MyButton style={{padding: '13px 43px', fontSize: '20px'}}>Зарегистрироваться</MyButton>
      </div>
    </form>
  );
};

export default Form;