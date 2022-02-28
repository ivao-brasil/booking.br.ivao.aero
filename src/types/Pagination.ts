export interface Pagination<T> {
    page: number;
    data: Array<T>;
    perPage: number;
    total: number;
}
