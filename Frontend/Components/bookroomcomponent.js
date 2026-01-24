import { data } from "autoprefixer";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BookRoomComponent=()=>{
    const {roomId,roomNumber}=useParams()
    const[book,setbook]=useState({
        roomId:roomId,
        roomNumber:roomNumber,
        Name:"",
        email:"",
        number:"", 
        state:"",
        dist:"",
       })
    
    const submitrequest=async(e)=>{
        e.preventDefault();
        console.log(book)
        const url="http://localhost:5000/bookroomfromuser";
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",

            },
            body:JSON.stringify(book)
        }
        const result=await fetch(url,options);
        const data=await result.json();
        console.log(data)




    }
   const changeemail=(e)=>{
    setbook((prev)=>{
        return{
            ...prev,
            email:e.target.value
        }
    })

    }
    const changedist=(e)=>{
         setbook((prev) => {
           return {
             ...prev,
             dist: e.target.value,
           };
         });

    }
    const changeNumber=(e)=>{
         setbook((prev) => {
           return {
             ...prev,
             number: e.target.value,
           };
         });

    }
    const changestate=(e)=>{
         setbook((prev) => {
           return {
             ...prev,
             state: e.target.value,
           };
         });

    }
    const changename=(e)=>{
         setbook((prev) => {
           return {
             ...prev,
             Name: e.target.value,
           };
         });

    }
    return (
        <div>
           <div>
                <h1>Welcome to the Booking Details </h1>
                <p> Room Id - {roomNumber}</p>
           </div>   
           <form onSubmit={submitrequest}>
            <label htmlFor="name"> 
                <h1>Enter your Name</h1>     
            </label>
            <input type="text" placeholder="Enter your Name " id="name" value={book.Name} onChange={changename}/>
            <label htmlFor="email">
                <h1>Enter your email</h1>
            </label>
            <input type="email" placeholder="enter your email" id="email" value={book.email} onChange={changeemail}/>
            <label htmlFor="number">
                <h1>Enter yout Mobile Number </h1>
            </label>
            <input type="number " placeholder="enter your Number " id="number" value={book.number} onChange={changeNumber}/>
            <label htmlFor="state">
                <h1>Enter your State</h1>
            </label>
            <input type="text" placeholder="enter your State" id="state"value={book.state} onChange={changestate}/>
            <label htmlFor="district">
                <h1>Enter your District</h1>
            </label>
            <input type="text" placeholder="enter your District" id="district" value={book.dist} onChange={changedist}/>
            <div>
                <button type="submit" className="bg-black text-white rounded-2xl p-2">
                    Send Room Request
                </button>
            </div>

           </form>



        </div>
    )
}

export default BookRoomComponent;