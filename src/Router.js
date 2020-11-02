import React, { lazy, Suspense, useEffect, memo } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { Loader } from 'components/atoms';
import PropTypes from 'prop-types';

const Home = lazy(() => import('pages/Home'));
const CheckIn = lazy(() => import('pages/CheckIn'));

const Scroll = ({ children, location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return children;
};

Scroll.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  location: PropTypes.objectOf(PropTypes.any),
};

const ScrollToTop = withRouter(memo(Scroll));

const RouterComponent = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/check-in" component={CheckIn} />
          </Switch>
        </ScrollToTop>
      </Router>
    </Suspense>
  );
};

export default RouterComponent;
