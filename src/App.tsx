import { useState } from 'react';
import './App.css';
import { Steps } from './components/Steps';
import { FormStateProvider } from './lib/formContext';
import { FORM_STATE } from './lib/utils';

function App() {
  const [form, setForm] = useState(FORM_STATE);
  return (
    <FormStateProvider
      value={{
        form,
        setForm,
      }}
    >
      <div className="flex flex-row justify-center content-center items-center h-screen m-8">
        <Steps />
      </div>
    </FormStateProvider>
  );
}

export default App;
