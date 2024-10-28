import style from './category.module.css';

const index = () => {
  return (
    <div className={style.category_container}>
      <p className={style.name_category}> Продукты </p>
      <div className={style.category}></div>
      <p className={style.sum_category}> 1024 ₽</p>
    </div>
  );
};

export default index;
