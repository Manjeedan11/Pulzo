import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Bell } from "lucide-react";

function NotificationPopOver() {
  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <button className="p-2 rounded-full">
            <Bell className="w-6 h-6 text-gray-800" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-4 shadow-md bg-white rounded-md">
          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-semibold">Notifications</h4>
            <div className="space-y-4">
              <div className="p-3 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-800">
                  Flash Sale on Smartphones ends in 2 hours!
                </p>
              </div>
              <div className="p-3 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-800">
                  Exclusive deal on Headphones for today only!
                </p>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default NotificationPopOver;
