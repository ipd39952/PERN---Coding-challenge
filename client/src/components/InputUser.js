import React, { Fragment, useState, useEffect } from 'react'
import UserCard from './UserCard'

const InputUser = () => {
  const [input, setInput] = useState('')
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/users')
      const jsonData = await response.json()
      setUsers(jsonData)
    } catch (err) {
      console.log(err)
    }
  }

  const filterUsers = () =>
    users.filter(
      (user) =>
        user.name.toLowerCase().includes(input.toLocaleLowerCase()) ||
        user.company.toLowerCase().includes(input.toLocaleLowerCase())
    )

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Fragment>
      <h1 className="text-center my-5">
        Search for <span className="blue-span">Users</span>
      </h1>
      <div className="custom-input">
        <input
          type="text"
          value={input}
          placeholder="Please enter name/company"
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
      </div>

      <div className="cards-container">
        {filterUsers().map((user) => (
          <UserCard {...user} key={user._id} />
        ))}
      </div>
    </Fragment>
  )
}

export default InputUser
