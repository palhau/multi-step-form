import { useState } from 'react';
import './App.css';
import { Steps } from './components/Steps';
import { FormStateProvider } from './lib/formContext';
import { FORM_STATE } from './lib/utils';
import { Toaster } from './components/ui/toaster';

function App() {
  const [form, setForm] = useState(FORM_STATE);
  return (
    <FormStateProvider
      value={{
        form,
        setForm,
      }}
    >
      <div className="flex flex-row justify-center content-center items-center h-screen m-8 font-mono">
        <Steps />
      </div>
      <Toaster />
    </FormStateProvider>
  );
}

export default App;
