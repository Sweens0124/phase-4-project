import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'

function UserPage () {
  const [ user, setUser ] = useState()
  const [ loading, setLoading ] = useState(true)
  const [ errors, setErrors ] = useState(false)

  const params = useParams()
  const { id } = params

  useEffect(() => {
    fetch(`/users/${id}`)
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setUser(user)
            setLoading(false)
          })
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })

  }, [])

  console.log(user);

  if (loading) return <h1>Loading</h1>
  if (errors) return <h1>{ errors }</h1>

  return (
    <>
      <Navbar />
      <div>
        <h1>{ user.username }</h1>
        <h3>Items:</h3>
        <ul>
          { user.items.map((item) => (
            <li>
              <h2>{ item.name }</h2>
              <p>Price: ${ item.price }</p>
            </li>
          )) }
        </ul>
      </div>
    </>
  )
}

export default UserPage;