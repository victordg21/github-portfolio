import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Meu nome é João Victor Dias Gonçalves, tenho 20 anos, atualmente estudo no
      5° período da Universidade Federal da Paraíba, e faço o curso
      Desenvolvedor Full Stack Python pela Escola Britânica de Artes Criativas e
      Tecnologias(EBAC). Possuo carreira em evolução na área de Desenvolvimento
      Web, me aperfeiçoando cada vez mais em linguagens de programação, sempre
      com flexibilidade, muita criatividade e vontade de aprender.
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=victordg21&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=victordg21&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
