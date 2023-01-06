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
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Header from "../../components/Header";
import { client, urlFor } from "../../lib/client";

const NewsDetails = ({ newsArticle, news ,addvertisement}) => {
  console.log(addvertisement);
  return (
    <>
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
            {newsArticle.heading2}
          </Text>
          <Text
            as="sub"
            textAlign={"center"}
            lineHeight={"100%"}
            letterSpacing={"widest"}
          >
            {newsArticle.jounalist}
          </Text>
          <Text
            as="sub"
            letterSpacing={"widest"}
            textAlign={"center"}
            lineHeight={"100%"}
          >
            {newsArticle.location}
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
            h={["40", "400"]}
            filter={"hue-rotate(-130deg)"}
          />

          <Text lineHeight={"190%"} textAlign={"center"}>
            {newsArticle.para1}
          </Text>
          <Image
            src={urlFor(addvertisement[0].image)}
            h={["40", "400"]}
          />
          <Text lineHeight={"190%"} textAlign={"center"}>
            {newsArticle.para2}
          </Text>
          <Image
            src={urlFor(addvertisement[1].image)}
            h={["40", "400"]}
          />
          <Text lineHeight={"190%"} textAlign={"center"}>
            {newsArticle.para3}
          </Text>
          <Image
            src={urlFor(addvertisement[2].image)}
            h={["40", "400"]}
          />
          <Text lineHeight={"190%"} textAlign={"center"}>
            {newsArticle.para4}
          </Text>
          <Text lineHeight={"190%"} textAlign={"center"}>
            {newsArticle.para5}
          </Text>
        </Stack>
      </Container>
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

  return {
    props: { newsArticle, news ,addvertisement},
  };
};
export default NewsDetails;
