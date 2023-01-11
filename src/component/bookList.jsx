import { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import '../Style/bookList.css'
// import ReadBook from "./readBook";

const BookList = () => {
    let [books,setBooks]=useState([])

    
    useEffect(()=>
    {
        let fetchData=async()=>
        {
            let response=await fetch('http://localhost:7594/books')
            let data= await response.json()
            setBooks(data)
        }
        fetchData()
    },[books])

    let Delete=(id,title)=>
    {
     navigate=fetch(`http://localhost:7594/books/${id}`,{
        method:'DELETE'
        
     })
     alert(`${title} is deleted permanently`)
    }
    let navigate=useNavigate();
    let location=useLocation();
    let read=(id,title)=>
    {
      if(location.pathname== '/admin/book-list')
      {
        navigate(`/admin/book-list/${id}`)
      }    
      else{
        navigate(`/user/book-list/${id}`)
      }
 }


    
    return (  
        <div className="bookList">
             <h1>Book List:{books.length}</h1>
            <div className="books_section">
                {
                    books.map((data)=>
                        (
                            <div className="book_description">
                                <div className="image">
                                <img height={240} width={280} src={data.thumbnailUrl} alt="" />
                                </div>
                         <div className="book_card">
                            <h1>Title:{data.title}</h1>
                            <h3>Author:{data.authors.toString()}</h3>
                            <h4>pageCount:{data.pageCount}</h4>
                            <h4>Categories:{data.categories}</h4>
                            <button id="btn2" onClick={()=>read(data.id)}>Read More</button>
                            {location.pathname=='/admin/book-list' && <button id="btn1" onClick={()=>Delete(data.id,data.title)}>Delete</button>}
                         </div>  
                         </div> 
                        ))
                }
       </div> 
    
          
        </div>
    );
}
 
export default BookList;