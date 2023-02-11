import { Input, InputRightElement, InputGroup } from "@chakra-ui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
    return (
        <InputGroup>
            <Input placeholder="Search..." />
            <InputRightElement
                children={
                    <MagnifyingGlassIcon
                        color={"green.500"}
                        width={10}
                        height={10}
                    />
                }
            />
        </InputGroup>
    );
}
