import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp ({ setIsLoggedIn, setLoggedInUserId }) {
  // const [ formData, setFormData ] = useState({
  //   username: '',
  //   email: '',
  //   password: ''
  // })
  const [ enteredUserName, setUserName ] = useState('')
  const [ enteredEmail, setEmail ] = useState('')
  const [ enteredPassword, setPassword ] = useState('')

  const [ errors, setErrors ] = useState([])
  const navigate = useNavigate()
  // const { username, email, password } = formData

  function handleSubmit (e) {
    console.log(e)
    e.preventDefault()
    const user = {
      'username': enteredUserName,
      'email': enteredEmail,
      'password': enteredPassword,
    }

    fetch('/users', {
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
          res.json().then(json => setErrors(Object.entries(json.errors)))
        }
      })
  }

  const handleUsernameChange = (e) => {
    setUserName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div id="signup" >
      <h1 className="title">
        // CSS - Come $ell $tuff!
      </h1>
      <div className="login">
        <div id="signupdiscription">
          Welcome to CSS, buy or sell items at your local garage sale!
        </div>
        <div className="signUpForm">
          <label>
            Username
          </label>
          <input type="text" name="username" onChange={ handleUsernameChange } value={ enteredUserName } /><br />

          <label>
            Email
          </label>
          <input type='text' name='email' value={ enteredEmail } onChange={ handleEmailChange } /><br/>

          <label>
            Password
          </label>
          <input type="password" name="password" onChange={ handlePasswordChange } value={ enteredPassword } />
          <div className='signupFormButton'>
            <button value='Sign up!' onClick={ handleSubmit }>Sign Up</button>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default SignUp;