import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const ChangeUser = () => {
  const [newUser, setNewUser] = useState('');
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <form>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setUser(newUser || user);
            setNewUser('');
          }}
        >
          Change
        </button>
      </form>
    </>
  );
};

export default ChangeUser;
