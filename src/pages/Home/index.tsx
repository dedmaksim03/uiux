import style from './home.module.css';
import Slider from '../../components/Slider';
import MainDiagram from '../../components/MainDiagram';

import { useContext, useEffect, useState } from 'react';
import { getCategories} from '../../services/GetDataService';
import { Context } from '../../main';
import { CategoryResponse } from '../../models/response/CategoryResponse';
import Category from '../../components/Category';

function Home() {

  const categories_list = [];
  const data_relation = [];
  const data_color = [];
  const data_names = [];

  const [categories, setCategories] = useState<Array<CategoryResponse>>()

  const _getCategories = async () => {
    try {
      const response = await getCategories();
      console.log(response)
      setCategories(response.data.categories);
      create_categories()
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  const create_categories = () => {
    if (categories){
        for (let i = 0; i < categories.length; i++) {
        console.log(categories[i]);
        categories_list.push(
          <Category
            category_name={categories[i].name}
            category_cost={categories[i].sumCategory}
            category_color={categories[i].categoryColor}
          />,
        );
        data_relation.push(categories[i].sumCategory);
        data_color.push(categories[i].categoryColor);
        data_names.push(categories[i].name);
        console.log('data_relation', data_relation )
      }
    }
    else{
      console.log('categories is empty', categories)
    }
  }

  useEffect(() => {
    _getCategories()
    return
  }, []);

  if (!categories){
    console.log('if', categories);
    return null;
  }
  else{
    create_categories()
    console.log(data_relation, 'data_relation')
    return (
      <div className={style.container}>
        <div className={style.column_left}>
          <div className={style.con_slider}>
            <Slider />
          </div>
          <div className={style.con_diagram}>
            <MainDiagram data_relation={data_relation} data_color={data_color} data_names={data_names} />
          </div>
        </div>
        <div className={style.column_right}>
          <div className={style.categories_container}>{categories_list}</div>
        </div>
      </div>
    );
  }
}

export default Home;
