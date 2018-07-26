import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from 'react-router-dom'
import Purchases from './Purchases/Purchases';
import { History } from './Purchases/History/History';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;


const Root = (props) => {

  return (
      <Wrapper>
        <Router>
        <React.Fragment>
            <Breadcrumb>
                <Breadcrumb.Item key="home">
                <Link to="/">Home</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
                <Route path="/:id" component={History} />
                <Route path="/" component={Purchases} />
            </Switch>
        </React.Fragment>

          
        </Router>
      </Wrapper>
  )
};

export default Root;