// const ReadBook = (props) => {
//     let Book=props.data
//     let remove=props.fn
//     let read=props.fn1
//     return ( 
//         <div className="readbook">
//             {/* <h1>read book</h1> */}
//             <h1>Book List:{Book.length}</h1>
//             <div className="books_section">
//                 {
//                     Book.map(data=>
//                         (
//                             <div className="book_description">
//                                 <div className="image">
//                                 <img height={240} width={280} src={data.thumbnailUrl} alt="" />
//                                 </div>
//                          <div className="book_card">
//                             <h1>Title:{data.title}</h1>
//                             <h3>Author:{data.authors.toString()}</h3>
//                             <h4>pageCount:{data.pageCount}</h4>
//                             <h4>Categories:{data.categories}</h4>
//                             <button id="btn2" onClick={()=>read(data.id)}>read more</button>
//                             <button id="btn1" onClick={()=>remove(data.id,data.title)}>Delete</button>
//                          </div>  
//                          </div> 
//                         ))
//                 }
//             </div>

//         </div>
//      );
// }
 
// export default ReadBook;



import { useEffect } from 'react';
import { useState } from 'react';
import '../Style/readBook.css'
import { useParams } from 'react-router-dom';

const ReadBook = () => {

    let [read,setvalue]=useState([])

    //to get route paremeter
    let params=useParams()

    useEffect(()=>{
        let fetchdata=async()=>{
            let responce=await fetch(`http://localhost:7594/books/${params.id}`);
            let data = await responce.json()
            setvalue(data)
        }
        fetchdata()
    },[])
    return ( 
        <div className="read">
        <div className="readBooks">
            <h1>Books</h1>
          <h2>{read.title}</h2>
          <p>{read.shortDescription}</p>
          <p>{read.longDescription}</p>
    
        </div>
        </div>
     );
}
export default ReadBook;