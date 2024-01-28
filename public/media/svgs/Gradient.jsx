export default function Gradient({ fillColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1432}
      height={1600}
      viewBox="0 0 1432 1600"
      fill="none"
      className="blur-3xl"
    >
      <mask
        id="mask0_403_5354"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={1432}
        height={1600}
      >
        <rect
          width={1432}
          height={1600}
          rx={32}
          fill="url(#paint0_linear_403_5354)"
        />
      </mask>
      <g mask="url(#mask0_403_5354)">
        <rect
          width={1432}
          height={1600}
          rx={32}
          fill={fillColor}
          fillOpacity={0.02}
        />
        <rect
          x={0.5}
          y={0.5}
          width={1431}
          height={1599}
          rx={31.5}
          stroke={fillColor}
          strokeOpacity={0.08}
        />
        <g filter="url(#filter0_f_403_5354)">
          <rect
            x={130}
            y={279}
            width={1172}
            height={988}
            rx={32}
            fill="url(#paint1_linear_403_5354)"
            fillOpacity={0.24}
          />
        </g>
        <g filter="url(#filter1_f_403_5354)">
          <path
            d="M371.931 615.078C356.252 593.964 371.323 564 397.622 564H1035.32C1061.44 564 1076.56 593.61 1061.24 614.768L813.582 956.768C807.563 965.079 797.925 970 787.663 970H651.595C641.469 970 631.941 965.208 625.904 957.078L371.931 615.078Z"
            fill="url(#paint2_linear_403_5354)"
            fillOpacity={0.72}
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_403_5354"
          x={-130}
          y={19}
          width={1692}
          height={1508}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={130}
            result="effect1_foregroundBlur_403_5354"
          />
        </filter>
        <filter
          id="filter1_f_403_5354"
          x={125.564}
          y={324}
          width={1181}
          height={886}
          viewBox="0 0 1181 886"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={120}
            result="effect1_foregroundBlur_403_5354"
          />
        </filter>
        <linearGradient
          id="paint0_linear_403_5354"
          x1={716}
          y1={0}
          x2={716}
          y2={1600}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fillColor} />
          <stop offset={1} stopColor={fillColor} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_403_5354"
          x1={130}
          y1={279}
          x2={1302}
          y2={279}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fillColor} />
          <stop offset={0.5} stopColor={fillColor} />
          <stop offset={1} stopColor={fillColor} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_403_5354"
          x1={334}
          y1={564}
          x2={1098}
          y2={564}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={fillColor} />
          <stop offset={0.5} stopColor={fillColor} />
          <stop offset={1} stopColor={fillColor} />
        </linearGradient>
      </defs>
      <script xmlns="" id="bw-fido2-page-script" />
    </svg>
  );
}
