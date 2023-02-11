import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterObjects from "./routers";
import chakraTheme from "@chakra-ui/theme";

const router = createBrowserRouter(RouterObjects);

const { Button, Menu, Input, Table, Select } = chakraTheme.components;

const theme = extendBaseTheme({
    components: {
        Button,
        Select,
        Menu,
        Input,
        Table,
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraBaseProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraBaseProvider>
    </React.StrictMode>
);
