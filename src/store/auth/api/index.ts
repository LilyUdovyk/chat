import { dataPost } from '../../../services/api'
import { userQuery } from "./utils"

const logInQuery = `query log ($login:String, $password:String) {
    login(login:$login, password:$password)
}`

export const getAuthToken = async (login: string, password: string) => {
    await new Promise((res) => setTimeout(res, 1000))
    let loginContent = await dataPost('', logInQuery, 
        {
            "login": login,
            "password": password
        })
    return loginContent.data.login
}

const registrationQuery = `mutation reg($nick:String, $login:String, $password:String) {
    UserUpsert(user: {nick:$nick, login:$login, password:$password}) 
    ${userQuery}
}`

export const regUser = async (nick: string, login: string, password: string) => {
    await new Promise((res) => setTimeout(res, 1000))
    let regContent = await dataPost('', registrationQuery,
        {
            "nick": nick,
            "login": login,
            "password": password
        }  
    )
    return regContent.data.UserUpsert
}