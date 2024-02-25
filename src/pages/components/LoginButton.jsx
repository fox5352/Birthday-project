import "./LoginButton.css"

export default function LoginButton(){
  const login = () => {
    try {
      const CLIENT_ID= import.meta.env.VITE_CLIENT_ID
      const REDIRECT_URI= import.meta.env.VITE_REDIRECT_URI

      const scope = 'https://www.googleapis.com/auth/photoslibrary'
      
      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scope}&response_type=code`
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