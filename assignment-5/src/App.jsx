import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error while reciving the user details", error))
  }, [])

  return (
    <div className="container">
      <h1>Here is the list of the users</h1>
      {users.map(user => (
        <div className="card" key={user.id}>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email Address: {user.email}</p>
          <p>Address:
            {[
              user.address.street,
              user.address.suite,
              user.address.city,
              user.address.zipcode
            ].join(",")}</p>
          <p>Phone Number: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company details:
            {[user.company.name,
            user.company.catchPhrase,
            user.company.bs
            ].join(",")}</p>

        </div>

      ))}
    </div>
  )

}

export default App
