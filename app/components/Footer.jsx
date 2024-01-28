export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center w-full bg-transparent relative">
      <div className="container">
        <div className="text-[14px] leading-[1.625] border-t border-white/10 text-center text-gray-400 py-10">
          © {year} - Alex Zahrai
        </div>
      </div>
    </footer>
  );
}
