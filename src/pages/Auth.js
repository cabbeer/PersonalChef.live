import useLogin from "@/hooks/useLogin";
import useLogout from "@/hooks/useLogout";
import pb from "@/lib/pocketbase"
import { useForm } from "react-hook-form"

export default function Auth () {
  const logout = useLogout();
  const {login, isLoading} = useLogin();
  const {register, handleSubmit, reset} = useForm();

  const isLoggedIn = pb.authStore.isValid;

  async function onSubmit(data) {
    login({email: data.email, password: data.password})
    reset();
  }
  



  if(isLoggedIn) return(
  <>
    <h1>Logged In: {pb.authStore.model.email}</h1>
    <button onClick={logout}>Log Out</button>
  
  </>
  );

  return(
    <>
      {isLoading && <p>Loading...</p>}
      {/* <h1>logged in: {isLoggedIn && pb.authStore.model.email}</h1> */}
    
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