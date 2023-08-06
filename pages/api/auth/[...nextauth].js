import { checkByEmail, checkByPassword } from "@/pages/services/helperfunction";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session:{
jwt:true
    },
  providers: [
   
    CredentialsProvider({
        
        async authorize({email,password}) {
const userEmail= checkByEmail(email)
if(!userEmail){
    throw new Error("User not exist")
}
const userPassword= checkByPassword(userEmail.password,password)
if (!userPassword) {
    throw new Error("Wrong Password")
    
}
    
return {email}
         
        }
      })


  ],
}

export default NextAuth(authOptions)