import { ComponentProps } from "react"

export function CirclePlay(props: ComponentProps<"svg">) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<circle cx={12} cy={12} r={10} />
			<path d="M10 8L16 12 10 16 10 8z" />
		</svg>
	)
}
