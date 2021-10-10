import { lazy } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

const AdminHome = lazy(() => import("./AdminHome"))
const EventList = lazy(() => import("./event/EventList"))
const EventModify = lazy(() => import("./event/EventModify"))

export default function AdminRouter() {
	const { path } = useRouteMatch()

	return (
		<Switch>
			<Route exact path={path} component={AdminHome}/>
			<Route exact path={`${path}/event`} component={EventList}/>
			<Route path={`${path}/event/:id`} component={EventModify}/>
		</Switch>
	)
}
