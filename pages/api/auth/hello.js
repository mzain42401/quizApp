// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {  saveData } from "@/pages/services/helperfunction"

export default function handler(req, res) {

  if(req.method==="POST"){
    const {email,password}=req.body
saveData(email,password)
res.status(201).send()
}

}
