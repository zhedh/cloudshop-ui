import { ImgHTMLAttributes } from 'react'
import { styled } from 'styled-components'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  color: string
}

const SVG: React.FC<Props> = (props) => {
  return <Image {...props} src={props.src} />
}

const Image = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
  filter: drop-shadow(2000px 0 0 ${(props) => props.color});
  transform: translate(-2000px);
`

export default SVG
