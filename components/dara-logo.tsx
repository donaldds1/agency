"use client"

interface DaraLogoProps {
  className?: string
  width?: number
  height?: number
}

// Logo mobile (version compacte)
export const DaraLogoMobile = ({ className = "h-8", width = 32, height = 32 }: DaraLogoProps) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 88.000000 88.000000"
    preserveAspectRatio="xMidYMid meet"
    className={className}
    aria-label="DARA Logo"
  >
    <g transform="translate(0.000000,88.000000) scale(0.100000,-0.100000)" stroke="none">
      {/* Background sombre */}
      <path
        d="M0 440 l0 -440 440 0 440 0 0 440 0 440 -440 0 -440 0 0 -440z"
        fill="#262626"
        className="fill-neutral-800"
      />
      {/* Forme principale en blanc */}
      <path
        d="M657 680 c59 -35 65 -61 61 -256 l-3 -174 -33 -32 c-31 -32 -35 -33 -127 -36 l-95 -4 0 66 0 66 -65 0 -65 0 0 -65 0 -65 -70 0 -70 0 0 65 0 65 70 0 70 0 0 65 0 65 -70 0 -70 0 0 130 0 130 218 0 c198 0 220 -2 249 -20z"
        fill="white"
      />
      <path d="M330 375 l0 -65 65 0 65 0 0 -65 0 -65 65 0 65 0 0 130 0 130 -130 0 -130 0 0 -65z" fill="white" />
    </g>
  </svg>
)

// Logo desktop (version avec texte DARA)
export const DaraLogoDesktop = ({ className = "hidden h-8 sm:block", width = 130, height = 32 }: DaraLogoProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 130 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="DARA"
  >
    {/* Logo SVG avec background sombre et forme blanche */}
    <svg
      x="0"
      y="0"
      width="32"
      height="32"
      version="1.0"
      viewBox="0 0 88.000000 88.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,88.000000) scale(0.100000,-0.100000)" stroke="none">
        {/* Background sombre */}
        <path
          d="M0 440 l0 -440 440 0 440 0 0 440 0 440 -440 0 -440 0 0 -440z"
          fill="#262626"
          className="fill-neutral-800"
        />
        {/* Forme principale en blanc */}
        <path
          d="M657 680 c59 -35 65 -61 61 -256 l-3 -174 -33 -32 c-31 -32 -35 -33 -127 -36 l-95 -4 0 66 0 66 -65 0 -65 0 0 -65 0 -65 -70 0 -70 0 0 65 0 65 70 0 70 0 0 65 0 65 -70 0 -70 0 0 130 0 130 218 0 c198 0 220 -2 249 -20z"
          fill="white"
        />
        <path d="M330 375 l0 -65 65 0 65 0 0 -65 0 -65 65 0 65 0 0 130 0 130 -130 0 -130 0 0 -65z" fill="white" />
      </g>
    </svg>

    {/* Texte DARA en blanc */}
    <g fill="white">
      {/* D */}
      <path d="M45 8h8c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8V8zm3 3v10h5c2.8 0 5-2.2 5-5s-2.2-5-5-5h-5z" />

      {/* A */}
      <path d="M65 24l6-16h3l6 16h-3l-1.2-3.2h-6.6L68 24h-3zm4.8-6h4.4l-2.2-5.8L69.8 18z" />

      {/* R */}
      <path d="M83 8h7c2.8 0 5 2.2 5 5 0 2-1.2 3.7-3 4.5L95 24h-3.5l-2.3-6H86v6h-3V8zm3 3v5h4c1.1 0 2-.9 2-2s-.9-2-2-2h-4z" />

      {/* A */}
      <path d="M100 24l6-16h3l6 16h-3l-1.2-3.2h-6.6L103 24h-3zm4.8-6h4.4l-2.2-5.8L104.8 18z" />
    </g>
  </svg>
)

// Composant principal qui combine les deux versions
export const DaraLogo = ({ className }: { className?: string }) => (
  <div className={`group/logo ${className}`}>
    <DaraLogoMobile className="h-8 sm:hidden" />
    <DaraLogoDesktop className="hidden h-8 sm:block" />
  </div>
)
