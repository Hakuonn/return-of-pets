const request=()=>{
    const req = axios.create({
        baseURL: 'http://localhost/return_of_pets/back/public/',
        headers: {'Authorization':window.localStorage.getItem('jwtToken')}
    })
    return req;
}