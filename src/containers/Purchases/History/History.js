import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css';
import { Icon, InputNumber } from 'antd';

export class History extends Component {

    static defaultProps = {
        match: { params: null },
        current: 0
    }

  render() {
    return (
      <div className="wrapper">
        <h1>Historial de Gastos</h1>

        <div className="history-body">
            <div>
                <InputNumber
                        size="large"
                        defaultValue={0}
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />

                <Icon type="minus-circle-o" style={{ fontSize: 30, color: '#08c' }} />
            </div>
            <div>
                Totoal : $100
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(History)


const UpdateHistory = ({}) => {
  return (
      <div>
            
      </div>
  )
}
