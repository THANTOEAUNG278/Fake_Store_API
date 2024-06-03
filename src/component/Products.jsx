import { useEffect, useState } from "react"

export const Products =() =>{
  const [data,setData] = useState([]);
  const[filter,setFilter] = useState(data);
  const [loading,setLoading] =useState(false);
  let componetMounted =true;

  useEffect(()=>{
    const getProducts =async () =>{
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products")
      if(componetMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () =>{
        componetMounted = false;
      }
    }
    getProducts();
  },[]);

  const Loading = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  };

  return(
    <div>
      {loading ? <Loading/> : <ShowProducts/>}
    </div>
  )
}