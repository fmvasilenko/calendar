import { Form, FormAction } from './form.types';

const initialState: Form = {
  status: 'INITIAL',
  initialized: false,
  table: [[]]
}

const Reducer = (state: Form = initialState, action: FormAction): Form => {
  const { type, payload } = action;

  switch (type) {
    case 'FORM/DOWNLOAD':
    case 'FORM/SYNCHRONIZED':
    case 'FORM/SAVE':
    case 'FORM/CHANGED': return {
      ...state,
      ...payload,
    };
    default: return state;
  };
};

export default Reducer;
