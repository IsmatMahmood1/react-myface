import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PostsList } from './components/PostsList';
import { UsersList } from './components/UsersList';
import { User } from './components/User'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/posts">
            <PostsList />
          </Route>
          <Route path="/users">
            <UsersList />
          </Route>
          <Route path="/users/:id">
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
