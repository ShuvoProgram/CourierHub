/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-sparse-arrays */
import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/sidebar";
import MobileSidebar from "../../components/sidebar/mobile";
import { Outlet } from "react-router-dom";


const AdminLayout = () => {

  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <Box textStyle="light">
    <Navbar />
    <Box pos="relative" h="max-content" m={[2, , 5]}>
      <Stack direction="row" spacing={{ md: 5 }}>
        <Sidebar />
        {/* {isSmallScreen && <MobileSidebar />} */}
        <Outlet/>
      </Stack>
    </Box>
  </Box>
  );
};

export default AdminLayout;
