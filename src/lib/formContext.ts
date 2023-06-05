import { createContext } from 'react';
import { FORM_STATE } from './utils';

export const FormStateContext = createContext({
  form: FORM_STATE,
  setForm: (
    form: typeof FORM_STATE | ((form: typeof FORM_STATE) => typeof FORM_STATE),
  ) => {},
});
export const FormStateProvider = FormStateContext.Provider;
export default FormStateContext;
