import Image from 'next/image'



type StudentProps = {
    name: string,
    grade: number,
    image: HTMLImageElement
}
export default function StudentBlock (props:StudentProps) {

    return (
        <tr className="bg-white border-b ">
            <th scope="row"
                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <Image src={props.image} className="w-10 mr-2 h-10 rounded" alt="Мое изображение" width={500} height={300} />

                {props.name}
            </th>
            <td className="px-6 py-4">
                {props.grade}/100
            </td>
            <td className="">

            </td>
        </tr>
    )
}
