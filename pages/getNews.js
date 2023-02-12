// import { Button, Flex, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { client } from "../lib/client";
import { fetchNewsApi } from "../lib/fetchNewsApi";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  OrderedList,
  ListItem,
  ListIcon,
  Icon,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";

const getNews = ({ category, header }) => {
  const [location, setLocation] = useState("in");
  const [language, setLanguage] = useState("en");
  const [news, setNews] = useState([]);
  const [nextPage, setNextPage] = useState("");
  async function getNewsdata() {
   
    const news = await fetchNewsApi(location, language);
  
    setNextPage(news.data.nextPage);
    setNews(news.data.results);
  }

  const handleRemovePlagiarism = (index) => {
    // Make API call to remove plagiarism
    // setNews(updatedNews)
  };

  const getNextPageNews = async () => {
    const news = await fetchNewsApi(location, language,nextPage);
    setNextPage(news.data.nextPage);
    setNews(news.data.results);
  };
  return (
    <>
      <Header category={category} />
      <NavBar category={category} header={header} />
      <Stack
        h="full"
        p={"10"}
        alignItems={"center"}
        // direction={['row', 'column']}
      >
        <form
        // onSubmit={getNewsdata}
        >
          <FormControl>
            <FormLabel htmlFor="location">Location</FormLabel>
            <Select
              id="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Select location"
            >
              <option value="us">US</option>
              <option value="uk">UK</option>
              <option value="in">India</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel htmlFor="language">Language</FormLabel>
            <Select
              id="language"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              placeholder="Select language"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </Select>
          </FormControl>
          <Button mt={4} onClick={getNewsdata}>
            Search
          </Button>
        </form>
        <OrderedList mt={8} spacing={10}>
          {news.map((item, index) => (
            <ListItem key={index}>
              <Text>{item.title}</Text>
              {item?.image_url ? (
                <Image
                  src={item.image_url}
                  alt="news image Image"
                  w="300px"
                  h="300px"
                  align={"center"}
                />
              ) : (
                ""
              )}
              <Text>{item.description}</Text>
              <Button onClick={() => handleRemovePlagiarism(index)}>
                Remove Plagiarism
              </Button>
            </ListItem>
          ))}
        </OrderedList>
        <Button onClick={getNextPageNews}>Next Page</Button>
      </Stack>
    </>
  );
};

export const getServerSideProps = async () => {
  const categoryQuery = `*[_type=="category"]`;
  const category = await client.fetch(categoryQuery);

  const headerQuery = `*[_type=="header"]`;
  const header = await client.fetch(headerQuery);

  return {
    props: { category, header },
  };
};
export default getNews;
