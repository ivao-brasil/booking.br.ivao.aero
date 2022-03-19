export interface ApiError {
    code: number;
    message: string;
}

export interface ApiErrorResponse {
    error: ApiError
}
