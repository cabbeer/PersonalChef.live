import { useMutation } from "react-query";
import pb from "@/lib/pocketbase";

// useMutation hook to implement loading state of login (instead of useState)
//note:  no need for try and catch blocks because useMutation is dabomb!

export default function useLogin() {
    async function login({email, password}) {
          const authData = await pb.collection('users').authWithPassword(email, password);
    }
    return useMutation(login);
}