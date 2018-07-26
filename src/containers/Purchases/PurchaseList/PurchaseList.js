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
    render: (text , { amount }) => `$ ` + amount
  }, {
    title: 'change',
    dataIndex: 'change',
    key: 'change',
  }, {
    title: 'date',
    dataIndex: 'date',
    key: 'date',
    render: (text , { date }) => moment(date).format('DD/MM/YY')
  }, {
    title: 'Action',
    key: 'action',
    render: (text, {id}) => (
      <RowActions  id={id} viewRow={this.viewRow}  deleteRow={this.deleteRow} />
    ),
  }];

  viewRow = (rowSelected) => {
    this.setState({rowSelected});
  }

  deleteRow = (rowSelected) => {
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


const RowActions = ({ id, viewRow , deleteRow }) => {

  const onView = () => {
    viewRow(id)
  }

  const onDeleteRow = () => {
    deleteRow(id)
  }
  
  return (
    <React.Fragment>
      <Icon type="eye-o" onClick={onView} />
      <Divider type="vertical" />
      <Icon type="delete" onClick={onDeleteRow} />
    </React.Fragment>
  )
}