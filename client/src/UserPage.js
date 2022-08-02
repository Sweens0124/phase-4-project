import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'

function UserPage ({ items }) {
  const [ user, setUser ] = useState()
  const [ loading, setLoading ] = useState(true)
  const [ errors, setErrors ] = useState(false)
  const [ itemClicked, setItemClicked ] = useState(0)

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

  const handleClick = (e) => {
    let id = parseInt(e.target.value)
    setItemClicked(id)
  }

  if (loading) return <h1>Loading</h1>
  if (errors) return <h1>{ errors }</h1>


  if (itemClicked === 0) {
    return (
      <>
        <div>
          <Navbar />
          <h1>{ user.username }</h1>
          <h3>Items:</h3>
          { user.items.map((item) => (
            <div className='item_card' key={ item.id }>
              <h2>{ item.name }</h2>
              <p>Price: ${ item.price }</p>
              <img className='item_img' src={ item.image } />
              <button onClick={ handleClick } value={ item.id }>View Item Details</button>
            </div>
          )) }
        </div>
      </>
    )
  } else {
    return (
      <>
        { items.filter(item => item.id === itemClicked).map(filteredItem => (
          <div key={ filteredItem.id } className="single_item">
            <h2>{ filteredItem.name }</h2>
            <h3>${ filteredItem.price }</h3>
            <h4>{ filteredItem.condition }</h4>
            <h4>{ filteredItem.category }</h4>
            <p>{ filteredItem.description }</p>
            <img className='item_img' src={ filteredItem.image } />
          </div>
        )) }
      </>
    )
  }

}

export default UserPage;