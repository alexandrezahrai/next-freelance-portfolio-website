export default function BadgeDark({ label }) {
  return (
    <div className="text-[14px] text-center font-medium leading-normal border border-transparent medium-chrome-border rounded-full w-fit mx-auto mb-4">
      <div className="border border-transparent bg-blue-very-dark w-full h-full rounded-full overflow-clip">
        <div className="w-full h-full bg-[hsl(231,47%,3%)] text-gray-100 py-1 px-4">{label}</div>
      </div>
    </div>
  );
}
