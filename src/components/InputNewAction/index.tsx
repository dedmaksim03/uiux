import styles from './inputNewAction.module.css';
import { getCategories } from '../../services/GetDataService';
import { act, useEffect, useState } from 'react';
import { ActionResponse } from '../../models/response/ActionResponse';
import { addNewAction } from '../../services/SetDataService';

const InputNewAction = ({ _getActions }: { _getActions: () => void }) => {
  const [categories, setCategories] = useState();

  const [activeCategory, setActiveCategory] = useState();
  const [sum, setSum] = useState();
  const [date, setDate] = useState();
  const [comment, setComment] = useState();

  const _getCategories = async () => {
    const response = await getCategories();
    console.log('categories:', response.data.categories);
    setCategories(response.data.categories);
  };

  const sendNewAction = async () => {
    const action = {
      id: null,
      date: date,
      sum: sum,
      message: comment,
      categoryId: activeCategory,
      category: null,
      categoryColor: null,
      accountId: 1,
      account: null,
      userId: null,
    };
    const response = await addNewAction(action);
    _getActions();

    console.log(action);
  };

  useEffect(() => {
    _getCategories();
  }, []);

  if (categories != null) {
    const buttons = categories.map((ct) => {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ margin: 0 }}>{ct.name}</p>
          <button
            key={ct.id}
            onClick={() => {
              console.log(ct.id);
              setActiveCategory(ct.id);
              console.log('activeCategory ' + activeCategory + ' ' + ct.id);
            }}
            className={styles.button_category}
            style={activeCategory == ct.id ? { backgroundColor: ct.categoryColor } : {}}
          ></button>
        </div>
      );
    });

    return (
      <div className={styles.main_container}>
        <input className={styles.input} type="number" placeholder="Сумма" onChange={(e) => setSum(e.target.value)} />
        <input className={styles.input} type="date" placeholder="Дата" onChange={(e) => setDate(e.target.value)} />
        <input className={styles.input} placeholder="Комментарий" onChange={(e) => setComment(e.target.value)} />
        <div className={styles.categories_grid}>{buttons}</div>
        <button className={styles.button_save} onClick={sendNewAction}>
          Сохранить
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default InputNewAction;
