import LoginButton from './components/LoginButton';
import './Login.css'

export default function Login(){
  return (
    <main className="login-body">
      <div className="form">
        <h3 className="form-title">Login With:</h3>
        <LoginButton />
      </div>
    </main>
  )
}