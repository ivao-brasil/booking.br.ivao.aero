import Link from 'next/link'
import { ApiClient } from "../clients/api.client";
import InlineLink from './InlineLink';

export default function Navbar() {
	const apiClient = new ApiClient();

	return (
		<div className="flex flex-wrap items-center justify-center md:justify-start shadow-md py-3 px-3">
			<Link href="/">
				<img src={apiClient.getMainLogo()} className="w-48 md:w-1/5" />
			</Link>
			<Link href="/event" passHref>
				<InlineLink>Event list</InlineLink>
			</Link>
			<div className="ml-auto">
				<Link href="/admin" passHref>
					<InlineLink>Admin panel</InlineLink>
				</Link>
				<Link href="/myBookings" passHref>
					<InlineLink>My Bookings (1 to confirm)</InlineLink>
				</Link>
			</div>
		</div>
	)
}
