import {Queue} from "@/app/classes/Queue";
import {number} from "prop-types";
import StudentBlock from "@/app/components/StudentBlock";

interface Yearbook {
    person: string;
    grade: number;
}
type StudentBaseProps = {
    base: Queue<Yearbook>;
}
// @ts-ignore
export default function StudentBase({base})  {
    return (
        <div className="w-9/12 mx-auto mt-10 mb-40 text-center relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Student`s name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Grade
                    </th>
                </tr>
                </thead>
                <tbody>
                {base.toArray().map(item =>
                    // eslint-disable-next-line react/jsx-key
                    <StudentBlock name={item.person} grade={item.grade}></StudentBlock>
                )}
                </tbody>
            </table>
        </div>
    )
}
