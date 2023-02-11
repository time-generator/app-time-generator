import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Box, Select, Stack, useDisclosure } from "@chakra-ui/react";
import { DataPoint, DataSeries } from "../interfaces/data";
import { LineChart } from "./LineChart";

interface ChartProps {
    kind: "line" | "bar";
    width: number;
    height: number;
    data: DataSeries[];
    xAccessor: (point: DataPoint) => any;
    yAccessor: (point: DataPoint) => number;
}

const Chart: React.FC<ChartProps> = ({
    kind,
    width,
    height,
    data,
    xAccessor,
    yAccessor,
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (!svgRef.current) return;

        if (kind === "line") {
            const lineChart = new LineChart(svgRef, data, xAccessor, yAccessor);
            lineChart.draw();
        }
    }, [kind, data, xAccessor, yAccessor]);

    return (
        <Box>
            <Stack isInline spacing={4}>
                <Select defaultValue={kind} onChange={onOpen}>
                    <option value="line">Line Chart</option>
                    <option value="bar">Bar Chart</option>
                </Select>
                {isOpen && (
                    <Select defaultValue={kind} onChange={onClose}>
                        <option value="line">Line Chart</option>
                        <option value="bar">Bar Chart</option>
                    </Select>
                )}
            </Stack>
            <Box width={width} height={height}>
                <svg ref={svgRef} />
            </Box>
        </Box>
    );
};

export default Chart;
