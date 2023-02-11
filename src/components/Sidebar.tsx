import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Stack, Icon, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { HomeIcon } from "@heroicons/react/24/outline";

export interface MenuItems {
    icon: any;
    text: string;
    link: string;
    onClick: () => void;
}

interface Props {
    menuItems: Array<MenuItems>;
}

const Sidebar: React.FC<Props> = ({ menuItems }) => {
    const location = useLocation();

    return (
        <Box bg="gray.100" p={4} w="100%">
            <Stack spacing={4}>
                <List spacing={2}>
                    {menuItems.map((menuItem, index) => (
                        <ListItem key={index}>
                            <Flex align="center" onClick={menuItem.onClick}>
                                <Icon as={menuItem.icon} boxSize={4} />
                                <Link
                                    to={menuItem.link}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        color={
                                            location.pathname === menuItem.link
                                                ? "teal.500"
                                                : "white"
                                        }
                                        ml={2}
                                    >
                                        {menuItem.text}
                                    </Text>
                                </Link>
                            </Flex>
                        </ListItem>
                    ))}
                </List>
            </Stack>
        </Box>
    );
};

export default Sidebar;
