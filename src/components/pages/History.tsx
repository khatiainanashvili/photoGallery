import { useEffect, useState } from "react";
import { fetchData } from "../../data/data";
import ImageCard from "./ImageCard";
import { HistoryProps, ImageDataInterface } from "../../interfaces/interfaces";
import ImagePlaceholder from "./ImagePlaceholder";

function History({ searchItems } : HistoryProps) {

  const [data, setData] = useState<ImageDataInterface[]>([]);
  const [, setSearchHistory] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(false)

  const handleSelection = async (value: string) => {
    setLoading(true)

 try{
    const searchData = await fetchData(value, 1);
    if (searchData.length >= 0) {
      setSearchHistory((prevItems) => {
        const updatedItems = [...new Set([...prevItems, value])];
        return updatedItems;
      });
      setData(searchData);
      setSearchValue(value);
    }
    setLoading(false)
  }  catch (error :any) {
    throw new Error(error.message);
  }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 10
      )  {
        fetchData(searchValue, page + 1).then(newData => {
          setPage(prevPage => prevPage + 1);
          setData((prevData: ImageDataInterface[]) => [...prevData, ...newData]);
        });
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);


console.log("searchItem", searchItems);

  return (
    <>
    
      {   
      searchItems.map((item :string) => (
        
        <button 
        className="history-button"
        key={item} 
        value={item}
        onClick={() => handleSelection(item)}
        >
         { item} 
        </button>
      ))}
      {loading ? <ImagePlaceholder /> :
       <div className="gallery-container">
      {data.map((item : ImageDataInterface) => (
        <ImageCard key={item.slug} {...item} />
      ))}
      </div>
      
      }
     
    </>
  );
}

export default History;
