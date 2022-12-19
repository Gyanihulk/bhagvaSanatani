import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  Link,
} from "@chakra-ui/react";
import { urlFor } from "../lib/client";

const MiddleNewsList = ({ newsArticles }) => {
  
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {newsArticles.map((news) => (
       
        <AccordionItem key={news._id}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
              {news.heading1}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <Link href={`/news/${news.slug.current}`}>
          <AccordionPanel pb={4}>

          {news?.headerImg ? <Image src={urlFor(news?.headerImg)}/>:"No Image "}
          </AccordionPanel>
          <AccordionPanel pb={4}>
          {news.heading2}
          </AccordionPanel>
          </Link>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MiddleNewsList;
