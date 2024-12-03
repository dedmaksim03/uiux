import styles from './action.module.css'

interface actionProps{
    action_color: string, 
    action_title: string,
    action_text: string
    action_sum: number
}

export const Action = ({action_color, action_title, action_text, action_sum}: actionProps) => {
    const action_sum_str = action_sum.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
  return (
    <div className={styles.action_container}>
        <div className={styles.action_left_container}>
            <div style={{height:'100%', width:'100%', borderRadius: '100%', backgroundColor: action_color}}>
            </div>
        </div>
        <div className={styles.action_center_container}>
            <p className={styles.action_title}>{action_title}</p>
            <p className={styles.action_text}>{action_text}</p>
        </div>
        <div className={styles.action_right_container}>
            <p className={styles.action_right_text}>
                {action_sum_str} ₽
            </p>
        </div>
    </div>
  )
}
