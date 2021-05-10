import React from 'react'
import maleLogo from '../images/male.png'
import femaleLogo from '../images/female.png'

const UserCard = (props) => {
  return (
    <div className="user-card">
      <div className="card-media">
        <img src={props.gender === 'female' ? femaleLogo : maleLogo} alt="" />
        <span className="card-company">{props.company}</span>
      </div>
      <div className="card-content">
        <h3>{props.name}</h3>
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  )
}

export default UserCard
