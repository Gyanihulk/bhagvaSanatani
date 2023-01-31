import axios from "axios";

export const fetchNewsApi = async () => {
  const response =await axios
    .get("https://newsdata.io/api/1/news?apikey=pub_157633438465e2188b89c8b2965a5c24c9c41&country=in&language=en&page=3")
    return response
};
