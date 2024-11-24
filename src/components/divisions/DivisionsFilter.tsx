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
import { FunctionComponent } from "react";

export const DivisionsFilter: FunctionComponent = () => {
  const { data: divisions, isLoading } = useDivisions();
  const selectedDivisions: string[] = [];
  const { t } = useText();

  const handleDivisionToggle = (divisionId: string) => {
    if (selectedDivisions.includes(divisionId)) {
      selectedDivisions.splice(selectedDivisions.indexOf(divisionId), 1);
    } else {
      selectedDivisions.push(divisionId);
    }
  };

  return (
    <div>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                {t('divisionsFilter.filterDivisions')} ({selectedDivisions.length})
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
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
