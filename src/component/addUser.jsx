import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/addUser.css'

const AddUser = () => {
let [name,setName]=useState('')
let [age,setAge]=useState('')
let [email,setEmail]=useState('')
let [phoneNumber,setphoneNumber]=useState('')

let navigate=useNavigate()

let handleSubmit=(e)=>
{
    e.preventDefault();
    let userData={name,age,email,phoneNumber}

    fetch('http://localhost:7594/users',{
        method:'POST',
        headers:{'content-Type':'application/json'},
        body:JSON.stringify(userData)
    })
    alert("user is add succussfully")
    navigate('/admin/user-list')
}

    return ( 
        <div className="pag">
            <h1>Add to user</h1>
       
        <div className="adduser">
            
            <form action="" onSubmit={handleSubmit}>
                <div className="r1">
                    <div className="r2">
                    <label id="l1" htmlFor="">name</label>
                    <br />
                    <input type="text" required placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <br />
                    <div className="r3">
                        <label htmlFor="">age</label>
                        <br /> 
                        <input type="number" min={1} required value={age} onChange={(e)=>setAge(e.target.value)}/>
                    </div>
                    <br />
                    <div className="r4">
                        <label htmlFor="">email</label>
                        <br />
                        <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <br />
                    <div className="r5">
                        <label htmlFor="">phoneNumber</label>
                        <br />  
                        <input type="tel" minLength={10} maxLength={10} required placeholder="enter is PhoneNumber" value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}/>
                    </div>
                    <br />
                    <button id="btn123">Submit</button>
                </div>
            
            </form>
        </div>
        </div>
     );
}
 
export default AddUser;