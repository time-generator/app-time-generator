import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
} from "@chakra-ui/react";

export default function KeywordPopover() {
    return (
        <Popover placement="right">
            <PopoverTrigger>
                <Button>View</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Confirmation!</PopoverHeader>
                <PopoverBody>
                    Are you sure you want to have that milkshake?
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}
