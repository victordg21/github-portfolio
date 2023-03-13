import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemeButton, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>João Victor</Title>
      <Paragraph tipo="secundary" fontSize={16}>
        victordg21
      </Paragraph>
      <Description tipo="main" fontSize={12}>
        Desenvolvedor Web
      </Description>
      <ThemeButton onClick={props.changeTheme}>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
