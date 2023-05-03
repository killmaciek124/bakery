// PROPER FILE FOR GOOGLE AUTH

import { useSession, signIn, signOut } from "next-auth/react";
const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <p>Witaj {session.user.name}!</p>
        <button onClick={() => signOut()}>signOut</button>
      </div>
    );
  } else {
    return (
      <div>
        {/* <p>You are not signed in!</p> */}
        <button onClick={() => signIn()}>SignIn</button>
      </div>
    );
  }
};

export default Login;
