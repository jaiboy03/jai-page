const jj_token = "jt";
const userItem = "ui";

export const getToken = () => {
    return window.localStorage.getItem(jj_token);
}

export const saveToken = (token: any) => {
    window.localStorage.setItem(jj_token, token);
}

export const destroyToken = () => {
    window.localStorage.removeItem(jj_token);
}

export const getInfo = () => {
    return window.localStorage.getItem(userItem);
}

export const saveInfo = (userInfo : any) => {
    window.localStorage.setItem(userItem, userInfo);
}

export const destroyInfo = () => {
    window.localStorage.removeItem(userItem);
}



export default {
    getToken,
    saveToken,
    destroyToken,
    getInfo,
    saveInfo,
    destroyInfo

}

