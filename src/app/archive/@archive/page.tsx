import React from "react";
import { getExpenseMonth } from "../../../../lib/sequenceTime";
import Link from "next/link";
import { MonthExpenseNav } from "@/components/MonthExpense";


export default function ArchievePage(){
    const months:string[] = getExpenseMonth();
    return(
        <React.Fragment>
            <MonthExpenseNav months={months} />
        </React.Fragment>
    )
}