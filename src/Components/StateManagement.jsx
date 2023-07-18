import React, { useState } from 'react'

const StateManagement = () => {
    
    const [Likes, setLikes] = useState(0);

    const [ImgUrl, setImgUrl] = useState('');
    
    let count = 10;
    const selectFile=(e)=>{
        const file = e.target.files[0];
        console.log(file);

        

        //reading a file
        const reader = new FileReader(file);
        //console.log(reader);
        reader.onload=(data)=>{
            console.log(data.target.result);
            setImgUrl(data.target.result)
        };
        reader.readAsDataURL(file);

    }
  return (
    <div>
        <div className='container'>
        <h1>count:{count}</h1>
        <button onClick={()=>{count++; console.log(count);}}>Add Count</button>
        <h1>Likes :{Likes}</h1>
        <button className='btn btn-primary me-3'onClick={()=>{setLikes(Likes+1)}}>Add Likes</button>
        <button className='btn btn-primary'onClick={()=>{setLikes(Likes-1)}}>Add DisLikes</button>
        <input type='file' onChange={selectFile}/>
        <img src={ImgUrl} alt='' style={{width: '40vw',hight:'40vh'}}/>
        </div>
        
    </div>
  )
}

export default StateManagement