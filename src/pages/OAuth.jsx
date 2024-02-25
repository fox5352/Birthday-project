import { useEffect } from "react";

export default function Oauth(){

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has('code')) {
      // Get the authorization code
      const code = queryParams.get('code');
      // Get the access token

      console.log(code);

    }else {
      window.location.href = "/"
        console.error('Authorization code not found in URL.');
    }
  }, []);

  return (
    <>
    {/* TODO: loading animation */}
    </>
  )
}