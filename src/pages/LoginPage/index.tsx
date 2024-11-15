import { useContext, useState } from 'react';
import { Context } from '../../main';
import { observer } from 'mobx-react-lite';

const LoginPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);

  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="Username" />

      <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" placeholder="Password" />

      <button onClick={() => store.login(username, password)}>Вход</button>
    </div>
  );
};

export default observer(LoginPage);
