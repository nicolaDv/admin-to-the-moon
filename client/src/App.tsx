import React from 'react';
import './App.css';
import Dashboard from './layout/Dashboard';


const App :React.FC  = () => {
  const [toDoItems, updateToDoItems] = React.useState<any| null >([]);

  React.useEffect(() => {

    const getToDoItems = async () => {
      const response = await fetch(`https://api.randomuser.me/`);
      const items = await response.json();
      console.log(items)
      updateToDoItems(items);
    };
    getToDoItems();
  }, []);

  return <Dashboard/>
  
}

export default App;
