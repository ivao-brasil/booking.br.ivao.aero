import './App.css';

import { lazy, Suspense, useCallback, useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthApi } from "ivaobr-api-client";
import Home from 'routes/Home';
import { useUrlQuery } from 'hooks/useUrlQuery';
import { useRootContext } from 'rootContext';
import { ENV } from "./env";

const AdminPanel = lazy(() => import("./routes/admin/AdminRouter"))

interface AppParams {
    IVAOTOKEN?: string;
}

function App() {
    const { IVAOTOKEN } = useUrlQuery<AppParams>();
    const { isAuthed, setIsAuthed, setUserData } = useRootContext();
    const authAPI = useMemo(() => new AuthApi({ apiKey: ENV.API_KEY }), []);

    const checkIfIsAuthed = useCallback(async () => {
        const jwt = localStorage.getItem('jwt');
        try {
            const userData = await authAPI.authGet({ headers: { Authorization: `Bearer ${jwt}` } });
            setUserData(userData.data);
            return true;
        } catch (err) {
            return false;
        }
    }, [authAPI, setUserData]);

    const doAuth = useCallback(async (ivaoToken: string) => {
        return authAPI.authPost({ ivaoToken }).then((response) => {
            localStorage.setItem('jwt', response.data.token);
        });
    }, [authAPI]);

    useEffect(() => {
        async function validateAuth() {
            if (!IVAOTOKEN && !isAuthed) {
                const isAuthed = await checkIfIsAuthed();
                setIsAuthed(isAuthed);

                if (!isAuthed) {
                    const newUrl = `https://login.ivao.aero/index.php?url=${document.location.href}`;
                    window.location.replace(newUrl);
                }
            } else if (IVAOTOKEN) {
                await doAuth(IVAOTOKEN);
                document.location.replace('/');
            }
        }

        validateAuth();
    }, [IVAOTOKEN, isAuthed, checkIfIsAuthed, setIsAuthed, doAuth]);

    if (isAuthed) {
        return (
            <BrowserRouter>
                <Suspense fallback={<p>Fallback...</p>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/admin" component={AdminPanel} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        );
    } else {
        return null;
    }
}

export default App;
