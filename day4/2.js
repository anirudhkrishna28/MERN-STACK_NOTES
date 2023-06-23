const apiCall = async() => {
    const promise_from_api = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await promise_from_api.json()
    console.log(data)
}
apiCall()