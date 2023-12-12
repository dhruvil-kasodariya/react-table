import {format} from "date-fns"
import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS=[
    {
        Header:"Id",
        Footer:"Id",
        accessor:"id",
        // Filter:ColumnFilter,
        disableFilters:true,
        sticky:'left'
    },
    {
        Header:"First Name",
        Footer:"First Name",
        accessor:"first_name",
        // Filter:ColumnFilter,
 
    },
    {
        Header:"Last Name",
        Footer:"Last Name",
        accessor:"last_name",
        // Filter:ColumnFilter,
    
    },
    {
        Header:"Date of Birth",
        Footer:"Date of Birth",
        accessor:"date_of_birth",
        Cell:({value})=>{return format(new Date(value),'dd/MM/yyyy')},
        sortType:(rowA, rowB, columnId) => {
            const dateA = new Date(rowA.original.date_of_birth);
            const dateB = new Date(rowB.original.date_of_birth);
    
            if (dateA < dateB) return -1;
            if (dateA > dateB) return 1;
            return 0;
        },
        // Filter:ColumnFilter
    },
    {
        Header:"Country",
        Footer:"Country",
        accessor:"country",
        // Filter:ColumnFilter
    },
    {
        Header:"Phone",
        Footer:"Phone",
        accessor:"phone",
        // Filter:ColumnFilter
    },
    {
        Header:"Email",
        Footer:"Email",
        accessor:"email",
        // Filter:ColumnFilter
    },
    {
        Header:"Age",
        Footer:"Age",
        accessor:"age",
        // Filter:ColumnFilter
    },
]

export const GROUPED_COLUMNS=[
    {
        Header:"Id",
        Footer:"Id",
        accessor:"id" 
    },
    { 
        Header:"Name",
        Footer:"Name",
        columns:[
            {
                Header:"First Name",
                Footer:"First Name",
                accessor:"first_name"
            },
            {
                Header:"Last Name",
                Footer:"Last Name",
                accessor:"last_name"
            }, 
        ]
    },
    {
        Header:"Info",
        Footer:"Info",
        columns:[
            {
                Header:"Date of Birth",
                Footer:"Date of Birth",
                accessor:"date_of_birth"
            },
            {
                Header:"Country",
                Footer:"Country",
                accessor:"country"
            },
            {
                Header:"Phone",
                Footer:"Phone",
                accessor:"phone"
            },
        ]
    }
]