import {Routes,Route} from 'react-router-dom'
import UserNavbar from './userNavbar';
import UserDashBoard from './userDashBoard';
import BookList from './bookList';
import ReadBook from './readBook';
import Footer from './footer';
import PageNotFound from './404';

const UserPortal = () => {
    return ( 
        <div className="userportal">
            <UserNavbar/>
            <Routes>
            <Route path="/" element={<UserDashBoard/>} element1={<Footer/>}/>
            <Route path="/book-list" element={<BookList/>}/>
            <Route path="/book-list/:id" element={<ReadBook/>}/>
            <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </div>
     );
}
 
export default UserPortal;