import React, { useState } from "react";
import { useCombobox, UseComboboxStateChange } from "downshift";
import { Input } from "./Form";

export type SelectedItemChange<T> = UseComboboxStateChange<T>

interface SelectBoxProps<T> {
	id: string
	items: T[]
	onSelectedItemChange ?: (changes: SelectedItemChange<T>) => void
}

export default function SelectBox<T>({ id, items, onSelectedItemChange }: SelectBoxProps<T>) {
	const [inputItems, setInputItems] = useState(items)

	const {
		isOpen,
		getToggleButtonProps,
		getLabelProps,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		highlightedIndex,
		getItemProps
	} = useCombobox({
		id,
		items,
		onSelectedItemChange,
		onInputValueChange: ({ inputValue }) => {
			setInputItems(
				items.filter(item =>
				  String(item).toLowerCase().startsWith(inputValue?.toLowerCase() ?? ""),
				),
			  )
		},
	})

	return (
		<>
			<label {...getLabelProps()}>Choose an element:</label>
			<div {...getComboboxProps()}>
				<input className="border border-black" {...getInputProps()} />
				<button
					type="button"
					{...getToggleButtonProps()}
					aria-label="toggle menu"
				>
					&#8595;
				</button>
			</div>
			<ul {...getMenuProps()}>
				{isOpen &&
					inputItems.map((item, index) => (
						<li
							style={
								highlightedIndex === index
									? { backgroundColor: '#bde4ff' }
									: {}
							}
							key={`${item}${index}`}
							{...getItemProps({ item, index })}
						>
							{JSON.stringify(item)}
						</li>
					))}
			</ul>
		</>
	)
}
