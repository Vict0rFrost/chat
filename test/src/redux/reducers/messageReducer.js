import { MESS, NEW_MESS, DEL_MESS } from '../types/types';

export default function getAllMessages(state = {}, action) {
  switch (action.type) {
    // наполняю стейт сообщениями из базы
    case MESS:
      return {...state, 
        dialog: action.payload
      }
    case NEW_MESS:
      // добавляю к стейту новый элемент
      return {...state, 
        dialog: [...state.dialog, action.payload]
      }
    case DEL_MESS:
      // Нахожу индекс нужного элемента
      const messId = state.dialog.findIndex((el) => (
        el.id === action.payload 
      ))
      // вырезаю из стейта найденный элемент
      state.dialog.splice(messId, 1)

      return {...state,
        dialog: [...state.dialog]
      }
    default:
      return state;
  }
}
