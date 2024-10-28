import style from './maindiagram.module.css';

const index = () => {
  return (
    <div className={style.diagram_container}>
      <div className={style.inner_diagram_container}>
        <p className={style.p_center}> Расходы </p>
        <p> 1024 ₽</p>
        <p> 720 ₽</p>
      </div>
    </div>
  );
};

export default index;
