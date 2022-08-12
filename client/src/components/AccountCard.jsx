import React from 'react'

const AccountCard = (props) => {
  return (
    <div>
        <h3>{props.account.website}</h3>
        <h3>{props.account.username}</h3>
        <h3>{props.account.password}</h3>
    </div>
  )
}

export default AccountCard