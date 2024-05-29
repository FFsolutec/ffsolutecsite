export function CircleCheckBig(props: React.ComponentProps<"svg">) {
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
      className="circle-check-big"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M9 11l3 3L22 4" />
    </svg>
  );
}
