/* eslint-disable react/prop-types */
/* eslint-disable no-sparse-arrays */
import { Divider, Spacer, Stack } from "@chakra-ui/layout";
import { RiDashboardLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { BiBasket } from "react-icons/bi";
import {
  HiOutlineCalendar,
  HiOutlineFolder,
} from "react-icons/hi";
import NavItem from "./nav-item";
import SectionDivider from "./section-divider";
import { FaIntercom, FaJira, FaSlack } from "react-icons/fa";
import IntegrationItem from "./integration-item";
import { FiPlus, FiPower, FiSettings } from "react-icons/fi";
import CollapsedItem from "./collapsed-item";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { routes, integrations } = getRoutesAndIntegrations();
  const isOpen = useSelector(state => state.sidebar.isOpen);
  
  const NavAction = isOpen ? CollapsedItem : NavItem;
  const IntegrationAction = isOpen ? CollapsedItem : IntegrationItem;

  return (
    <Stack
      layerStyle="card"
      rounded="xl"
      w={isOpen ? "60px" : "250px"}
      transition="width .4s ease-in-out"
      py={8}
      shadow="md"
      minH="full"
      spacing={2}
      fontSize="sm"
      display={["none", , "initial"]}
      overflowX={isOpen ? "initial" : "clip"}
      whiteSpace="nowrap"
    >
      {routes.map((props, rid) => (
        <NavAction
          key={`nav-item-${rid}`}
          active={window.location.pathname === props.href} // You may need to replace this line with your own routing logic
          {...props}
        />
      ))}
      {isOpen ? <Divider /> : <SectionDivider>Integrations</SectionDivider>}
      {integrations.map((props, iid) => (
        <IntegrationAction key={`int-item-${iid}`} {...props} />
      ))}
      <IntegrationAction name="Add new plugin" icon={FiPlus} scheme="purple" />
      <Spacer />
      <Divider display={{ md: "none" }} />
      <NavAction name="Settings" icon={FiSettings} />
      <NavAction name="Logout" icon={FiPower} />
    </Stack>
  );
};

export default Sidebar;

function getRoutesAndIntegrations() {
  const routes = [
    { name: "Dashboard", href: "/dashboard", icon: RiDashboardLine },
    { name: "Profile", href: "/dashboard/profile", icon: CiUser },
    { name: "Courier", href: "/dashboard/courier", icon: HiOutlineCalendar },
    { name: "Documents", href: "/documents", icon: HiOutlineFolder },
    { name: "Store", href: "/store", icon: BiBasket },
  ];

  const integrations = [
    {
      name: "Jira",
      scheme: "telegram",
      icon: FaJira,
    },
    {
      name: "Slack",
      scheme: "orange",
      icon: FaSlack,
    },
    {
      name: "Intercom",
      scheme: "blue",
      icon: FaIntercom,
    },
  ];

  return { routes, integrations };
}