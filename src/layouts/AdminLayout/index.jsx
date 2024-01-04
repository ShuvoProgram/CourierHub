/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-sparse-arrays */
import { Box, Stack } from "@chakra-ui/layout";
import React, { createContext } from "react";
import { useDisclosure} from "@chakra-ui/hooks";
import { useMediaQuery } from "@chakra-ui/media-query";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/sidebar";
import MobileSidebar from "../../components/sidebar/mobile";
import { Outlet } from "react-router-dom";

export const NavContext = createContext(false);

const AdminLayout = ({ children }) => {
  const sidebarState = useDisclosure();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <NavContext.Provider value={sidebarState}>
      <Box textStyle="light" w="full">
        <Navbar />
        <Box pos="relative" h="max-content" m={[2, , 5]}>
          <Stack direction="row" spacing={{ md: 5 }}>
            <Sidebar />
            {/* {isSmallScreen && <MobileSidebar />} */}
            <Outlet/>
          </Stack>
        </Box>
      </Box>
    </NavContext.Provider>
  );
};

export default AdminLayout;
