import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // useState Hook
  // const [count, setCount] = useState(0);

  // const addNumber = () => {
  //   setCount(prev => prev + 2)
  // }

  // const subNumber = () => {
  //   setCount(prev => prev - 1)
  // }

  // const [name, setName] = useState('Hasnain');

  // const nameChange = () =>{
  //   setName('Hasnain Ali')

  // }


  // // useEffect with dependancy
  // useEffect(()=>{
  //   console.log('useEffect Hook is running');
  // }, [])

  // // useEffect without dependancy
  // useEffect(()=>{
  //   console.log('useEffect Hook is running');
  // })


  const [data, setData] = useState([])

  //useEffect with API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((response) => response.json()).then((json) => setData(json))
  }, [])


  return (
    <>
      {/* <div>
        <h1>{count}</h1>
        <button onClick={addNumber}>Click me to increase the number</button>
        <button onClick={subNumber}>Click me to increase the number</button>
      </div> */}
      {/* 
      <div>
        <h1>Enter your name</h1>
        <input type="text" value={name} onChange={nameChange} />
      </div> */}


      <div style={{ justifyContent: 'center' }}>
        <h1>PRODUCTS</h1>
        <ul>
          {data.map((item) => {
            return (
              <>
                <li>{item.title}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.rating[1]}</li>

              </>
            )
          })}
        </ul>



      </div>

    </>
  );
}

export default App;
