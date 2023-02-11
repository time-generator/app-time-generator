import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function Root() {
    return (
        <Box>
            <NavBar />
            <Box maxW={1200} marginX="auto">
                <Outlet />
            </Box>
        </Box>
    );
}
