import React, { useRef } from 'react';
import './style.css';

interface Props {

    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void

};
const inputFeild = ({todo , setTodo , handleAdd} : Props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputRef = useRef<HTMLInputElement>(null);
  return   <form className='input' onSubmit={(e) => {
      handleAdd(e)
      
      }}>

  <input type='input' 
  ref= {inputRef}
  value={todo}
  onChange={
      (e) => setTodo(e.target.value)
  }
  placeholder='Enter a task' className='input__box'/>
  <button className='input_submit' type='submit'>Go</button>

</form>;
};

export default inputFeild;

