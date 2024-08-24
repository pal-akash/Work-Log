import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

function Logs() {
  return (
    <div>
        <Table>
            <TableCaption>List of logs</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className='w-1/3'>Date</TableHead>
                <TableHead className='w-1/3'>Hours</TableHead>
                <TableHead className='w-1/3'>Note</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium">{new Date().toDateString()}</TableCell>
                <TableCell>10</TableCell>
                <TableCell>Note</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    </div>
  )
}

export default Logs