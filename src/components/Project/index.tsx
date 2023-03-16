import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButtom } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragraph tipo="secundary">Lista de Tarefas com Vue JS</Paragraph>
    <LinkButtom href="https://github.com/victordg21?tab=repositories">
      Visualizar
    </LinkButtom>
  </Card>
)

export default Project
