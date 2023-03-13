import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ThemeButton = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    height: 50px;
    width: 100px;
    font-size: 13px;
  }
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  text-align: center;
`
