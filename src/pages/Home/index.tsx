import style from './home.module.css';
import Slider from '../../components/Slider';
import MainDiagram from '../../components/MainDiagram';
import Category from '../../components/Category';
import data from './CategoryData.json';

function Home() {
  const categories = []
  const data_relation= []
  const data_color = []
  const data_names = []
  for (let i=0; i < data.length; i++){
    console.log(data[i])
    categories.push(<Category category_name={data[i].name} category_cost={data[i].sumCategory} category_color={data[i].categoryColor}/>)
    data_relation.push(data[i].sumCategory)
    data_color.push(data[i].categoryColor)
    data_names.push(data[i].name)
  }
  return (
    <div className={style.container}>
      <div className={style.column_left}>
        <div className={style.con_slider}>
          <Slider />
        </div>
        <div className={style.con_diagram}>
          <MainDiagram data_relation={data_relation} 
                        data_color={data_color}
                        data_names={data_names}/>
        </div>
      </div>
      <div className={style.column_right}>
        <div className={style.categories_container}>
          {categories}
        </div>
      </div>
    </div>
  );
}

export default Home;
