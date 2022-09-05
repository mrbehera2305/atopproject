import React,{ useState,useEffect } from 'react';
import './Server.css';
import axios from 'axios';

const Server = () => {
    let [item, setItem] = useState([]);
    let [clickImg,setImg] = useState({});
    useEffect(() => {
        let dataURL = `https://api.unsplash.com/photos?page=1&client_id=4HOTVqKp0Jkgx0tZIwELS3B0PZy2zWG8VXcaTNqGtd8`;
        axios.get(dataURL).then((response) => {
            setItem( response.data)
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    return (
        <React.Fragment>
            <div>
                {
                    clickImg?.urls && <div className='position-absolute model-img'>
                         <div className='m-5'>
                         <div className='d-flex justify-content-end'>
                            <button className='btn btn-danger px-4' onClick={() => {
                                
                                setImg({});
                            }}>Cancel</button>
                        </div>
                        <div className='mt-4 text-center img-container'>
                        <img src={clickImg.urls.full} className="card-img-top img-size" alt="..." />
                                    <div className="card-body">
                                        <h3>{clickImg.user.first_name}</h3>
                                        {/* <p>Tagline:-{} <span>{data.price}</span></p> */}
                                    </div>
                        </div>
                         </div>
                       
                    </div>
                }
                <div className="row g-4 m-5 p-3 bg-light clr">
                {
                    item.length>0&&
                    item.map((data) => {
                        return (
                            <div className="col-3 position-relative" key={data.id} >
                                <div className='click-field' onClick={() => {setImg(data)}}></div>
                                <div className="card for-hover sm" >
                                    <img src={data.urls.full} className="card-img-top img-size" alt="..."/>
                                    <div className="card-body">
                                        <h3>{data.user.first_name}</h3>
                                        <p>Tagline:-{} <span>{data.price}</span></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </React.Fragment >
    )
}

export default Server;



// sec key El-4jtL11ObQ55On_U_zUTSvzrS6wNLFXneCseYzYGo
// acc key  :  4HOTVqKp0Jkgx0tZIwELS3B0PZy2zWG8VXcaTNqGtd8