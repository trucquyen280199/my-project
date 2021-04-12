

// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeToken = () => {
    sessionStorage.removeItem('token');
}

// set the token and user from the session storage
export const setToken = (token) => {
    sessionStorage.setItem('token', token);
    // sessionStorage.setItem('user', JSON.stringify(user));
}

export const setCookie = (key, value) => {
    sessionStorage.setItem(key, value);
}

export const getCookie = (key) => {
    return sessionStorage.getItem(key);
}

export const checkToken = () => {
    let params = window.location.search;
    let key = "?token=";
    let indexToken = params.indexOf(key);
    if (indexToken > -1) {
        let token = params.substring(indexToken + key.length, params.length)
        if (token.length > 0) {
            setToken(token)
            return true;
        }
    }
    return false;
}

// export const urlServer = "http://device.chuyenviet.pro:8080/";

// export const headerAPI = () => {
//     return {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//         "token": getToken()
//     }
// }
