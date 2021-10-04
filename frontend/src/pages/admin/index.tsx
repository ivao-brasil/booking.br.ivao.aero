import Link from "next/link";
import React from "react";

export default function index() {
	return (
		<Link href="/admin/event">
			<a>Events</a>
		</Link>
	)
}
