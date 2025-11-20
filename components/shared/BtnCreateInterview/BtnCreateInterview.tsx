import { Headset } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FormCreateInterview } from "./FormCreateInterview";

export function BtnCreateInterview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-linear-to-r from-purple-600 to-blue-600 font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
          Create new interview
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center text-purple-400">
            Start interview
            <Headset />
          </DialogTitle>
          <FormCreateInterview />
          {/* <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription> */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
