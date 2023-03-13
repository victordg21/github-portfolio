import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButtom } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragraph tipo="secundary">Lista de Tarefas com Vue JS</Paragraph>
    <LinkButtom>Visualizar</LinkButtom>
  </Card>
)

export default Project
