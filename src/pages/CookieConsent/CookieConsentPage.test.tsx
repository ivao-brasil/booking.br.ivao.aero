import { CookieConsentProvider } from 'context/CookieConsentContext';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from 'routes/AppRoutes';

beforeEach(() => {
    localStorage.clear();
});

afterEach(() => {
    localStorage.clear();
});

test("It shows the splash page, when the user answers the prompt", async () => {
    render(
        <CookieConsentProvider>
            <MemoryRouter initialEntries={["/"]}>
                <AppRoutes />
            </MemoryRouter>
        </CookieConsentProvider>
    );

    await waitFor(() => screen.getByText("Autorizar o uso"));

    userEvent.click(screen.getByText("Autorizar o uso"));

    expect(screen.getByText("Explorar itinerarios")).toBeInTheDocument();
});

test("It doesn't shows the prompt page, when the user has already answered", async () => {
    localStorage.setItem("cookieConsent", "ACCEPTED");

    render(
        <CookieConsentProvider>
            <MemoryRouter initialEntries={["/"]}>
                <AppRoutes />
            </MemoryRouter>
        </CookieConsentProvider>
    );

    await waitFor(() => screen.getByText("Explorar itinerarios"));

    expect(screen.getByText("Explorar itinerarios")).toBeInTheDocument();
});

