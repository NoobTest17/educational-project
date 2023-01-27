import React, {useState} from 'react';
import classes from './PointForm.module.css';
import MyInput from "../../../UI/input/MyInput";

const PointForm = ({title, change, name }) => {
  const [input, setInput] = useState('');

  return (
    <div className={classes.wrap}>
      <div className={classes.title}>
        {title}
      </div>
      <div className={classes.Input}>
        <MyInput
          type="text"
          value={input}
          onChange={event => {
            setInput(event.target.value)
            change({name: name, value: event.target.value})
            setInput(event.target.value)
          }}
        />
      </div>
    </div>
  );
};

export default PointForm;