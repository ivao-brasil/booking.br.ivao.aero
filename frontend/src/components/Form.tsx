import { FormikProps, useField } from "formik";
import React from "react";

interface BaseInputProps {
	label: string
	name: string
}

interface InputProps {
	type: string
}

export const Input: React.FC<InputProps & BaseInputProps> = ({ type, label, ...props }) => {
	const [field, meta, helpers] = useField(props);

	return (
		<label className="block">
			{label}
			<input type={type} className="block w-full my-2 py-1 px-2 shadow-md rounded border border-gray-400 focus:ring-2 focus:ring-blue-500" {...field} {...props} />
		</label>
	)
}

export const Checkbox: React.FC<BaseInputProps> = ({ label, ...props }) => {
	const [field, meta, helpers] = useField(props);

	return (
		<label className="inline-block my-2">
			{label}
			<input type="checkbox" className="inline-block mx-2 py-1 px-2 shadow-md rounded border border-gray-400 focus:ring-2 focus:border-blue-500" {...field} {...props} />
		</label>
	)
}
