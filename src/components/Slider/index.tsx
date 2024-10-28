import styles from './slider.module.css';
import SliderArrowRight from './SliderArrowRight';
import SliderArrowLeft from './SliderArrowLeft';

const Slider = () => {
  return (
    <div className={styles.container}>
      <div>
        <SliderArrowLeft />
      </div>
      <div className={styles.container_center}>
        <p className={styles.text}> Сентябрь 2024</p>
      </div>
      <div>
        <SliderArrowRight />
      </div>
    </div>
  );
};

export default Slider;
