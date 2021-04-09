import styles from './input.module.css'

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addMessage } from '../../redux/reducers/actionCreators/messageCreator';

function InputText() {
  const [inputMessage, setInputMessage] = useState('')
  const dispatch = useDispatch()
  
  const textInput = ({target}) => {
    setInputMessage(target.value)
  }
  const sendMessage = (inputMessage) => {
    dispatch(addMessage(inputMessage))
  }

  return (
    <div className={styles.form}>
      <input onChange={textInput}></input>
      <button onClick={ () => {sendMessage(inputMessage)} }>Send</button>
    </div>
  );
}

export default InputText;
