import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './layout/Dashboard';

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
    <BrowserRouter>
      <Switch>
          <Route path='/home'>
            <Dashboard something = "blabval">{(innerProps) => Placeholder(innerProps)}</Dashboard>
          </Route>
      </Switch>
    </BrowserRouter>
    
  )
}

export default App;
