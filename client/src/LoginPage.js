import { useState } from "react"
// import { useNavigate } from "react-router-dom"

function LoginPage () {
  const [ formData, setFormData ] = useState('')
  // const [ isLogged, setIsLogged ] = useState(false)
  // const history = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [ e.target.name ]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // add fetch here, POST request, URL is proxied already so just use route from backend.
    alert('User has logged in: ' + formData.name)
    console.log(formData);
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
        <form id="login_form" onSubmit={ handleSubmit }>
          <label>Username:</label><br />
          <input type="text" name="name" onChange={ handleChange } value={ formData.name } /><br />
          <label>Password:</label>
          <input type="password" name="pass" onChange={ handleChange } value={ formData.pass } />
          <button id="submit_login" type="submit">Submit Login</button>
        </form>
      </div>
    </div>
  )
}
export default LoginPage;