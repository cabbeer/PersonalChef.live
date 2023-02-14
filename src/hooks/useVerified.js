import pb from "@/lib/pocketbase";
import { useQuery } from "react-query";
 
// this hook queries user data from pocketbase DB
// this hook also has functionality to (re)send a verification email 

export default function useVerified() {
    //if the user is logged in, return id(without ? this breaks because there is no id since the user is logged out)
    const id = pb.authStore.model?.id;

            async function checkVerified(args) {
            const userdata = await pb.collection('users').getOne(id);
            return userdata.verified;
        }


    return useQuery({queryFn: checkVerified, queryKey:["check-verified", id]})

}

export async function requestVerification() {
    const email = pb.authStore.model.email;
    const res = await pb.collection('users').requestVerification(email);
    if(res) alert("Verification email sent! Check your inbox.");
}