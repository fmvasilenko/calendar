import { FormStatus, FormStatusAction } from './formStatus.types';

const Reducer = (state: FormStatus = 'INITIAL', action: FormStatusAction): FormStatus => {
  switch (action.type) {
    case 'FORM/LOADING': return 'LOADING';
    case 'FORM/LOADED': return 'LOADED';
    case 'FORM/SAVING': return 'SAVING';
    case 'FORM/SAVED': return 'SAVED';
    case 'FORM/ERROR': return 'ERROR';
    default: return state;
  }
};

export default Reducer;
