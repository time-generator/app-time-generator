export interface DataPoint {
    x: number | Date;
    y: number;
}

export interface DataSeries {
    points: DataPoint[];
    label: string;
    color?: string;
}

export type XAccessor = (d: DataPoint) => number | Date;

export type YAccessor = (d: DataPoint) => number;
