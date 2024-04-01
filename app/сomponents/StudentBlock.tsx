interface Yearbook {
    person: string;
    grade: number;
}
type StudentProps = {
    id: number,
    name: string,
    grade: number,
}
export default function StudentBlock (props:StudentProps) {
    let createStack = (n: number) => {
        const descendingNumbers = Array.from({ length: n }, (_, i) => (n - i).toString());
        return descendingNumbers.join(", ");
    }
    return (
        <tr className="bg-white border-b ">
            <td className="px-6 py-3">
                #{props.id}
            </td>
            <th scope="row"
                className="flex items-center px-6 py-4 pt-6 font-medium text-gray-900 whitespace-nowrap">
                {props.name}
            </th>
            <td className="px-6 py-4">
                {props.grade}/100
            </td>
            <td className="px-6 py-4 text-xs">
                Додано роботу #{props.id} <br/>
                Стопка робіт - {createStack(props.id)}
            </td>
        </tr>
    )
}
