import style from './category.module.css';

interface category {
  category_name: string,
  category_cost: number,
  category_color: string
}

const index = ({category_name, category_cost, category_color} : category) => {
  return (
    <div className={style.category_container}>
      <p className={style.name_category}> {category_name} </p>
      <div className={style.category}>
        <div style={{height: '100%', width: '100%', borderRadius: '100%', backgroundColor: category_color}}>
        </div>
      </div>
      <p className={category_cost != 0 ? style.sum_category : style.sum_category_zero}> {category_cost} ₽</p>
    </div>
  );
};

export default index;
