import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function LoginPage () {
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
    fetch(`/login`, {
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
    <div>
      <Navbar />
      <h1 className="title">
        CSS - Come Sell Stuff!
      </h1>
      <div className="login">
        <div id="website_info">
          <div>
            Welcome to CSS, where you can buy or sell items at your local garage sale!
          </div>
        </div>
        <form id="login_form" onSubmit={ handleSubmit }>
          <label>Username:</label><br />
          <input type="text" name="username" value={ username } onChange={ handleChange } /><br />
          <label>Password:</label>
          <input type="password" name="password" value={ password } onChange={ handleChange } />
          <button id="submit_login" type="submit">Login</button><br />
          <button id="submit_login" onClick={ navigateToSignUp } type='submit'>Signup Here!</button>
        </form>
      </div>
    </div>
  )
}
export default LoginPage;