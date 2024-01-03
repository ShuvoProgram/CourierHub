/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-sparse-arrays */
import { Box, Stack } from "@chakra-ui/layout";
import React, { createContext } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useMediaQuery } from "@chakra-ui/media-query";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/sidebar";
import MobileSidebar from "../../components/sidebar/mobile";

export const NavContext = createContext(null);

const AdminLayout = ({ children }) => {
  const sidebarState = useDisclosure();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <NavContext.Provider value={sidebarState}>
      <Box textStyle="light">
        <Navbar />
        <Box pos="relative" h="max-content" m={[2, , 5]}>
          <Stack direction="row" spacing={{ md: 5 }}>
            <Sidebar />
            {isSmallScreen && <MobileSidebar />}
            
          </Stack>
        </Box>
      </Box>
    </NavContext.Provider>
  );
};

export default AdminLayout;
