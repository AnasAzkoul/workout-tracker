import {defineStore} from "pinia";
import {ref} from "vue";
import {supabase} from "../supabase/init.ts";


interface User {
    email: string;
    id: string;
}

export const useUSer = defineStore('user', () => {
    const currentUser = ref<User | null>(null);

    async function signInUser(email:string, password: string ):Promise<void> {
        try{
            let {data:{user}, error} = await supabase.auth.signInWithPassword({
                email,
                password
            })

            if(error) throw error;

            currentUser.value = {
                email: user?.email as string,
                id: user?.id as string
            }
        } catch (e) {
            if(e instanceof  Error) {

            }
        }
    }
})