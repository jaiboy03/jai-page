const jj_token = "";

export const getToken = () => {
    return window.localStorage.getItem(jj_token);
}

export const saveToken = (token: any) => {
    window.localStorage.setItem(jj_token, token);
}

export const destroyToken = () => {
    window.localStorage.removeItem(jj_token);
}

export default {
    getToken,
    saveToken,
    destroyToken
}