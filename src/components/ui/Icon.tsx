export function Icon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg aria-hidden="true" focusable="false" className={className}>
      <use href={`/icons.svg#${name}`} />
    </svg>
  );
}
