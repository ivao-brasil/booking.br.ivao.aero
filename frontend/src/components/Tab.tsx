import React, { useState } from "react";

interface TabProps {
	children?: React.ReactNode
}


export function Tab({ children: childrenProp }: TabProps) {
	const [activeTab, setActiveTab] = useState(0)

	const children = React.Children.map(childrenProp, (child, idx) => {
		if (!React.isValidElement(child)) {
			return null;
		}

		return React.cloneElement(child, {
			isActive: activeTab == idx,
			onClick: () => setActiveTab(idx)
		})
	})

	return (
		<div className="flex flex-wrap">
			<div className="w-full">
				<ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
					{children}
				</ul>
			</div>
		</div>
	)
}

interface TabItemProps {
	isActive?: boolean
}

export const TabItem: React.FC<TabItemProps> = ({ children, isActive, ...props }) => (
	<li className={
		"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal mr-2 last:mr-0 flex-auto text-center " +
		(isActive ? "text-white bg-blue-600" : "text-blue-600 bg-white")
	} data-toggle="tab" role="tablist" {...props}>
		{JSON.stringify(isActive)} - {children}
	</li>
)
