import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

//Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import Error from './components/404';

//

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/">Home</NavLink><br/>
          <NavLink to="/posts">Posts</NavLink><br/>
          <NavLink to={{
            pathname: '/profile'
          }}>Profile</NavLink>
        </header>
        <hr/>
        <Switch>
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />
          <Route path="/" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)