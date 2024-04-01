interface Yearbook {
    group: string,
    person: string;
    grade: number;
}


interface DataPoint {
    year: string
    average: number
}

interface ChartProps {
    data: DataPoint[]
}


