import styles from './main.module.css'

import Header from '../Header/Header';
import InputText from '../Input/input';
import Area from '../Area/Area';


function App() {
  return (
    <div className={styles.content}>
      <Header />
      <Area />
      <InputText />
    </div>
  );
}

export default App;
