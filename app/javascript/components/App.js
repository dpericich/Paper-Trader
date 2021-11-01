import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyles from '../globalStyles';
import HomePage from '../pages/HomePage';
import ArticleIndexPage from '../pages/ArticleIndexPage'
import AboutUsPage from '../pages/AboutUsPage';
import ArticlePage from '../pages/ArticlePage';

// https://www.youtube.com/watch?v=F0xErjOtJAQ -> React on Rails Tutorial - Episode 1

const App = () => {
  return(
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/articles/:id" component={ArticlePage} />
        <Route path="/articles" component={ArticleIndexPage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  )
}

export default App;
