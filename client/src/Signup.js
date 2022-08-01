import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp () {
  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: ''
  })


  const [ errors, setErrors ] = useState([])
  const navigate = useNavigate()
  const { username, email, password } = formData

  function handleSubmit (e) {
    e.preventDefault()
    const user = {
      username,
      email,
      password
    }

    fetch(`/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            navigate(`/users/${user.id}`)
          })
        } else {
          res.json().then(json => setErrors(Object.entries(json.errors)))
        }
      })

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [ name ]: value })
  }

  return (
    <div>
      <h1 className="title">
        CSS - Come Sell Stuff!
      </h1>
      <div className="login">
        <div id="website_info">
          <div>
            Welcome to CSS, where you can buy or sell items at your local garage sale!
          </div>
        </div>

        <form id="login_form">
          <label>
            Username:
          </label><br />
          <input type="text" name="username" onChange={ handleChange } value={ username } /><br />

          <label>
            Email
          </label>
          <input type='text' name='email' value={ email } onChange={ handleChange } />

          <label>Password:</label>
          <input type="password" name="password" onChange={ handleChange } value={ password } />

          <input type='submit' value='Sign up!' onSubmit={ handleSubmit } />
        </form>
      </div>
    </div>
  )
}

export default SignUp;