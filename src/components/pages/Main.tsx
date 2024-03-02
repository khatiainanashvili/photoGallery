
import { useEffect, useState } from 'react';
import ImageCard from '../ImageCard';
import { fetchData } from '../../data/data';
import { ImageDataInterface } from '../../interfaces/interfaces';
import ImagePlaceholder from '../ImagePlaceholder';

function Main({searchQuery, handleSearch, imageData, setImageData, loading} :any) {
  
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 10
      )  {
        fetchData(searchQuery.current?.value || "popular", page + 1).then(newData => {
          setPage(prevPage => prevPage + 1);
          setImageData((prevData: ImageDataInterface) => [...prevData, ...newData]);
        });
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);
  
  
    useEffect(() => {
      fetchData(searchQuery.current?.value || 'popular', 1).then(initialData => {
        setImageData(initialData);
      });
    }, []);


  return (
    <>

      <form onSubmit={handleSearch} className='search-form'>
        <input 
          type="search" 
          name='search' 
          id='search' 
          ref={searchQuery}
          className='search-Input'
          placeholder='Type here to search...'  
        />

      </form>
     {loading 
     ?
    
     <div className="gallery-container">
      <ImagePlaceholder />
     </div>
     
     :
      <div className='gallery-container'>
        {imageData.map((item :any) => (
          <ImageCard imageData = {imageData} {...item} key = {item.slug}/>
      
        ))}
      </div>
      } 
    </>
  );
}

export default Main;
