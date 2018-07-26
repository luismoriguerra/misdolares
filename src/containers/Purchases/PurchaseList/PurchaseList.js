import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../../store/reducers/purchasesReducer';

import { Redirect } from "react-router-dom";

import moment from 'moment';
import './styles.css'

export class PurchaseList extends Component {

  state = {
    rowSelected: null
  }
 
  onClickRow = (rowSelected) => () => {
    this.setState({rowSelected});
  }

  render() {
    if (this.state.rowSelected) {
      return <Redirect to={{pathname: `/${this.state.rowSelected}`}} />
    }

    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Fecha</th>
            <th>Cantidad</th>
            <th>Cambio</th>
          </tr>
          </thead>
          <tbody>
          { this.props.list.map( item => <TableRow key={item.id} {...item} onClickRow={this.onClickRow(item.id)} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: getAll(state.purchases)|| []
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseList)



const TableRow = ({id , date, amount, change, onClickRow }) => {
  const formatDate = moment(new Date().getTime()).format('DD/MM/YY');
  return (
    <tr onClick={onClickRow}>
      <td>{formatDate}</td>
      <td>$ {amount}</td>
      <td>s./ {change}</td>
    </tr>
  )
}