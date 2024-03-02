
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/pages/NavBar'
import Main from './components/pages/Main'
import History from './components/pages/History';
import { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchData } from './data/data';
import { ImageDataInterface } from './interfaces/interfaces';

             

function App() {
  const searchQuery:React.MutableRefObject<HTMLInputElement | null | undefined> = useRef<HTMLInputElement>()
  const [imageData, setImageData] = useState<ImageDataInterface[]>([]);
  const [searchItems, setSearchItems] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false)
  const [itemNotFound, setItemNotFound] = useState<boolean>(false)

  
const handleSearch = async (e :any) => {
  setLoading(true)
   e.preventDefault();
    try{
      
    const searchData = await fetchData(searchQuery.current?.value , 1);
    const query = searchQuery.current?.value || [];
    setSearchItems((prevItems : any) => {
      const updatedItems = [...new Set([...prevItems, query])];
      return updatedItems;
  });
    setImageData(searchData);
    setLoading(false)
 } 
 catch (error :any) {
  setItemNotFound(true)
  throw new Error(error.message);
}
  }

  const { isLoading, isError } = useQuery(['data', searchQuery.current?.value], () => fetchData(searchQuery.current?.value || 'popular', 1), {
    
    staleTime: 1000, 
    cacheTime: 60000, 
    initialData: [], 
  });


  if (isLoading) return <div>Loading...</div>;
  if (isError ) return <div>Error fetching data</div>;

  return (
   <main>
    <header className='header'>
        <NavBar />
        <Routes>
            <Route path='/' element={
            <Main 
            searchQuery = {searchQuery} 
            handleSearch ={handleSearch} 
            imageData ={imageData} 
            setImageData= {setImageData}
            loading = {loading}
            itemNotFound ={itemNotFound}
            />
            }/>
            <Route path='/history' element={
            <History 
            searchItems={searchItems} 
           />
            } /> 
        </Routes>
        </header>
   </main>
  )
}

export default App
