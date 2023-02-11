import * as d3 from "d3";
import React, { useEffect } from "react";
import { DataPoint, DataSeries } from "../interfaces/data";

interface LineChartProps {
    svgRef: React.RefObject<SVGSVGElement>;
    data: DataSeries[];
    xAccessor: (point: DataPoint) => number | Date;
    yAccessor: (point: DataPoint) => number;
}

export class LineChart {
    svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>;
    data: DataSeries[];
    xAccessor: (point: DataPoint) => number | Date;
    yAccessor: (point: DataPoint) => number;

    constructor(
        svgRef: React.RefObject<SVGSVGElement>,
        data: DataSeries[],
        xAccessor: (point: DataPoint) => number | Date,
        yAccessor: (point: DataPoint) => number
    ) {
        this.svg = d3.select(svgRef.current);
        this.data = data;
        this.xAccessor = xAccessor;
        this.yAccessor = yAccessor;
    }

    draw() {
        this.svg.selectAll("*").remove();

        const xScale = d3
            .scaleTime()
            .domain(
                d3.extent(this.data[0].points, this.xAccessor) as [
                    number | Date,
                    number | Date
                ]
            )
            .range([0, Number(this.svg.attr("width"))]);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(this.data[0].points, this.yAccessor) as number])
            .range([Number(this.svg.attr("height")), 0]);

        const lineGenerator = d3
            .line<DataPoint>()
            .x((d) => xScale(this.xAccessor(d)))
            .y((d) => yScale(this.yAccessor(d)));

        this.data.forEach((series) => {
            this.svg
                .append("path")
                .datum(series.points)
                .attr("fill", "none")
                .attr("stroke", series.color || "#000")
                .attr("d", lineGenerator);
        });
    }
}

const LineChartComponent: React.FC<LineChartProps> = ({
    svgRef,
    data,
    xAccessor,
    yAccessor,
}) => {
    useEffect(() => {
        if (!svgRef.current) return;

        const lineChart = new LineChart(svgRef, data, xAccessor, yAccessor);
        lineChart.draw();
    }, [data, xAccessor, yAccessor, svgRef]);

    return null;
};

export default LineChartComponent;
