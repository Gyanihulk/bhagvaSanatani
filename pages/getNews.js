import { Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { client } from "../lib/client";
import { fetchNewsApi } from "../lib/fetchNewsApi";

const getNews = ({ category, header }) => {
  async function getNewsdata() {
    const news = await fetchNewsApi();
    console.log(news);
  }
  return (
    <>
      <Header category={category} />
      <NavBar category={category} header={header} />
      <Flex  alignItems={"center"} >
      <Button onClick={getNewsdata} colorScheme={"purple"}>
        {" "}
        Fetch News
      </Button>
      </Flex>
      
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
