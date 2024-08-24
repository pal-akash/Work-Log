import React from 'react'
import dayjs from 'dayjs'

function Calendar() {

    function getDateinMonth(year = dayjs().year(), month = dayjs().month()){
        const startDate = dayjs().year(year).month(month).date(1)
        const endDate = startDate.endOf('month')

        const datesArray = [];

        for(let i = startDate.date(); i <= endDate.date(); i++){
            datesArray.push(startDate.date(i).format('YYYY-MM-DD'))
        }

        return datesArray
    }

  return (
    <div className='border border-dashed flex flex-wrap gap-2 p-5 justify-center rounded-md'>
        {getDateinMonth().map((value, index) => {
            return <div className='h-5 w-5 bg-gray-100 rounded-sm' key={index}></div>
        })}
    </div>
  )
}

export default Calendar