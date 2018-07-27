import React, { Component } from 'react';
import { Row, Col, Button, InputNumber } from 'antd';

import './PurchaseForm.css'
import { connect } from 'react-redux';
import { PurchasesActions } from '../../store/actions/PurchaseActions';

class PurchaseForm extends Component {
    defaultValues = {
        amount: 100,
        change: 3.27,
    }

    state = {
        ...this.defaultValues
    }

    onAmountChange = (amount) => {
        this.setState({ amount })
    }

    onChangeChange = (change) => {
        this.setState({ change })      
    }


    addBuy = () => {
      this.props.actions.add({
          ...this.state,
          id: Math.ceil(Math.random()*100000),
          date: new Date().getTime()
      });
      this.setState({ ...this.defaultValues });
    }

  render() {
    return (
        <React.Fragment>
            <Row><Col span={24}> <h1>Comprado</h1></Col></Row>
            <Row type="flex" justify="space-around">
            <Col span={9}>
                <InputNumber
                    size="large"
                    value={this.state.amount}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    step={10}
                    onChange={this.onAmountChange}
                />
            </Col>
            <Col span={9}>
                <InputNumber
                    size="large"
                    value={this.state.change}
                    formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    step={0.01}
                    onChange={this.onChangeChange}
                />
            </Col>
            <Col span={6}><Button type="primary" onClick={this.addBuy}>Add</Button> </Col>
            </Row>
        </React.Fragment>
    )
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: {
            add (payload) { dispatch(PurchasesActions.add({...payload})) }
        }
    }
}

export default connect(null, mapDispatchToProps)(PurchaseForm)