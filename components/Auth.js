import useLogin from "@/hooks/useLogin";
import useLogout from "@/hooks/useLogout";
import pb from "@/lib/pocketbase"
import { useForm } from "react-hook-form"
import useVerified, {requestVerification} from "@/hooks/useVerified";

// note: refactored hooks with react-hooks for learning, past commits use useState
// This component calls the useLogin, useLogout, and useVerified hooks to manages Auth State of the Entire App!


export const Auth = () => {
  const logout = useLogout();
  const {data: isVerified } = useVerified();
  const {mutate: login, isLoading, isError} = useLogin();
  const {register, handleSubmit, reset} = useForm();

  // wrap this in a useEffect hook to fix error
  const isLoggedIn = pb.authStore.isValid;

  async function onSubmit(data) {
    login({email: data.email, password: data.password});
    reset();
  }

  if(isLoggedIn) return(
  <>
    <h1>Logged In: {pb.authStore.model.email}</h1>
    <p>Verified: {isVerified?.toString()}</p>
    {!isVerified && <button onClick={requestVerification}>Send Verification Email</button>}
    <button onClick={logout}>Log Out</button>
  </>
  );

  return(
    <>
      {isLoading && <p>loading...</p>}
      {isError && <p>Invalid email or password</p>}
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="email" {...register("email")}/>
      <input type="password" placeholder="password" {...register("password")}/>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading" : "Login"}
      </button>
    </form>
    
    </>
  )
}