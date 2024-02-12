import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/Index'

export default function Shop() {
  const dispatch=useDispatch()
  //turns objects whose values are action creators into object with same keys ,wrap then into dispatch,so that they can called directly
  let {depositMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch)//it replaces dispatch(actionCreators) -->directly to action object,so 'action.withdrawMoney(amount)' replaces previous one
  return (
    <div>
        <h2>Deposit / Withdraw money</h2>
      {/* <button className="btn btn-primary" onClick={()=>dispatch(actionCreators.depositMoney(300))}> */}
      <button className="btn btn-primary" onClick={()=>depositMoney(300)}>
        +
      </button>
      Update Balance
      <button className="btn btn-primary" onClick={()=>(withdrawMoney(300))}>
        -
      </button>
    </div>
  )
}
