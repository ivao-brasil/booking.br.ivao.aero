import React, { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useEvent } from "@/hooks/useEvent";
import { useEventSlots } from "@/hooks/useEventSlots";
import { useEventScenary } from "@/hooks/useEventScenary";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Checkbox, Input } from "@/components/Form";
import { DefaultButton } from "@/components/Button";

interface FormValues {
	dateStart: string,
	dateEnd: string,
	eventName: string,
	privateSlots: boolean,
	pilotBriefing: string,
	atcBriefing: string,
	description: string,
	banner: string,
	atcBooking: string
}

export default function eventAdminItem() {
	const router = useRouter()
	const [activeTab, setActiveTab] = useState(0)
	const { event } = useEvent(1)
	const { slots } = useEventSlots(1)
	const { sceneries } = useEventScenary(1)

	const handleChange = (_event: any, newValue: number) => {
		setActiveTab(newValue);
	};

	const { id } = router.query
	if (Array.isArray(id)) {
		throw Error("Invalid route param type: " + typeof id)
	}

	const innitialValues: Partial<FormValues> = useMemo(() => ({
		"eventName": "",
		"privateSlots": false,
		"pilotBriefing": "",
		"atcBriefing": "",
		"description": "",
		"banner": "",
		"atcBooking": ""
	}), [])

	const onSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
		setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
	}

	return (
		<div className="w-full px-1 md:w-5/6 md:px-0 mx-auto">
			<h1>Evento</h1>

			<Formik initialValues={innitialValues} onSubmit={onSubmit}>
				{({ isSubmitting }) => (
					<Form>
						<Input type="text" name="eventName" label="Event name" />
						<Checkbox name="privateSlots" label="Has private slots?" />
						<Input type="text" name="dateStart" label="Date Start" />
						<Input type="text" name="dateEnd" label="Date End" />
						<Input type="text" name="pilotBriefing" label="Pilot Briefing" />
						<Input type="text" name="atcBriefing" label="ATC Briefing" />
						<Input type="text" name="banner" label="Banner URL" />
						<Input type="text" name="atcBooking" label="ATC Booking" />
						<DefaultButton type="submit">Submit ({JSON.stringify(isSubmitting)})</DefaultButton>
					</Form>
			)}
			</Formik>
		</div>

	)
}
