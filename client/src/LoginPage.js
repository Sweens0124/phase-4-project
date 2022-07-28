function LoginPage () {
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
        <div id="login_form">
          <label>Username:</label><br />
          <input type="text" name="name" /><br />
          <label>Password:</label>
          <input type="password" name="pass" />
        </div>
      </div>
    </div>
  )
}
export default LoginPage;