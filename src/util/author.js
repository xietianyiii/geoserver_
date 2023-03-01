import { setLocalMessage, getLocalMessage, removeLocalMessage} from "./localMessage";

const TOKEN_KEY = "Token";
const USER_INFO_KEY = 'UserInfo';
const USER_AUTHORITY_KEY = 'UserAuthority';
const USER_LOGIN_KEY = 'UserLogin'

export function setToken(token){
    setLocalMessage(TOKEN_KEY, token)
}

export function getToken(){
    return getLocalMessage(TOKEN_KEY)
}

export function setUserInfo(userInfo) {
    return setLocalMessage(USER_INFO_KEY, userInfo)
}

export function getUserInfo() {
    return getLocalMessage(USER_INFO_KEY)
}

export function setUserAuthority(userAuthority) {
    return setLocalMessage(USER_AUTHORITY_KEY, userAuthority);
}

export function getUserAuthority() {
    return getLocalMessage(USER_AUTHORITY_KEY);
}

export function setUserLogin(userLogin){
    return setLocalMessage(USER_LOGIN_KEY, userLogin)
}

export function getUserLogin() {
    return getLocalMessage(USER_LOGIN_KEY);
}

export function clearAuthor(){
    removeLocalMessage(TOKEN_KEY)
    removeLocalMessage(USER_INFO_KEY)
    removeLocalMessage(USER_AUTHORITY_KEY)
}

export function clearUserLogin(){
    removeLocalMessage(USER_LOGIN_KEY)
}


