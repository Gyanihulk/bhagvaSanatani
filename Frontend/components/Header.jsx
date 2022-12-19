import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = ({ category,header }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        zIndex={"overlay"}
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme="purple"
        p={"0"}
        w={"10"}
        h={"10"}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Bhagwa Sanatan Times</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              {category.map((link) => (
                <Button
                  key={link.name}
                  onClick={onClose}
                  variant={"ghost"}
                  colorScheme={"purple"}
                >
                  {link.name}
                </Button>
              ))}
            </VStack>

            <HStack
              pos={"absolute"}
              bottom={"10"}
              left={"0"}
              w={"full"}
              justifyContent={"space-evenly"}
            >
              <Button onClick={onClose} colorScheme={"purple"}>
                <Link href={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={"purple"}
                variant={"outline"}
              >
                <Link href={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
