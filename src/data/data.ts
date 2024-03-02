import axios from "axios";
import { KEY } from "../configuration/accesKey";



const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE= 20


export   const fetchData = async (title : string | undefined, pageNumber: number) => {
  try {
    const { data } = await axios.get(`${API_URL}?query=${title}&page=${pageNumber}&per_page=${IMAGES_PER_PAGE}&client_id=${KEY}`);
    console.log("results",data);
    return data.results;
  } catch (error :any) {
    console.error("An error occurred while fetching data:", error);
  }
}; 



