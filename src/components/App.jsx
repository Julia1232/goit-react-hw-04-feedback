import Feedback from './Feedback/Feedback';
import style from '../components/App.module.css';

export const App = () => {
  return (
    <div className={style.app}>
      <Feedback />
    </div>
  );
};
