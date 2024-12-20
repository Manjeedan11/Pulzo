import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";

function SortDropDown(props) {
  return (
    <div className="mt-0">
      <DropdownMenu>
        <DropdownMenuTrigger className="border border-[#edeef1] px-2 py-1 rounded-md flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <span>Sort</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => props.onSort("ASC")}>
            Price : low to high
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => props.onSort("DESC")}>
            Price : high to low
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SortDropDown;
