import { LoadingIndicator } from "components/LoadingIndicator/LoadingIndicator";
import { useDivisions } from "hooks/useDivisions";
import { useText } from "hooks/useText";
import { Button } from "lib/components/ui/button";
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenu,
  DropdownMenuTrigger,
} from "lib/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import styles from "./EventsFilter.module.css";
import { FunctionComponent, useState } from "react";
import clsx from "clsx";

export const EventsFilter: FunctionComponent = () => {
  const { data: divisions, isLoading } = useDivisions();
  const { t } = useText();
  const [isOpen, setIsOpen] = useState(false)

  const [selectedDivisions, setSelectedDivisions] = useState<string[]>([])

  const handleDivisionToggle = (divisionId: string) => {
    setSelectedDivisions((prev:any) =>
      prev.includes(divisionId)
        ? prev.filter((id:string) => id !== divisionId)
        : [...prev, divisionId]
    )
    setTimeout(() => setIsOpen(true), 1);
  }


  return (
    <div className={clsx(styles.filtercontainer, "mb-4")}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild className="float-right">
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                {t('divisionsFilter.filterDivisions')} ({selectedDivisions.length})
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-light-gray-3 dark:bg-dark-gray-4 dark:text-white">
              <DropdownMenuLabel>{t('divisionsFilter.selectDivisions')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {divisions?.map((division) => (
                <DropdownMenuCheckboxItem
                  key={division.id}
                  checked={selectedDivisions.includes(division.id)}
                  onCheckedChange={() => handleDivisionToggle(division.id)}
                >
                  <div className="flex items-center gap-2">
                    {t(`divisions.${division.id}`)}
                  </div>
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </div>
  );
};
