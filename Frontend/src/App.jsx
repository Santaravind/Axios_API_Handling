
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  
  // const [products,error,loading]=custemReactQuery('/api/products');
  const [products,setProducts]=useState([]);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false)
  const [search,setSearch]=useState('table')

useEffect(()=>{
  const controller=new AbortController();
 try {
  setLoading(true)
    setError(false);
   (async()=>{
     const response=await axios.get('/api/products?search='+search,{
      signal:controller.signal
     })
     console.log(response.data);
     setProducts(response.data);
     setLoading(false)
   })()
 } catch (error) {
  if (axios.isCancel(error)) {
   console.log('Request conceled',error.message)
    return;
    
  }
   setError(true);  
  
//cleaup code
return()=>{
controller.abort();
}

 }
},[search])

if (error) {
  return <h1>Something went wrong.</h1>
  
}

if (loading) {
  return <h1>Loading....</h1>
}

  return (
    <>
     <h1>chai out code api handling</h1>
     <h3>Number of products are:{products.length}</h3>

     <input type="text"
     placeholder='search'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
     />
    </>
  )
}

export default App


// const custemReactQuery=(urlPath)=>{
  
// return[products, error ,loading]
// }

