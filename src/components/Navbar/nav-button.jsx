/* eslint-disable no-unused-vars */
import React from "react";
import { IconButton, Icon } from "@chakra-ui/react";
import { CgClose, CgMenu } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../../redux/actions";

const NavButton = (props) => {
  const dispatch = useDispatch();

  const isOpen = useSelector(state => state.sidebar.isOpen);

  const icon = isOpen ? CgMenu : CgClose;

  const handleSidebarToggle = () => {
    if (isOpen) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };

  return (
    <IconButton
      colorScheme="teal"
      variant="ghost"
      fontSize="2xl"
      aria-label="Toggle Actions"
      icon={<Icon as={icon} />}
      transition="all .4s ease-in-out"
      onClick={handleSidebarToggle}
    />
  );
};

export default NavButton;