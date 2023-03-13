import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'main' | 'secundary'
  fontSize?: number
}

const Paragraph = ({ children, tipo = 'main', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragraph
