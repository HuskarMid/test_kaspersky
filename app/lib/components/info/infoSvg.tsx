import Image from 'next/image'

export const InfoSvg = () => {
  return (
    <Image 
      src="/info.svg"
      alt="info"
      width={14}
      height={14}
      style={{ filter: 'brightness(0) invert(1)' }}
    />
  )
}