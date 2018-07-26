import React, { Component } from 'react';
import PurchaseForm  from './PurchaseForm';
import PurchaseList from './PurchaseList/PurchaseList';

export default class Purchases extends Component {

  render() {
    return (
      <div>
        <PurchaseForm />
        <PurchaseList />
      </div>
    )
  }
}
