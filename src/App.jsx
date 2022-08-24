import './App.css';
import Input from './components/input-component/Input';
import Button from './components/button/Button';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <Input setName={setName} setPassword={setPassword} name={name} />
      {name !='' &&
        <div className='hiddenButton'>
          {password === '252525' ? <Button /> : null}
        </div>
      }
    </div>
  )
}

export default App
