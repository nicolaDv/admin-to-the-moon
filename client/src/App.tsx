import React from 'react';
import './App.css';
import Dashboard, { INavStaus } from './layout/Dashboard';

import Placeholder from './comp/Placeholder'


const App: React.FC = () => {
  const [toDoItems, updateToDoItems] = React.useState<any | null>([]);

  React.useEffect(() => {

    const getToDoItems = async () => {
      const response = await fetch(`https://api.randomuser.me/`);
      const items = await response.json();
      updateToDoItems(items);
    };
    getToDoItems();
  }, []);

  return (
    <Dashboard >
      {<T extends INavStaus>(props: T) => Placeholder(props)}
    </Dashboard>
  )
}

export default App;
