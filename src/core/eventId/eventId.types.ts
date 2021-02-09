import { Action } from 'redux';

type ActionType = 'EVENT_ID/SET';

interface EventIdAction extends Action {
  type: ActionType
  payload: string | null
}

export default EventIdAction;
