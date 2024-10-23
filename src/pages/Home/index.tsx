import style from './home.module.css';

function Home() {
  return (
    <div className={style.container}>
      <div className={style.column_left}>
        <div className={style.diagram_container}>
          <div className={style.inner_diagram_container}>
            <p className={style.p_center}> Расходы </p>
            <p> 1024 ₽</p>
            <p> 720 ₽</p>
          </div>
        </div>
      </div>
      <div className={style.column_right}>
        <div className={style.categories_container}>
            <div className={style.category_container}> 
              <p className={style.name_category}> Продукты </p> 
              <div className={style.category}></div>
              <p className={style.sum_category}> 1024 ₽</p>
            </div>
            <div className={style.category_container}> 
              <p className={style.name_category}> Продукты </p> 
              <div className={style.category}></div>
              <p className={style.sum_category}> 1024 ₽</p>
            </div>
            <div className={style.category_container}> 
              <p className={style.name_category}> Продукты </p> 
              <div className={style.category}></div>
              <p className={style.sum_category}> 1024 ₽</p>
            </div>
            <div className={style.category_container}> 
              <p className={style.name_category}> Продукты </p> 
              <div className={style.category}></div>
              <p className={style.sum_category}> 1024 ₽</p>
            </div>
            <div className={style.category_container}> 
              <p className={style.name_category}> Продукты </p> 
              <div className={style.category}></div>
              <p className={style.sum_category}> 1024 ₽</p>
            </div>
            <div className={style.category_container}> 
              <p className={style.name_category}> Продукты </p> 
              <div className={style.category}></div>
              <p className={style.sum_category}> 1024 ₽</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
