export interface AnalyticsTracking {
    initialize: () => void;
    pageview: (pagePath: string) => void;
    modalview: (pagepath: string) => void;
    setDimension: <T>(dimension: T) => void;
}
