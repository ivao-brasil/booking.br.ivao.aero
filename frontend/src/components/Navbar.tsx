import Link from 'next/link'
import { ApiClient } from "../clients/api.client";

export default function Navbar() {
	const apiClient = new ApiClient();

	return (
		<div className="flex flex-wrap items-center justify-center md:justify-start shadow-md py-3 px-3">
			<img src={apiClient.getMainLogo()} className="w-48 md:w-1/5" />
			<Link href="/event" passHref>
				<a className="hover:underline">Event list</a>
			</Link>
		</div>
	)
}
