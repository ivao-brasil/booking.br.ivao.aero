import { useContext } from "react";
import { IocContext } from "context/IocContext";
import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { ONE_MONTH } from "appConstants";
import { AirportDetails } from "types/AirportDetails";

export function useAirportDetails(icao: string) {
    const { apiClient } = useContext(IocContext);

    const airportDetails = useQuery<AirportDetails, AxiosError>(
        ["airport", icao],
        async () => await apiClient.getAirportDetails(icao),
        {
            staleTime: ONE_MONTH
        }
    );

    return airportDetails;
}
