/* eslint-disable no-unused-vars */
import React, { useContext, createContext } from "react";
import { IconButton, Icon } from "@chakra-ui/react";
import { CgClose, CgMenu } from "react-icons/cg";

export const NavContext = createContext(null);

const NavButton = (props) => {
  const { onToggle, isOpen } = useContext(NavContext);
  const icon = isOpen ? CgMenu : CgClose;
  return (
    <IconButton
      colorScheme="brand"
      variant="ghost"
      fontSize="2xl"
      aria-label="Toggle Actions"
      icon={<Icon as={icon} />}
      transition="all .4s ease-in-out"
      onClick={onToggle}
    />
  );
};

export default NavButton;