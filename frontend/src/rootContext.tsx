import { User } from "ivaobr-api-client";
import { createContext, PropsWithChildren, useContext, useState } from "react";


interface RootState {
	isAuthed: boolean
	userData?: User
	setIsAuthed: (value: boolean) => void
	setUserData: (userData: User) => void
}

const defaultState: RootState = {
	isAuthed: false,
	setIsAuthed: () => {},
	userData: undefined,
	setUserData: () => {}
}

const RootContext = createContext<RootState>(defaultState);

interface ProviderProps { }

export function ProvideRootContext({ children }: PropsWithChildren<ProviderProps>) {
	const [isAuthed, setIsAuthed] = useState(defaultState.isAuthed);
	const [userData, setUserData] = useState(defaultState.userData);

	const contextValues = {
		isAuthed,
		setIsAuthed,
		userData,
		setUserData
	}

	return (
		<RootContext.Provider value={contextValues}>{children}</RootContext.Provider>
	)
}

export function useRootContext() {
	return useContext(RootContext);
}
