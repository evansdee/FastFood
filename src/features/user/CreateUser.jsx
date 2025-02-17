import { useState } from 'react';
import Button from '../../ui/Button';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

function CreateUser() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username))
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 ms:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 input mb-8'
      />

      {username !== '' && (
        <div> 
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
