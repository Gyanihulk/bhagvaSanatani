import axios from "axios";

export const fetchNewsApi = async (country, language, page) => {
  const response = await axios.get(
    `https://newsdata.io/api/1/news?apikey=${
      process.env.NEXT_PUBLIC_NEWS_API_TOKEN
    }&country=${country}&language=${language}${page ? `&page=${page}` : ""}`
  );
  return response;
};
