import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <p style={{fontSize:'50px', backgroundColor:'lightblue'}}>Inline CSS</p>
        <p className='myclass'>we use className here in JSX</p>
        <input type='text'/>
        <br />
        <br/>
    </div>
  )
}
export default Home