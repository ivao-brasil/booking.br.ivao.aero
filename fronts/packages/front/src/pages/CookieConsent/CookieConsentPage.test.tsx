import { CookieConsentProvider } from 'context/CookieConsentContext';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from 'routes/AppRoutes';

beforeEach(() => {
    localStorage.clear();
});

afterEach(() => {
    localStorage.clear();
});

test("It shows the splash page, when the user answers the prompt", () => {
    render(
        <CookieConsentProvider>
            <MemoryRouter initialEntries={["/"]}>
                <AppRoutes />
            </MemoryRouter>
        </CookieConsentProvider>
    );

    userEvent.click(screen.getByText("Autorizar o uso"));

    expect(screen.getByText("Explorar itinerarios")).toBeInTheDocument();
});

test("It doesn't shows the prompt page, when the user has already answered", () => {
    localStorage.setItem("cookieConsent", "ACCEPTED");

    render(
        <CookieConsentProvider>
            <MemoryRouter initialEntries={["/"]}>
                <AppRoutes />
            </MemoryRouter>
        </CookieConsentProvider>
    );

    expect(screen.getByText("Explorar itinerarios")).toBeInTheDocument();
});

