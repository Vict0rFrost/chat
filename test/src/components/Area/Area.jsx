import styles from './area.module.css'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import  { getAllMessages, deleteMessage } from '../../redux/reducers/actionCreators/messageCreator';

function Area() {
  const dispatch = useDispatch();  
  const users = useSelector((store) => store.dialog.dialog)

  useEffect(() => {
    dispatch(getAllMessages())
  }, [dispatch])
  
  const dellMessage = (id) => {
    dispatch(deleteMessage(id))
  }

  function getTime(string) {
    const reg = new RegExp(/\d{2}:\d{2}/gm);
    return string.match(reg);
  }


  return (
    <div className={styles.chat}>
    
      <ul>
        {users?.map( (el) => (
          el.is === "my" ? 
          
            
          <div className={styles.my} key={el.id}>
            <div className={styles.info}>
              <p className={styles.del} onClick={() => {dellMessage(el.id)}}>&#10060;</p>
              <p>{getTime(el.date)}</p>
            </div>
            {el.message}
            <img src={el.avatar} className={styles.avatar} alt="avatar"/>
          </div>
          :
          <div className={styles.her} key={el.id}>
            <img src={el.avatar} className={styles.avatar} alt="avatar"/>
            {el.message}
            <div className={styles.info}>
              <p>{getTime(el.date)}</p>
              <p className={styles.del} onClick={() => {dellMessage(el.id)}}>&#10060;</p>
            </div>
          </div>

        ))}
      </ul>

    </div>
  );
}

export default Area;
