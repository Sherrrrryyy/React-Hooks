import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

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


  // const [data, setData] = useState([])

  //useEffect with API
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products').then((response) => response.json()).then((json) => setData(json))
  // }, [setData])

  // useState Hook Example 1 
  // const [count, setCount] = useState(0)

  // useState Hook Example 2
  // const [name, setName] = useState('Enter Your Name')

  // useState Hook Example 3
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  const handleInput = (e) => {
    setName(e.target.value)
  }


  const saveUserData = () => {
    setData((prevData) => [...prevData, name]);
    setName('')
 console.log(data);
    
  }


  return (
    <>

      {/* Example 1 */}

      {/* <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> setCount(count + 1)}>Click me to increase the number</button>
        <button onClick={()=> setCount(count -1)}>Click me to increase the number</button>
      </div> */}

      <div>
        <h1>Enter your name</h1>
        <input type="text" value={name} onChange={handleInput} />
        <button onClick={saveUserData}>Submit</button>
      </div>


      {/* useEffect */}
      {/* <div style={{ justifyContent: 'center' }}>
        <h1>PRODUCTS</h1>
        <ul>
          {data.map((item) => {
            return (
              <>
              <div value={item.id}>
                <li>{item.title}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.rating[1]}</li>
                </div>
              </>
            )
          })}
        </ul>
      </div> */}





    </>
  );
}

export default App;
