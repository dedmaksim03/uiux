import styles from './actionsListPage.module.css';
import { ActionsList } from '../../components/ActionsList';
import { Action } from '../../components/Action';
import Slider from '../../components/Slider';
import { ReactElement, useEffect, useState } from 'react';
import { getActions } from '../../services/GetDataService';
import { ActionResponse } from '../../models/response/ActionResponse';

const ActionsListPage = () => {
  const actionsMap = new Map<Date, { element: ReactElement[]; sum: number }>();
  const actionsList = [];

  const [actionsData, setActionsData] = useState<ActionResponse[]>();

  const _getActions = async () => {
    const response = await getActions();
    console.log('actions:', response);
    setActionsData(response.data.data);
  };

  const create_actions = () => {
    actionsData?.forEach((action) => {
      if (actionsMap.has(action.date)) {
        actionsMap
          .get(action.date)
          ?.element?.push(
            <Action
              action_color={action.categoryColor}
              action_title={action.category}
              action_text={action.message}
              action_sum={action.sum}
            />,
          );
        let sum = actionsMap.get(action.date)?.sum ?? 0;
        sum += action.sum;
        actionsMap.set(action.date, { element: actionsMap.get(action.date)?.element ?? [<></>], sum: sum });
      } else {
        actionsMap.set(action.date, {
          element: [
            <Action
              action_color={action.categoryColor}
              action_title={action.category}
              action_text={action.message}
              action_sum={action.sum}
            />,
          ],
          sum: action.sum,
        });
      }
    });
  };

  const create_actions_list = () => {
    console.log('actionsMap:', actionsMap);
    for (const [key, value] of actionsMap) {
      console.log('key', key.toString());
      actionsList.push(
        <ActionsList actions={value?.element} date={new Date(key.toString())} action_header_sum={value.sum} />,
      );
    }
    console.log('actionsList:', actionsList);
  };

  useEffect(() => {
    _getActions();
  }, []);

  if (!actionsData) {
    return null;
  } else {
    create_actions();
    create_actions_list();

    return (
      <div className={styles.main_container}>
        <div className={styles.left_container}>
          <div className={styles.con_slider}>
            <Slider />
          </div>
        </div>
        <div className={styles.right_container}>
          <div className={styles.actions_list_container}>{actionsList}</div>
        </div>
      </div>
    );
  }
};

export default ActionsListPage;
