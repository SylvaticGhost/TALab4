import {Stack} from "@/app/classes/Stack";
import {number} from "prop-types";
import StudentBlock from "@/app/components/StudentBlock";

interface Yearbook {
    person: string;
    grade: number;
}
type StudentBaseProps = {
    base: Stack<Yearbook>;
}
// @ts-ignore
export default function StudentBase({base})  {
    return (
        <div className="w-9/12 mx-auto mt-10 mb-40 text-center relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Student`s name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Grade
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Stack
                    </th>
                </tr>
                </thead>
                <tbody>
                {base.toArray().map((item: { group:string, person: string; grade: number; }, index: number) =>
                    // eslint-disable-next-line react/jsx-key
                    <StudentBlock name={item.group + ' ' + item.person} grade={item.grade} id={index+1}></StudentBlock>
                )}
                </tbody>
            </table>
        </div>
    )
}
