import React, { useState } from 'react';
import { addUser, fetchUsers } from '../api';

function AddUser() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  const handleAdd = async () => {
    if (!name) return;
    await addUser(name);
    const updatedUsers = await fetchUsers();
    setUsers(updatedUsers);
    setName('');
  };

  return (
    <div>
      <h2>Add User</h2>
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Enter name" 
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddUser;
