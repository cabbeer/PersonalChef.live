import pb from "@/lib/pocketbase";
import { useState,  useEffect } from "react";

// this hook also has functionality to (re)send a verification email 


export default function useVerified() {
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        async function checkVerified() {
            const id = pb.authStore.model.id;

            const userdata = await pb.collection('users').getOne(id);
            console.log(userdata);
            
            setIsVerified(userdata.verified);
        }
        const isLoggedIn = pb.authStore.isValid;
        if (isLoggedIn) checkVerified();
    }, [])

    async function requestVerification() {
        const email = pb.authStore.model.email
        const res = await pb.collection('users').requestVerification(email);
        if(res) alert("Verification email sent! Check your inbox.")
    }

    return {isVerified, requestVerification};
}