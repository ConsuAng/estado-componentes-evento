import './App.css';
import Input from './components/input-component/Input';
import Button from './components/button/Button';
import { useState } from 'react';
import Container from './components/container/Container';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <Container>
        <div className='section'>
          <div className='title'>
            <h1>Estado de los componentes y eventos </h1>
          </div>
          <Input setName={setName} setPassword={setPassword} name={name} />
          {name != '' &&
            <div className='hiddenButton'>
              {password === '252525' ? <Button /> : null}
            </div>
          }
        </div>
      </Container>
    </div>
  )
}

export default App
