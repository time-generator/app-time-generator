import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    IconButton,
} from "@chakra-ui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function MenuDropdown() {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                icon={<Bars3Icon />}
                aria-label="Menu"
                variant="outline"
            ></MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    );
}
