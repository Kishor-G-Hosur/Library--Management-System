import { useState } from "react";
import { useNavigate } from "react-router-dom";
import'../Style/addBook.css'

const AddBooks = () => {
    //title,categories,authors,pageCount,shortDescription,shortDescription.,thumbnailUrl


    let [title,setTitle]=useState('')
    let [categories,setCatagory]=useState('')
    let [authors,setAuthor]=useState('')
    let [pageCount,setPage]=useState('')
    let [shortDescription,setShort]=useState('')
    let [longDescription,setLong]=useState('')
    let [thumbnailUrl,seturl]=useState('')
    let navigate=useNavigate()

     let handleSubmit=(e)=>
     {
        e.preventDefault();
        //data to be posted
        let bookData={title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}

        //posting to server
        fetch('http://localhost:7594/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert("book add successfully")
        navigate('/admin/book-list')
     }    
    
    
    

    return (
        <div className="addbooks0">
            <h1>Add a Books</h1>
            <div className="form0">
                <form action="" onSubmit={handleSubmit} >
                    <div className="title0" >
                        <input type="text" className="i10" required placeholder="Title of the book" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className="authors0">
                        <input type="text" className="i11" placeholder="name of Author" value={authors} onChange={(e)=>setAuthor(e.target.value)} />
                    </div>
                    <div className="categories0">
                        <input type="text" className="i12" placeholder="Categories" value={categories}  onChange={(e)=>setCatagory(e.target.value)}/>
                    </div>
                    <div className="pageCount0">
                        <input type="Number" className="i13" placeholder="pageCount" value={pageCount} onChange={(e)=>setPage(e.target.value)}/>
                    </div>
                    <div className="shortDescription0">
                        <textarea name="shortDescription"className="i14" id="" cols="30" rows="10" value={shortDescription} onChange={(e)=>setShort(e.target.value)} placeholder="enter shortDescription"></textarea>
                    </div>
                    <div className="longDescription0">
                        <textarea name="longDescription" className="i15" id="" cols="30" rows="10" value={longDescription} onChange={(e)=>setLong(e.target.value)} placeholder="enter longDescription"></textarea>
                    </div>
                    <div className="thumbnailUrl0">
                        <input type="text" placeholder="thumbnailUrl" className="i16" value={thumbnailUrl} onChange={(e)=>seturl(e.target.value)}/>
                    </div>
                    <button id="btn90">ADD BOOK</button>
                </form>
            </div>
        </div> 

     );
}
 
export default AddBooks;