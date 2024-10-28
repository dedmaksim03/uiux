import style from './home.module.css';
import Slider from '../../components/Slider';
import MainDiagram from '../../components/MainDiagram';
import Category from '../../components/Category';

function Home() {
  return (
    <div className={style.container}>
      <div className={style.column_left}>
        <div className={style.con_slider}>
          <Slider />
        </div>
        <div className={style.con_diagram}>
          <MainDiagram />
        </div>
      </div>
      <div className={style.column_right}>
        <div className={style.categories_container}>
          <Category />
          <Category />
        </div>
      </div>
    </div>
  );
}

export default Home;
