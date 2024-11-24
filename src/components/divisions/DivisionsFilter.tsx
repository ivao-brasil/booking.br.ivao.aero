import { useDivisions } from "hooks/useDivisions";
import { FunctionComponent } from "react";

export const DivisionsFilter:FunctionComponent = () => {
  const {data: divisions, isLoading} = useDivisions();
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Divisions Filter</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-12 xl:gap-24 items-center md:items-start flex-wrap">
            {divisions?.map((division) => (
              <button>
                <img
                src={division.logoUrl}
                alt="Division Name"
                height="100px"
                width="100px" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
