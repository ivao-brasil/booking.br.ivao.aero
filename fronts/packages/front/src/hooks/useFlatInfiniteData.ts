import { useMemo } from "react";
import { InfiniteData } from "react-query";
import { Pagination } from "types/Pagination";

export const useFlatInfiniteData = <T>(data: InfiniteData<Pagination<T>> | undefined) => {
    return useMemo(() => {
        if (!data) {
            return null;
        }

        const allPagesData = data.pages.map(page => page.data.map((pageItem: T) => pageItem));
        return ([] as T[]).concat(...allPagesData);
    }, [data]);
}