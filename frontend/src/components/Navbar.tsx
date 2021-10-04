import { Link } from "react-router-dom";
import { ApiClient } from "../clients/api.client";
import InlineLink from './InlineLink';

export default function Navbar() {
	const apiClient = new ApiClient();

	return (
		<div className="flex flex-wrap items-center justify-center md:justify-start shadow-md py-3 px-3">
			<Link to="/">
				<img src={apiClient.getMainLogo()} className="w-48 md:w-1/5" />
			</Link>
			<Link to="/event">Event list</Link>
			<div className="ml-auto">
				<Link to="/admin">Admin panel</Link>
				<Link to="/myBookings">My Bookings (1 to confirm)</Link>
			</div>
		</div>
	)
}
