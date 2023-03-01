export function setLocalMessage(key, value){
    let data = JSON.stringify(value)
    localStorage.setItem(key, data);
}

export function getLocalMessage(key){
    let data = ''
    let value = localStorage.getItem(key);
    try {
        data = JSON.parse(value)
    } catch(e) {
        data = value
    }
    return data
}

// export function clearLocalMessage(){
//     localStorage.clear();
// }

export function removeLocalMessage(key){
    localStorage.removeItem(key);
}