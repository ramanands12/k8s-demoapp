import React from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <h1>Kubernetes Demo Full-Stack App 🚀</h1>
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
