import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PostsList } from './components/PostsList';
import { UsersList } from './components/UsersList';
import { User } from './components/User';
import { NavBar } from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <PostsList />
          </Route>
          <Route path="/posts">
            <PostsList />
          </Route>
          <Route exact path="/users">
            <UsersList />
          </Route>
          <Route path="/users/:id">
            <User />
          </Route>
          <Route path="*">
            <PostsList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
