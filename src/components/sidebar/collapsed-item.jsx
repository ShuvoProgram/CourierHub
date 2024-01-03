/* eslint-disable react/prop-types */
import { IconButton } from "@chakra-ui/button";
import { Icon } from '@chakra-ui/react'
import { chakra } from "@chakra-ui/system";
import { Tooltip } from "@chakra-ui/tooltip";

const CollapsedItem = (props) => {
  return (
    <Tooltip hasArrow label={props.name} placement="right">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          colorScheme={props.active ? "brand" : props.scheme}
          aria-label={props.name}
          variant={props.active ? "solid" : "ghost"}
          boxSize="40px"
          alignSelf="center"
          _focus={{ shadow: "none" }}
          icon={
            <>
              {props.href ? (
                <a href={props.href}>
                  <Icon as={props.icon} fontSize="lg" />
                </a>
              ) : (
                <Icon as={props.icon} fontSize="lg" />
              )}
              {props.count && (
                <chakra.span
                  style={{
                    position: "absolute",
                    top: "-1px",
                    right: "-1px",
                    padding: "1px 2px",
                    fontSize: "xs",
                    fontWeight: "bold",
                    lineHeight: "none",
                    color: "pink.100",
                    transform: "translate(50%,-50%)",
                    backgroundColor: "pink.600",
                    borderRadius: "9999px",
                  }}
                >
                  {props.count}
                </chakra.span>
              )}
            </>
          }
        />
      </div>
    </Tooltip>
  );
};

export default CollapsedItem;
