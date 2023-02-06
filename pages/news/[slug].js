import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  Carousel
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { client, urlFor } from "../../lib/client";
import Head from "next/head";
const NewsDetails = ({ newsArticle, news ,addvertisement,category,header}) => {
  const imageLink=urlFor(newsArticle?.headerImg).url()
  return (
    <>
    <Head>
    <title>{newsArticle?.heading1}</title>
    <meta property="og:image" content={imageLink} />
    <meta property="og:image" content={imageLink} />
    </Head>
    <Header category={category} />
    <NavBar category={category} header={header}/>
      <Container maxW={"container.xl"} minH={"100vh"} p="2" textAlign={"center"}>
        <Heading
          textTransform={"uppercase"}
          py="2"
          letterSpacing={"widest"}
          w={"fit-content"}
          borderBottom={"2px solid"}
          m="auto"
        >
          {newsArticle?.heading1}
        </Heading>
        <Stack>
          <Text as="sub" lineHeight={"100%"} textAlign={"center"}>
            {newsArticle?.heading2}
          </Text>
          <Text
            as="sub"
            textAlign={"center"}
            lineHeight={"100%"}
            letterSpacing={"widest"}
          >
            {newsArticle?.jounalist}
          </Text>
          <Text
            as="sub"
            letterSpacing={"widest"}
            textAlign={"center"}
            lineHeight={"100%"}
          >
            {newsArticle?.location}
          </Text>
        </Stack>

        <Stack
          h="full"
          p={"4"}
          alignItems={"center"}
          // direction={['row', 'column']}
        >
          <Image
            src={urlFor(newsArticle?.headerImg)}
            w="100%"
          h="400px"
            alt="advertisement"
          />

          <Text lineHeight={"190%"} textAlign={"center"}>
            {newsArticle?.para1?newsArticle?.para1:" "}
          </Text>
          {addvertisement[0]?.image?<Image
            src={urlFor(addvertisement[0].image)}
            h={["40", "400"]}
            alt="advertisement"
          />:" "}
          <Text lineHeight={"190%"} textAlign={"center"}>
          {newsArticle?.para2?newsArticle?.para2:" "}
          </Text>
          {addvertisement[1]?.image?<Image
            src={urlFor(addvertisement[1].image)}
            h={["40", "400"]}
            alt="advertisement"
          />:" "}
          <Text lineHeight={"190%"} textAlign={"center"}>
          {newsArticle?.para3?newsArticle?.para3:" "}
          </Text>
          {addvertisement[2]?.image?<Image
            src={urlFor(addvertisement[2].image)}
            h={["40", "400"]}
            alt="advertisement"
          />:" "}
          <Text lineHeight={"190%"} textAlign={"center"}>
          {newsArticle?.para4?newsArticle?.para4:" "}
          </Text>
          {addvertisement[3]?.image?<Image
            src={urlFor(addvertisement[3].image)}
            h={["40", "400"]}
            alt="advertisement"
          />:" "}
          <Text lineHeight={"190%"} textAlign={"center"}>
          {newsArticle?.para5?newsArticle?.para5:" "}
          </Text>
          {addvertisement[4]?.image?<Image
            src={urlFor(addvertisement[4].image)}
            h={["40", "400"]}
            alt="advertisement"
          />:" "}
          <Text lineHeight={"190%"} textAlign={"center"}>
          {newsArticle?.para6?newsArticle?.para6:" "}
          </Text>
          <Text lineHeight={"190%"} textAlign={"center"}>
          {newsArticle?.para7?newsArticle?.para7:" "}
          </Text>
          <Text lineHeight={"190%"} textAlign={"center"}>
          {newsArticle?.para8?newsArticle?.para8:" "}
          </Text>
          <Text lineHeight={"190%"} textAlign={"center"}>
          {newsArticle?.para9?newsArticle?.para9:" "}
          </Text>
          <Text lineHeight={"190%"} textAlign={"center"}>
          {newsArticle?.para10?newsArticle?.para10:" "}
          </Text>
        </Stack>
      </Container>
      <Footer/>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type =="news"]{slug{current}}`;

  const products = await client.fetch(query);

  const paths = products.map((news) => ({
    params: { slug: news.slug.current },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type=="news" && slug.current =='${slug}'][0]`;
  const newsArticle = await client.fetch(query);

  const newsQuery = `*[_type=="news"]`;
  const news = await client.fetch(newsQuery);

  const addvertisementQuery = `*[_type=="advertisement"]`;
  const addvertisement = await client.fetch(addvertisementQuery);
  const categoryQuery = `*[_type=="category"]`;
  const category = await client.fetch(categoryQuery);

  const headerQuery = `*[_type=="header"]`;
  const header = await client.fetch(headerQuery);
  return {
    props: { newsArticle, news ,addvertisement,category,header},
  };
};
export default NewsDetails;
