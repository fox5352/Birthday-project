import "./LoginButton.css"

export default function LoginButton(){
  const login = () => {
    try {
      const CLIENT_ID= import.meta.VITE_VITE_YOUR_REDIRECT_URI
      const REDIRECT_URI= import.meta.VITE_YOUR_REDIRECT_URI
      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
    } catch (error) {
      console.error('Error initiating OAuth flow:', error);      
    }
  }

  return (
    <button onClick={login} className="login-button" aria-description="Login button with google">
      {/* TODO: GOOGLE icon */}
       Login
    </button>
  )
}