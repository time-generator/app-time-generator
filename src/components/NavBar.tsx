import React, { useState } from "react";
import {
    Flex,
    Box,
    Input,
    IconButton,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import {
    MagnifyingGlassIcon,
    BellIcon,
    Bars3Icon,
    UserIcon,
} from "@heroicons/react/24/outline";

interface Props {}

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box>
            <Menu>
                <MenuButton
                    as={IconButton}
                    icon={<UserIcon />}
                    onClick={() => setIsOpen(!isOpen)}
                />
                <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};

const SearchBar = () => {
    return (
        <Box>
            <Input placeholder="Search..." />
        </Box>
    );
};

const NotificationDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box>
            <Menu>
                <MenuButton
                    as={IconButton}
                    icon={<BellIcon />}
                    onClick={() => setIsOpen(!isOpen)}
                />
                <MenuList>
                    <MenuItem>Notification 1</MenuItem>
                    <MenuItem>Notification 2</MenuItem>
                    <MenuItem>Notification 3</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};

const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box>
            <Menu>
                <MenuButton
                    as={IconButton}
                    icon={<Bars3Icon />}
                    onClick={() => setIsOpen(!isOpen)}
                />
                <MenuList>
                    <MenuItem>Menu 1</MenuItem>
                    <MenuItem>Menu 2</MenuItem>
                    <MenuItem>Menu 3</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};

const Navbar: React.FC<Props> = () => {
    return (
        <Flex
            px={4}
            py={2}
            bg="gray.800"
            color="white"
            justifyContent="space-between"
        >
            <Box>
                <Flex>
                    <MenuDropdown />
                    <SearchBar />
                </Flex>
            </Box>
            <Flex>
                <NotificationDropdown />
                <ProfileDropdown />
            </Flex>
        </Flex>
    );
};

export default Navbar;
