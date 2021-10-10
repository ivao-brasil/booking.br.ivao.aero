import { Link } from "react-router-dom";
import { useRootContext } from "rootContext";
import { ApiClient } from "../clients/api.client";

export default function Navbar() {
	const apiClient = new ApiClient();
    const { userData } = useRootContext();

	return (
		<div className="flex flex-wrap items-center justify-center md:justify-start shadow-md py-3 px-3">
			<Link to="/">
				<img src={apiClient.getMainLogo()} alt="IVAO BR Logo" className="max-w-48 md:max-w-1/5" />
			</Link>
			<Link to="/event">Event list</Link>
			<div className="ml-auto">
				<Link className="mr-2" to="/myBookings">My Bookings (1 to confirm)</Link>
				{userData?.staff && <Link to="/admin">Admin panel</Link>}
			</div>
		</div>
	)
}
