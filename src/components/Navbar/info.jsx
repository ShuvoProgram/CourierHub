import { Stack} from "@chakra-ui/layout";
import Logo from "../../assets/corierHub_logo.png";

const Info = (props) => {
  return (
    <Stack direction="row" alignItems="center" {...props}>
      <img src={Logo} alt="Courier Hub" className="w-56"/>
    </Stack>
  );
};

export default Info;
