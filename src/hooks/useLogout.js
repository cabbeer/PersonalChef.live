import pb from "@/lib/pocketbase";
import { useState } from "react";


export default function useLogout() {
  const [rerender, setRerender] = useState(0)

    function logout() {
        pb.authStore.clear();
        setRerender(Math.random())
    }
    return logout
}