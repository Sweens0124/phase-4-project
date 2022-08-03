import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage ({ setIsLoggedIn }) {
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
              fluid lable='username'
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
            <button id='submit_login' className="ui button" type='submit'>Login</button>
          </div>
          <div>
            <button id='submit_signup' onClick={ navigateToSignUp } className="ui button" type='submit'>Signup Here!</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default LoginPage;