import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function LoginPage ({ setLoggedInUserId, setIsLoggedIn }) {
  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [ errors, setErrors ] = useState([])
  const navigate = useNavigate()

  const { username, password } = formData

  function handleSubmit (e) {
    e.preventDefault()
    const user = {
      username,
      password
    }
    // Logs in user
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setIsLoggedIn(true)
            sessionStorage.setItem("loggedIn", true)
            sessionStorage.setItem("loggedInUserId", user.id)
            setLoggedInUserId(user.id)
            navigate(`/users/${user.id}`)
          })
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })

  }

  const navigateToSignUp = () => {
    navigate('signup')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [ name ]: value })
  }

  return (
    <>
      <div id='login'>
        <form widths='equal' onSubmit={ handleSubmit }>
          <h3 id='logincolor'> // CSS: Come $ell $tuff </h3>
          <div className='logininput'>
            <input
              className='input'
              type='text'
              name='username'
              placeholder='Username'
              value={ formData.username }
              onChange={ handleChange }
            />
          </div>
          <div className='logininput'>
            <input
              className='input'
              type='password'
              name='password'
              placeholder='Password'
              value={ formData.password }
              onChange={ handleChange }
            />
          </div>
          <div>
            <Button id='submit_login' variant="dark" className="ui button" type='submit'>Login</Button>
          </div>
          <div>
            <Button id='submit_signup' variant="dark" onClick={ navigateToSignUp } className="ui button" type='submit'>Signup Here!</Button>
          </div>
        </form>
      </div>
    </>
  )
}
export default LoginPage;