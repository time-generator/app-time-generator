import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";

interface TableProps {
    data: Array<any>;
    column: Array<any>;
    caption?: string;
}

export default function DataTable({ data, column, caption }: any) {
    return (
        <TableContainer>
            <Table variant="simple">
                <TableCaption>{caption}</TableCaption>
                <Thead>
                    <Tr>
                        {column.map((item: any) => (
                            <Th>{item}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item: any) => (
                        <Tr>
                            {column.map((key: any) => (
                                <Td>{item[key]}</Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
