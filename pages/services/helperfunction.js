
import fs from 'fs'
import path from 'path'
import { compare, hash } from 'bcrypt'

const filePath = path.join(process.cwd(), "pages", "data", "data.json")


export function allData() {
    const data = fs.readFileSync(filePath)
    return JSON.parse(data)

}

export function checkByEmail(email) {
    const data = allData()
    return data.find((element) => {
        return element.email === email
    })

}

export async function checkByPassword(hashPassword, password) {
    const isValiPassword = await compare(hashPassword, password)
    return isValiPassword
}




export async function saveData(email, password) {
    const alreadyEmail = checkByEmail(email)
    if (alreadyEmail === undefined) {
const data = allData()
    const hashPassword = await hash(password, 12)
    data.push({
        email, password: hashPassword
    })
    fs.writeFileSync(filePath, JSON.stringify(data))
    }
    
    


}