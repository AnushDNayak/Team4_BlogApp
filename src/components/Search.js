import Posts from './Posts';
import axios from "axios";
import { useEffect, useState } from "react";
import Card from './Card';


const Search=(props)=>{
    const [uNo, setUserNo] = useState();
    const handleChange = (evt) => {
        evt.preventDefault();
        console.log(evt.target.value);
        setUserNo(evt.target.value);
    }
    const dataUrl = `https://jsonplaceholder.typicode.com/posts`;
    const submitGetAllAppPosts = (evt) => {
        evt.preventDefault();
       props.data(evt);
    }

    return(
     <div>
        <form action="/" onSubmit={submitGetAllAppPosts}>
             <input
             type="number" 
             id="userNo" 
             name="userNo" 
             value={uNo} 
             onChange={handleChange} 
             placeholder="Search by Id & 999 to stop"  
               />
               <button type="submit">Search</button>
           </form>
    </div> 
    )
}
export default Search;