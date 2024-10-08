'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GrAdd } from "react-icons/gr";
import { DatePicker } from "./DatePicker";
import { useLogStore } from "@/store";
import { useToast } from "@/components/ui/use-toast"
import  dayjs  from "dayjs"


export function NewLog() {
  
  const log = useLogStore((state) => state.log)
  const setLog = useLogStore((state) => state.setLog)
  const setLogs = useLogStore((state) => state.setLogs)

  const { toast } = useToast()

  const closeDialog = () => {
    document.getElementById("close-btn")?.click()
  }

    const validateLog = () => {
        if(!log.note || log.hour===0 || !log.date){
            throw 'Fields can not be empty.'
        }else if(log.hour < 0){
            throw 'Hour can not be negative.'
        }else if(log.hour >= 24){
            throw 'Hour can not be greater than or equal to 24.'
        }

    }

    const submitLog = () => {
        try {
            validateLog();
            setLogs(log, dayjs(log.date).format("YYYY-MM-DD"))
            toast({

              title: "Successfully created log",
              description: `${log.hour} hour on ${log.date}`,
            })

            closeDialog()

            // call to supabase
            
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Failed to create log",
                description: error as string,
            })
        }   
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full sm:w-72 border-dashed border-2 py-3 flex items-center justify-center rounded-md cursor-pointer hover:border-solid">
            <GrAdd />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Log</DialogTitle>
          <DialogDescription>
            {
                "Remember, time is your most valuable asset. Invest it wisely with the help of your log."
            }
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-center">
              Date
            </Label>
            <DatePicker />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hour" className="text-center">
              Hour
            </Label>
            <Input
              id="hour"
              type="number"
              className="col-span-3"
              value={log.hour}
              onChange={(e) => setLog({ ...log, hour: Number(e.target.value) })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-center">
              Note
            </Label>
            <Input
              id="note"
              placeholder="note for the log"
              className="col-span-3"
              value={log.note}
              onChange={(e) => setLog({ ...log, note: e.target.value })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={submitLog}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
