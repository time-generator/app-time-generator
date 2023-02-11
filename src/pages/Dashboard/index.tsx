import {
    Box,
    Flex,
    Input,
    Image,
    InputGroup,
    InputLeftElement,
    Select,
    Stack,
    Button,
    Editable,
    EditablePreview,
    EditableInput,
} from "@chakra-ui/react";
import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";
import MyBreadcrumb from "../../components/BreadCrumb";
import EditableControls from "../../components/CustomControl";
import CustomControl from "../../components/CustomControl";
import DateTimePicker from "../../components/DateTimePicker";
import KeywordPopover from "../../components/KeywordPopover";
import { LineChart2 } from "../../components/LineChart2";
import Sidebar, { MenuItems } from "../../components/Sidebar";
import DataTable from "../../components/Table";

export default function Dashboard() {
    const menuItems: Array<MenuItems> = [
        {
            icon: UserIcon,
            link: "",
            text: "Menu1",
            onClick: () => {},
        },
    ];
    return (
        <div>
            <MyBreadcrumb />
            <Flex gap={2}>
                <Box w="256px">
                    <InputGroup>
                        <InputLeftElement>
                            <MagnifyingGlassIcon width={20} height={20} />
                        </InputLeftElement>
                        <Input placeholder="Search campaign" />
                    </InputGroup>
                    <Sidebar menuItems={menuItems} />
                </Box>
                <Box>
                    <Stack>
                        <Box>
                            <Image
                                boxSize={"150px"}
                                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c32df5b17c164bc7a950af8000d3af10_9366/THE_ROAD_CYCLING_SHOE_2.0_Black_HQ6717_01_standard.jpg"
                                alt="Shoe Product"
                                objectFit={"cover"}
                            />
                        </Box>
                        <Box></Box>
                    </Stack>
                </Box>
                <Box flexGrow={1}>
                    <Flex>
                        <Box marginLeft="auto">
                            <Stack direction={"row"}>
                                <Select>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </Select>
                                <DateTimePicker
                                    label="Select date range"
                                    onChange={() => {}}
                                />
                            </Stack>
                        </Box>
                    </Flex>
                    <Box>
                        <LineChart2 />
                    </Box>
                </Box>
            </Flex>
            <DataTable
                column={["keyword", "sale", "spend", "cpc", "acos", "bid"]}
                data={[
                    {
                        keyword: (
                            <span>
                                String <KeywordPopover />
                            </span>
                        ),
                        sale: "string",
                        spend: "string",
                        cpc: "string",
                        acos: "string",
                        bid: (
                            <Editable
                                textAlign="center"
                                defaultValue="123"
                                isPreviewFocusable={false}
                            >
                                <Stack direction={"row"}>
                                    <EditablePreview />
                                    {/* Here is the custom input */}
                                    <Input as={EditableInput} width={"50px"} />
                                    <EditableControls />
                                </Stack>
                            </Editable>
                        ),
                    },
                ]}
            />
        </div>
    );
}
