import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemCollection from './ItemCollection'

function UserPage ({ setIsLoggedIn }) {
  const params = useParams()
  const { id } = params

  console.log('userpageid:', id)

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("loggedIn"))
  }, [])

    return (
      <ItemCollection setIsLoggedIn={setIsLoggedIn} page={'user'} loggedInUserId={id} />
    )
}

export default UserPage;