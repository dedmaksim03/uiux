import styles from './actionsList.module.css';
import { ReactElement } from 'react';

interface actionsListProps {
  actions: ReactElement[];
  date: Date;
  action_header_sum: number;
}

export const ActionsList = ({ actions, date, action_header_sum }: actionsListProps) => {
  console.log('date:', date);

  const months = new Map<number, string>([
    [1, 'Январь'],
    [2, 'Февраль'],
    [3, 'Март'],
    [4, 'Апрель'],
    [5, 'Май'],
    [6, 'Июнь'],
    [7, 'Июль'],
    [8, 'Август'],
    [9, 'Сентябрь'],
    [10, 'Октябрь'],
    [11, 'Ноябрь'],
    [12, 'Декабрь'],
  ]);

  const action_header_sum_str = action_header_sum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

  const day_of_week = () => {
    switch (date.getDay()) {
      case 0:
        return 'Воскресенье';
      case 1:
        return 'Понедельник';
      case 2:
        return 'Вторник';
      case 3:
        return 'Среда';
      case 4:
        return 'Четверг';
      case 5:
        return 'Пятница';
      case 6:
        return 'Суббота';
    }
  };

  return (
    <div className={styles.actions_list_container}>
      <div className={styles.action_header}>
        <div className={styles.header_left_container}>
          <p className={styles.date_action}>{date.getDate()}</p>
          <div className={styles.date_action_container}>
            <p className={styles.day_of_week}>{day_of_week()}</p>
            <p className={styles.month}>
              {months.get(date.getMonth() + 1)} {date.getFullYear()}
            </p>
          </div>
        </div>
        <p className={styles.header_sum}>{action_header_sum_str} ₽</p>
      </div>
      <div className={styles.action_list}>{actions}</div>
      <div className={styles.action_list_footer}></div>
    </div>
  );
};
