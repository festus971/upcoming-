import React,{useEffect, useState} from "react";
const usingFetch = ()=>{
    const [users, setUsers] = useState([])

    const fetchData =()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response .json())
        .then(data => setUsers(data))
    }
    useEffect (()=>{
        fetchData()
    }, [])

    return(
        <div>
            {users.length > 0 &&(
                <ul>
                    {users.map(user=>(
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default usingFetch