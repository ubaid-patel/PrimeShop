
export function signupUser(formData) {
    console.log("Signing up user with data:", formData);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(formData);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    const promise = new Promise((resolve, reject) => {
        fetch("http://10.161.162.159:3001/auth/signup", requestOptions)
            .then((response) => response.text())
            .then((result) => resolve(JSON.parse(result)))
            .catch((error) => reject(JSON.parse(error)));
    });
    return (promise);
}


export function loginUser(userId, password) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "userId": userId,
        "password": password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };


    const promise = new Promise((resolve, reject) => {
        fetch("http://10.161.162.159:3001/auth/login", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                localStorage.setItem("data", JSON.parse(result));
                resolve(JSON.parse(result));})
            .catch((error) => reject(JSON.parse(error)));
    });
    return (promise);
}

export function isUserSignedIn() {
    return (false)
}