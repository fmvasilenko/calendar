import { Action } from 'redux';
import Event from '../../shared/types/Event.types';

type ActionType = 'EVENT/SET';

interface EventAction extends Action {
  type: ActionType
  payload: Event
}

export default EventAction;
