import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../../../store/reducers/purchasesReducer';

import { Redirect } from "react-router-dom";
import { Table, Icon, Divider } from 'antd';

import moment from 'moment';
import './styles.css'
import { PurchasesActions } from '../../../store/actions/PurchaseActions';


export class PurchaseList extends Component {

  state = {
    rowSelected: null
  }

  columns = [{
    title: 'amount',
    dataIndex: 'amount',
    key: 'amount',
  }, {
    title: 'change',
    dataIndex: 'change',
    key: 'change',
  }, {
    title: 'date',
    dataIndex: 'date',
    key: 'date',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, item) => (
      <RowActions 
        onClickRow={this.onClickRow(item.id)} 
        onDeleteRow={this.onDeleteRow(item.id)} 
      />
    ),
  }];


 
  onClickRow = (rowSelected) => () => {
    this.setState({rowSelected});
  }

  onDeleteRow = (rowSelected) => () => {
    this.props.actions.remove(rowSelected);
  }

  render() {
    if (this.state.rowSelected) {
      return <Redirect to={{pathname: `/${this.state.rowSelected}`}} />
    }

    return (
      <div>
        <Table columns={this.columns} dataSource={this.props.list} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: getAll(state.purchases)|| []
})

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      remove(id) {  dispatch(PurchasesActions.remove(id)) }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseList)


const RowActions = ({ onCLickRow , onDeleteRow }) => {
  return (
    <React.Fragment>
      <Icon type="eye-o" onClick={onCLickRow} />
      <Divider type="vertical" />
      <Icon type="delete" onClick={onDeleteRow} />
    </React.Fragment>
  )
}


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