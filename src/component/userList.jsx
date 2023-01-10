import { useEffect, useState } from "react";
import '../Style/userList.css'

const UserList = () => {
    let [oldUsers,newUsers]=useState([])
    useEffect(()=>
    {
        let fetchData=async()=>
        {
            let response=await fetch('http://localhost:7594/users')
            let data=await response.json()
            newUsers(data)
        }
        fetchData()
    },[oldUsers])
    let remove=(id)=>
    {
        newUsers
    }
    return (  
        <div className="userlist1">
            <h1>user list</h1>
            {
                oldUsers.map((data)=>
                (

                    <div className="user1">
                     
                        <h4>name: {data.name}</h4>
                        <h4>age: {data.age}</h4>
                        <h4>email: {data.email}</h4>
                        <h4>phoneNumber: {data.phoneNumber}</h4>
                        <button onClick={()=>remove(data.id)}>Delete</button>
                    </div>

                ))
            }
        </div>
    );
}
 
export default UserList;
