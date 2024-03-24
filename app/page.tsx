'use client'
import Image from "./img/kit.jpg";
import Image2 from "./img/kit2.jpeg";
import Image3 from "./img/kit3.jpg";
import Image4 from "./img/kit4.jpg";

import {Queue} from "@/app/classes/Queue";


import {useState} from "react";
import StudentBlock from './components/StudentBlock' //TODO: fix
import {number} from "prop-types";

interface Yearbook {
    person: string;
    grade: number;
}
export default function Home() {
    const grades = [
        { grade: 'A', description: 'Excellent' },
        { grade: 'B', description: 'Very good' },
        { grade: 'C', description: 'Good' },
        { grade: 'D', description: 'Satisfactory' },
        { grade: 'E', description: 'Sufficient' },
        { grade: 'F', description: 'Unsatisfactory' }
    ]
    //const images = [Image, Image2, Image3, Image4]

    let getMarkInText = (mark: number) => {
        if (mark >= 95 && mark <= 100) {
            return grades[0].grade + ': ' + grades[0].description
        } else if (mark >= 85 && mark < 95) {
            return grades[1].grade + ': ' + grades[1].description
        } else if (mark >= 75 && mark < 85) {
            return grades[2].grade + ': ' + grades[2].description
        } else if (mark >= 65 && mark < 75) {
            return grades[3].grade + ': ' + grades[3].description
        } else if (mark >= 60 && mark < 65) {
            return grades[4].grade + ': ' + grades[4].description
        } else if (mark >= 0 && mark < 60) {
            return grades[5].grade + ': ' + grades[5].description
        }
    }

    let checkMark = (mark: number) => {
        if (mark < 0) {
            setMark(0)
            return false
        } else if (mark>100) {
            setMark(100)
            return false
        }
        return true
    }

    let validateInputMark = (mark:any) => {
        return !isNaN(mark);

    }
    let [mark, setMark] = useState<number>(0);
    let [name, setName] = useState<string>('')

    const [grades2024, setGrades2024] = useState(new Queue<Yearbook>());
    const [grades2023, setGrades2023] = useState(new Queue<Yearbook>());
    const [grades2022, setGrades2022] = useState(new Queue<Yearbook>());

    function addToBase(name: string, mark: number) {
        setGrades2024(oldGrades => {
            if (oldGrades.toArray().some(item => item.person === name)) {
                console.log(`Студент з ім'ям ${name} вже існує в черзі.`);
                return oldGrades;
            }

            let newGrades = new Queue<Yearbook>();
            oldGrades.toArray().forEach(item => newGrades.enqueue(item));
            newGrades.enqueue({ person: name, grade: mark });
            return newGrades;
        });
        console.log(grades2024.toArray())
    }


    function clearBase() {
        setGrades2024(new Queue<Yearbook>())
    }

    function compareGrades(queue1: Queue<Yearbook>, queue2: Queue<Yearbook>, queue3: Queue<Yearbook>) {
        let array1 = queue1.toArray();
        let array2 = queue2.toArray();
        let array3 = queue3.toArray();

        let commonPersons = array1.filter(item1 =>
            array2.some(item2 => item2.person === item1.person) &&
            array3.some(item3 => item3.person === item1.person)
        );

        commonPersons.forEach(person => {
            let grade1 = array1.find(item => item.person === person.person)?.grade;
            let grade2 = array2.find(item => item.person === person.person)?.grade;
            let grade3 = array3.find(item => item.person === person.person)?.grade;

            console.log(`Статистика зміни для ${person.person}:`);
            console.log(`2024: ${grade1}`);
            console.log(`2023: ${grade2}`);
            console.log(`2022: ${grade3}`);
        });
    }

    return (
        <>
            <div className="flex max-w-sm ml-auto mt-10 mb-0">
                <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mr-5" onClick={()=>{clearBase()}}>
                    Clear base
                </button>
                <select id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-250 p-2.5">

                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                </select>
            </div>


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
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{ diary.toArray().map(item =>*/}
                    {/*    // eslint-disable-next-line react/jsx-key*/}
                    {/*    <StudentBlock name={item.name} grade={item.grade}></StudentBlock>*/}
                    {/*) }*/}
                    </tbody>
                </table>
            </div>


            <div className="flex mx-auto w-11/12">
                <div className="max-w-lg mx-auto">
                    <label htmlFor="website-admin"
                           className="block mb-2 text-sm font-medium text-gray-900">Student`s name:</label>
                    <div className="flex">
    <span
        className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
      <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
           fill="currentColor" viewBox="0 0 20 20">
        <path
            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
      </svg>
    </span>
                        <input type="text" id="website-admin"
                               className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
                               placeholder="Harley Queen" value={name} onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^a-zA-Zа-яёА-ЯЁіІєЄїЇґҐ\s]/g, '') //TODO: fix
                        }} onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    </div>
                </div>


                <div className="flex">
                    <div className="max-w-xs mx-auto">
                        <label htmlFor="bedrooms-input" className="block mb-2 text-sm font-medium text-gray-900 ">Choose
                            grade:</label>
                        <div className="relative flex items-center w-60">
                            <button type="button" id="decrement-button" onClick={() => {
                                if (checkMark(mark - 1)) {
                                    setMark(mark - 1)
                                }
                            }} data-input-counter-decrement="bedrooms-input"
                                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 " aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M1 1h16"/>
                                </svg>
                            </button>
                            <input type="text" id="bedrooms-input" data-input-counter-min="1" min="0" max="100"
                                   data-input-counter-max="5" aria-describedby="helper-text-explanation"
                                   className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6"
                                   placeholder="" value={mark} onChange={(e) => {
                                if (checkMark(Number(e.target.value)) && validateInputMark(e.target.value)) {
                                    setMark(Number(e.target.value))
                                }
                            }}/>
                            <div
                                className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                                <svg className="w-2.5 h-2.5 text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 20 20">
                                </svg>
                                <span>{getMarkInText(mark)}</span>
                            </div>
                            <button type="button" id="increment-button" onClick={() => {
                                if (checkMark(mark + 1)) {
                                    setMark(mark + 1)
                                }
                            }} data-input-counter-increment="bedrooms-input"
                                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 " aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M9 1v16M1 9h16"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="pt-7 ml-3">
                        <button type="button" onClick={() => {
                            setMark(59)
                        }}
                                className="h-10 bg-red-700 hover:bg-red-800 px-4 py-2 text-sm font-medium text-white border rounded-s-lg ">
                            F
                        </button>
                        <button type="button" onClick={() => {
                            setMark(60)
                        }}
                                className="h-10 bg-orange-600 hover:bg-orange-700 px-4 py-2 text-sm font-medium text-white border-t border-b border-gray-200 ">
                            E
                        </button>
                        <button type="button" onClick={() => {
                            setMark(65)
                        }}
                                className="h-10 bg-yellow-500 hover:bg-yellow-700 px-4 py-2 text-sm font-medium text-white border-t border-b border-gray-200 ">
                            D
                        </button>
                        <button type="button" onClick={() => {
                            setMark(75)
                        }}
                                className="h-10 bg-lime-500 hover:bg-lime-600 px-4 py-2 text-sm font-medium text-white  border-t border-b border-gray-200  ">
                            C
                        </button>
                        <button type="button" onClick={() => {
                            setMark(85)
                        }}
                                className="h-10 bg-green-600 hover:bg-green-700 px-4 py-2 text-sm font-medium text-white  border-t border-b border-gray-200  ">
                            B
                        </button>
                        <button type="button" onClick={() => {
                            setMark(95)
                        }}
                                className="h-10 bg-emerald-800 hover:bg-emerald-900 px-4 py-2 text-sm font-medium text-white  border  rounded-e-lg">
                            A
                        </button>
                    </div>
                </div>
                <div className="mx-auto mt-7">
                    <button type="button" onClick={() => {
                        console.log(name, mark)
                        addToBase(name, mark)
                    }}
                            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Add
                        to base
                    </button>

                </div>
            </div>

        </>
    );
}

//TODO: Add button "посщитать"
//TODO: under the button add result field
//TODO: Add error show 
// func(Q<S>, string s)