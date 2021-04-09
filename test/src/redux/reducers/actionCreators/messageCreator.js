import { MESS, NEW_MESS, DEL_MESS } from '../../types/types'
import dialog from '../../../dialog'

// Тут я бы асинхронно делал запрос на бэк для получения информации из базы
// В эту функцию передал бы к примеру userId 
export function getAllMessages() {
  
  return (dispatch) => {
    // В случае с реальной базой здесь отправляется фетч гет запросом в базу чтобы получить нужные сообщения
    const result =  dialog
    
    dispatch({
      type: MESS,
      payload: result,
    });
  };
}

export function addMessage(inputMessage) {

  return (dispatch) => {

    // Полный объект сообщения для записи захардкодил, в реальном кейсе получал бы ее из базы
    const result = {
      avatar: "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
      message: inputMessage,
      id: 999,
      date: toString(Date.now()),
      is: "my"
    }
   
    dispatch({
      type: NEW_MESS,
      payload: result,
    })
  }
}

export function deleteMessage(id) {
  
  return (dispatch) => {

    const result = id

    dispatch({
      type: DEL_MESS,
      payload: result,
    })
  }
}
