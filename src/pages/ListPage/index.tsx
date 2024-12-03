import styles from './actionsListPage.module.css';
import { ActionsList } from '../../components/ActionsList';

const ActionsListPage = () => {
  return (
    <div className={styles.main_container}>
        <div className={styles.left_container}>

        </div>
        <div className={styles.right_container}>
            <div className={styles.actions_list_container}>
                <ActionsList 
                                action_color='rgba(247, 78, 66, 1)' 
                                action_title='Продукты' 
                                action_text='Некоторый расход'
                                action_sum={1054}
                                action_header_sum={1054}/>     
            </div>
        </div>
    </div>
  )
}

export default ActionsListPage