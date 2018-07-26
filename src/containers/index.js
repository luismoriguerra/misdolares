import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Purchases from './Purchases/Purchases';
import { History } from './Purchases/History/History';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export default class Root extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Switch>
            <Route path="/:id" component={History} />
            <Route path="/" component={Purchases} />
          </Switch>
        </Router>
      </Wrapper>
    )
  }
}
