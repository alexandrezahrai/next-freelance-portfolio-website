export default function BadgeDark({ label }) {
  return (
    <div className="text-[14px] text-center font-medium leading-normal border border-transparent medium-chrome-border rounded-full w-fit mx-auto text-gray-medium mb-4">
      <div className="border border-transparent bg-[#0f172a] w-full h-full py-1 px-4 rounded-full">{label}</div>
    </div>
  );
}
