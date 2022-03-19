export interface AnalyticsTracking {
    initialize: (trackingId: string) => void;
    pageview: (pagePath: string) => void;
    modalview: (pagepath: string) => void;
    setDimension: <T>(dimension: T) => void;
}
