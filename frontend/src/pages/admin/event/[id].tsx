import React from "react";
import { useRouter } from "next/router";
import { useEvent } from "@/hooks/useEvent";
import { Field, Form, Formik, FormikHelpers, useFormik } from "formik";
import { Checkbox, Input, Textarea } from "@/components/Form";
import { DefaultButton } from "@/components/Button";

interface FormValues {
	id: number
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

export default function adminEventItem() {
	const { query } = useRouter()

	const { id } = query
	if (Array.isArray(id)) {
		throw Error("Invalid route param type: " + typeof id)
	}

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
		<div className="w-full px-1 md:w-5/6 md:px-0 mx-auto">
			<h1>{id && id === "new" ? "New event" : `Editing event ${formInitialValues.eventName} - #${id}`}</h1>

			{formik.values.id && <Field type="hidden" name="id" />}
			<Input type="text" name="eventName" label="Event name" />
			<Input type="text" name="dateStart" label="Start date" />
			<Input type="text" name="dateEnd" label="End date" />
			<Input type="text" name="pilotBriefing" label="Pilot Briefing URL" />
			<Input type="text" name="atcBriefing" label="ATC Briefing URL" />
			<Input type="text" name="banner" label="Banner URL" />
			<Input type="text" name="atcBooking" label="ATC Booking URL" />
			<Textarea name="description" label="Description" />
			<Checkbox name="privateSlots" label="Has private slots?" />
			<DefaultButton type="submit">Submit ({JSON.stringify(true)})</DefaultButton>
		</div>

	)
}
