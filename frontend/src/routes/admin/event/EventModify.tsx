import React from "react";
import { Field, FormikHelpers, useFormik } from "formik";
import { useEvent } from "hooks/useEvent";
import { useParams } from "react-router";
import { Checkbox, Input, Textarea } from "components/Form";
import { DefaultButton } from "components/Button";

interface FormValues {
	id?: string | number
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

interface RouteParams {
	id?: string
}

export default function EventModify() {
	const { id } = useParams<RouteParams>()

	const { event: formInitialValues } = useEvent(id)

	const onSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 500);
	}

	const formik = useFormik<FormValues>({
		initialValues: formInitialValues,
		enableReinitialize: true,
		onSubmit
	});

	return (
		<form onSubmit={formik.handleSubmit} className="w-full px-1 md:w-5/6 md:px-0 mx-auto">
			<h1>{id && id === "new" ? "New event" : `Editing event ${formInitialValues.eventName} - #${id}`}</h1>

			{formik.values.id && <Input type="hidden" name="id" value={formik.values.eventName} />}
			<Input
				type="text"
				name="eventName"
				label="Event name"
				value={formik.values.eventName}
				onChange={formik.handleChange} />

			<Input type="text" name="dateStart" label="Start date" value={formik.values.dateStart} onChange={formik.handleChange} />
			<Input type="text" name="dateEnd" label="End date" value={formik.values.dateEnd} onChange={formik.handleChange} />
			<Input type="text" name="pilotBriefing" label="Pilot Briefing URL" value={formik.values.pilotBriefing} onChange={formik.handleChange} />
			<Input type="text" name="atcBriefing" label="ATC Briefing URL" value={formik.values.atcBooking} onChange={formik.handleChange} />
			<Input type="text" name="banner" label="Banner URL" value={formik.values.banner} onChange={formik.handleChange} />
			<Input type="text" name="atcBooking" label="ATC Booking URL" value={formik.values.atcBooking} onChange={formik.handleChange} />
			<Textarea name="description" label="Description" value={formik.values.description} onChange={formik.handleChange} />
			<Checkbox name="privateSlots" label="Has private slots?" checked={formik.values.privateSlots} onChange={formik.handleChange} />
			<DefaultButton type="submit">Submit ({JSON.stringify(true)})</DefaultButton>
		</form>
	)
}
