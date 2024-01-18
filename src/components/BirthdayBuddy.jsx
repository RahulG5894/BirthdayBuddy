import { useState } from "react";
import data from "../data";
import Birthday from "./Birthday";
const BirthdayBuddy = () => {
    const [birthdayList, setBirthdayList] = useState(data);

    return <>
        <h3>{birthdayList.length} Birthdays Today</h3>
        {
            birthdayList.map((person) => {
                return <Birthday key={person.id} {...person} />
            })
        }
        <button type="button" onClick={()=>{setBirthdayList([])}}>Clear All</button>
    </>
}
export default BirthdayBuddy;