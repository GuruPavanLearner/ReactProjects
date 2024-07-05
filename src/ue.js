import {useState}from 'react';
function UseEffect(){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    UseEffect(()=>{
        const fetchData=async()=>{
            setLoading(true);
            try{
                const response=await fetch('http://jsonplaceholder.typicode.com/todos/1');
                const result=await response.json();
                setData(result);
            }
            catch(error){
                console.error('Error fetching data:',error);
            }
            finally{
                setLoading(false);
            }
        };
        fetchData();
    },[]);
    if(loading){
        return<p>Loading....</p>
    }
    return(
        <div className="App">
        <h1>Data from API</h1>
          <ol>
         {data.map(item=>(
             <li key={item.id}>{item.title}</li>
          ))}
        </ol>
        </div>
    );
}
export default UseEffect;