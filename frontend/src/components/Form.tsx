import { FormikProps, useField } from "formik";
import React, { ChangeEvent } from "react";

interface BaseInputProps {
	name: string
	value: string | number | readonly string[] | undefined
	label?: string
	onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

interface InputProps {
	type: string
}

export function Input({ type, label, value, onChange, ...props }: BaseInputProps & InputProps) {
	return (
		<label className="block">
			{label}
			<input
				type={type}
				onChange={onChange}
				value={value}
				className="block w-full my-2 py-1 px-2 shadow-md rounded border border-gray-400 focus:ring-2 focus:ring-blue-500"
				{...props} />
		</label>
	)
}

interface TextareaProps {
	rows?: number
	cols?: number
}

export const Textarea: React.FunctionComponent<TextareaProps & BaseInputProps> = ({ label, rows, cols, ...props }) => {
	return (
		<label className="block my-3">
			{label}
			<textarea rows={rows} cols={cols} className="block w-full my-2 py-1 px-2 shadow-md rounded border border-gray-400 focus:ring-2 focus:ring-blue-500" {...props} />
		</label>
	)
}

interface CheckboxProps {
	name: string
	label?: string
	checked: boolean
	onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function Checkbox({ label, checked, onChange, ...props }: CheckboxProps) {
	return (
		<label className="block">
			{label}
			<input
				type="checkbox"
				onChange={onChange}
				checked={checked}
				className="inline-block mx-2 py-1 px-2 shadow-md rounded border border-gray-400 focus:ring-1 focus:border-blue-500"
				{...props} />
		</label>
	)
}
