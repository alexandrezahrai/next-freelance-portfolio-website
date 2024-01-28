export default function Abstract({ fillColor, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={785}
      height={685}
      viewBox="0 0 785 685"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={className}
    >
      <defs>
        <linearGradient id="a" x1="16.981%" x2="50%" y1="14.165%" y2="100%">
          <stop offset="0%" stopColor={fillColor ? fillColor : "white"} stopOpacity={0.903} />
          <stop offset="100%" stopColor={fillColor ? fillColor : "white"} stopOpacity={0} />
        </linearGradient>
        <linearGradient id="b" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
          <stop offset="0%" stopColor={fillColor ? fillColor : "white"} />
          <stop offset="100%" stopColor={fillColor ? fillColor : "white"} stopOpacity={0} />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          fill="url(#a)"
          fillOpacity={0.64}
          d="m351 258 461 369-284 58z"
          transform="matrix(-1 0 0 1 1136 0)"
        />
        <path
          fill="url(#b)"
          d="m0 0 461 369-284 58z"
          transform="matrix(-1 0 0 1 434 0)"
        />
      </g>
      <script xmlns="" id="bw-fido2-page-script" />
    </svg>
  );
}
