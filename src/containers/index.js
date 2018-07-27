import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from 'react-router-dom'
import Purchases from './Purchases/Purchases';
import { History } from './Purchases/History/History';
import styled from 'styled-components';
import PurchaseForm from './PurchaseForm/PurchaseForm';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Content = styled.div`
    flex: 1;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    `;
const Button = styled.div`
    border: 1px solid #ccc;
    width: 100%;
    flex: 1;
    padding: 20px;
    text-align: center;
`;

const Root = (props) => {

    return (
        <Wrapper className="root-wrapper">
            <Router>
                <React.Fragment>
                    <Content className="content">
                        <Switch className="switch">
                        <Route exact path="/" component={Purchases} />
                        <Route exact path="/form" component={PurchaseForm} />
                            <Route path="/history/:id" component={History} />
                        </Switch>
                    </Content>
                    <Footer className="footer">
                        <Button><Link to="/">Compras</Link></Button>
                        <Button><Link to="/form">Agregar</Link></Button>
                        <Button><Link to="/chart">Grafico</Link></Button>
                    </Footer>
                </React.Fragment>
            </Router>
        </Wrapper>
    )
};

export default Root;