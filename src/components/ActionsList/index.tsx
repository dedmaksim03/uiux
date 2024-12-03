import styles from './actionsList.module.css'
import { Action } from '../Action'

interface actionsListProps{
  action_color: string, 
  action_title: string,
  action_text: string,
  action_sum: number,
  action_header_sum: number

}

export const ActionsList = ({action_color, action_title, action_text, action_sum, action_header_sum}: actionsListProps) => {
  const action_header_sum_str = action_header_sum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')

  return (
    <div className={styles.actions_list_container}>
        <div className={styles.action_header}>
          <div className={styles.header_left_container}>
            <p className={styles.date_action}>
              1
            </p>
            <div className={styles.date_action_container}>
              <p className={styles.day_of_week}>Пятница</p>
              <p className={styles.month}>Сентября 2024</p>
            </div>
          </div>
          <p className={styles.header_sum}>
            {action_header_sum_str} ₽
          </p>
          
        </div>
        <div className={styles.action_list}>
            <Action 
              action_color={action_color} 
              action_title={action_title} 
              action_text={action_text}
              action_sum={action_sum}/>
            <Action 
              action_color={action_color} 
              action_title={action_title} 
              action_text={action_text}
              action_sum={action_sum}/>
        </div>
    </div>
  )
}
