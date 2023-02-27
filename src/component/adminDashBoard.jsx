import '../Style/adminDashBoard.css'
import { Link } from 'react-router-dom';

const AdminDashBoard = () => {
    return ( 
        <div className="AdminDashBoard">
            <h1>Welcome To AdminHome</h1>
       <div className="g1">
       <h1 id='k34'>Greenwich Library Blog</h1>
       </div>

       <div className="g2">
        <div className="g3">
        <h1>Greenwich Library to Host an Evening of Broadway Cabaret</h1>
        <h4>The Friends of Greenwich Library are pleased to host a special night of cabaret-style performances with How I Got to…</h4>
        <Link id='g23' to="">Take a Look</Link>
        </div>
       </div>
       <div className="g4">
        <div className="g5">
        <h1>Greenwich Library to Host an Evening of Broadway Cabaret</h1>
        <h4>The Friends of Greenwich Library are pleased to host a special night of cabaret-style performances with How I Got to…</h4>
        <Link id='g24' to="">Take a Look</Link>
        </div>
       </div>
       <div className="g6">
        <div className="g7">
        <h1>Greenwich Library to Host an Evening of Broadway Cabaret</h1>
        <h4>The Friends of Greenwich Library are pleased to host a special night of cabaret-style performances with How I Got to…</h4>
        <Link id='g25' to="">Take a Look</Link>
        </div>
       </div>
        </div>
     );
}
 
export default AdminDashBoard;