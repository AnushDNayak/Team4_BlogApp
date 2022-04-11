
import axios from "axios";
import { useEffect, useState } from "react";
import '../App.css';
import Search from './Search';
import Card from './Card';

const Posts = () => {
    const [appPostsList, setAppPostsList] = useState([]);
    const [appPost, setAppPost] = useState({});
    const dataUrl = `https://jsonplaceholder.typicode.com/posts`;

    useEffect(() => {
        //------------------------------------------------------for loading all data from api
        axios.get(`${dataUrl}`)
        .then((response) => {
            console.log(response.data);
            setAppPostsList(response.data);
        })
        .catch(() => {
            alert("Initialization failed");
            setAppPostsList([]);
        });
        setAppPost({
            userNo: 999,
            id: "101",
            title: "Dummy Title",
            body: "Dummy Body"
        });
    }, []);

    const getAppPostById = (evt) => {
        evt.preventDefault();
        axios.get(`${dataUrl}/${evt.target.userNo.value}`)
            .then((response) => {
                console.log(response.data);
                setAppPost(response.data);
            })
            .catch(() => {
                alert("Search Stoped");
                setAppPost({
                    userNo: 999,
                    id: "101",
                    title: "Dummy Title",
                    body: "Dummy Body"
                });
            });
    }
    return (
        <div className="container" >
            <center><p className="display-4 text-primary">Blogs</p></center>
            <div>
                <div > 
                    <p>Welcome</p>
                  <center><Search data={getAppPostById}/></center> 
                  {appPost.userNo!=999  &&
                      
                      <div><strong><center><p>Results</p></center></strong><div><Card data={appPost}/></div></div>
                  }
                    <div><span className="font-weight-bold"> </span>
                    <strong><center><p>All Posts</p></center></strong>
                        {<div  style={{marginLeft:'60px'}} > 
                            {appPostsList.map(item => {
                              
                                return <div  class="d-inline-flex p-2 bd-highlight"><Card data={item}/></div>
                           
                            })}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Posts;


