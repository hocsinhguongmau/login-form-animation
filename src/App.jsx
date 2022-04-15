import './App.scss'

function App() {
  const handleLogin = () => {
    const loginForm = document.getElementById('login-form')
    const registerForm = document.getElementById('register-form')
    loginForm.classList.add('active')
    if (loginForm.classList.contains('active')) {
      registerForm.classList.add('closing')
    }
    setTimeout(() => {
      registerForm.classList.remove('active')
      registerForm.classList.remove('closing')
    }, 300)
  }
  const removeLogin = () => {
    const loginForm = document.getElementById('login-form')
    loginForm.classList.add('closing')
    setTimeout(() => {
      loginForm.classList.remove('active')
      loginForm.classList.remove('closing')
    }, 300)
  }
  const handleRegister = () => {
    const loginForm = document.getElementById('login-form')
    const registerForm = document.getElementById('register-form')
    registerForm.classList.add('active')
    if (loginForm.classList.contains('active')) {
      console.log('hmm')
      loginForm.classList.add('closing')
    }
    setTimeout(() => {
      loginForm.classList.remove('active')
      loginForm.classList.remove('closing')
    }, 300)
  }
  const removeRegister = () => {
    const registerForm = document.getElementById('register-form')
    registerForm.classList.add('closing')
    setTimeout(() => {
      registerForm.classList.remove('active')
      registerForm.classList.remove('closing')
    }, 300)
  }
  return (
    <div className='App'>
      <div className='button-wrapper'>
        <button className='button' onClick={handleLogin}>
          Sign in
        </button>
        <button className='button' onClick={handleRegister}>
          Sign up
        </button>
      </div>
      <div className='form' id='login-form'>
        <button className='button close-button' onClick={removeLogin}>
          x
        </button>
        <h2>Login</h2>
        <div className='row'>
          <label>Username</label>
          <input type='text' placeholder='username' />
        </div>
        <div className='row'>
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='row'>
          <button className='button'>Login</button>
        </div>
      </div>
      <div className='form' id='register-form'>
        <button className='button close-button' onClick={removeRegister}>
          x
        </button>
        <h2>Register</h2>
        <div className='row'>
          <label>Username</label>
          <input type='text' placeholder='username' />
        </div>
        <div className='row'>
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='row'>
          <button className='button'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default App
