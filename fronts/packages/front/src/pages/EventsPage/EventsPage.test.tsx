import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

import { IocProvider } from 'context/IocContext';
import { AppRoutes } from 'routes/AppRoutes';
import { AuthContext } from 'context/AuthContext';
import testData from "mocks/data/TestEvents";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            cacheTime: Infinity
        },
    },
});

const queryCache = new QueryCache();
afterEach(() => { queryCache.clear() });

test("It should show all available events in API", async () => {
    render(
        <IocProvider>
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={["/events"]}>
                    <AuthContext.Provider value={{ signed: true, token: "abc", signIn: (_) => Promise.reject(), signOut: () => {}, refreshToken: () => {}  }}>
                        <AppRoutes />
                    </AuthContext.Provider>
                </MemoryRouter>
            </QueryClientProvider>
        </IocProvider>
    );

    await waitFor(() => screen.getByText(testData[0].eventName));

    testData.forEach((testEvent) => {
        expect(screen.getByText(testEvent.eventName)).toBeInTheDocument();
    });
});