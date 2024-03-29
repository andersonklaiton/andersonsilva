import CardsProjects from "../../components/cardsProjects/CardsProjects"
import curriculo from "../../assets/images/curriculo.png"
import plataforma from "../../assets/images/plataforma.png"
import jokenpo from "../../assets/images/jokenpo.png"
import hanoi from "../../assets/images/hanoi.png"
import lig4 from "../../assets/images/lig4.png"
import labirinto from "../../assets/images/labirinto.png"
import encoder from "../../assets/images/encoder.png"
import rickemorty from "../../assets/images/rickemorty.png"
import pokemons from "../../assets/images/pokemons.png"
import habitude from "../../assets/images/habitude.png"
import kenzieshop from "../../assets/images/kenzieshop.png"
import tranqyl from "../../assets/images/tranqyl.png"
import rent_a_car from "../../assets/images/rent_a_car.png"
import agencia from "../../assets/images/agencia.png"

const Projects = ()=>{
    return(
        <>
        <p>Projetos Front End</p>
        <p>Primeiros Projetos - Reaprendendo HTML/CSS</p>
        <CardsProjects projeto={"Estilizando Curriculo"}  descrição={"Utilizando regras em estilização css foi requisitado para que o projeto pronto ficasse o mais próximo possível do mockup passado"} imagem={curriculo} link={"https://kenzie-academy-brasil-developers.github.io/estilizar-curriculo-sprint-2-AndersonKSilva/"} github="https://github.com/Kenzie-Academy-Brasil-Developers/estilizar-curriculo-sprint-2-AndersonKSilva"/>

        <CardsProjects projeto={"Layout plataforma de streaming"}  descrição={"Prototipar uma plataforma streaming seguindo layout, mostrando lista de usuários"} imagem={plataforma} link={"https://kenzie-academy-brasil-developers.github.io/estilizar-layout-plataforma-streaming-sprint-2-AndersonKSilva/"} github="https://github.com/Kenzie-Academy-Brasil-Developers/estilizar-layout-plataforma-streaming-sprint-2-AndersonKSilva"/>

        <p>Primeiros Projetos - Projetos em HTML/CSS/JAVASCRIPT</p>

        <CardsProjects projeto={"Construindo primeiro jogo"}  descrição={"Implementando primeiro jogo utilizando javascrip homem vs maquina Pedra, Papel e Tesoura - Jokenpo"} imagem={jokenpo} link={"https://kenzie-academy-brasil-developers.github.io/entrega-construa-um-jogo-de-azar-sprint-3-AndersonKSilva/"} github="https://github.com/Kenzie-Academy-Brasil-Developers/entrega-construa-um-jogo-de-azar-sprint-3-AndersonKSilva"/>

        <CardsProjects projeto={"Construindo segundo jogo"}  descrição={"Implementando segundo jogo utilizando javascrip torre de hanoi"} imagem={hanoi} link={"https://kenzie-academy-brasil-developers.github.io/entrega-torre-de-hanoi-sprint-5-AndersonKSilva/"} github="https://github.com/Kenzie-Academy-Brasil-Developers/entrega-torre-de-hanoi-sprint-5-AndersonKSilva"/>

        <CardsProjects projeto={"Construindo terceiro jogo"}  descrição={"Implementando terceiro jogo utilizando javascrip lig-4"} imagem={lig4} link={"https://andersonklaiton.github.io/lig-4/"} github="https://github.com/andersonklaiton/lig-4"/>

        <CardsProjects projeto={"Construindo quarto jogo"}  descrição={"Implementando quarto jogo utilizando javascrip labirinto"} imagem={labirinto} link={"https://kenzie-academy-brasil-developers.github.io/entrega-labirinto-sprint-5-AndersonKSilva/"} github="https://github.com/Kenzie-Academy-Brasil-Developers/entrega-labirinto-sprint-5-AndersonKSilva"/>

        <CardsProjects projeto={"Implementação de um codificador de mensagem"}  descrição={"Aplicação que codifica mensagem gerando uma chave única para cada mensagem"} imagem={encoder} link={"https://andersonklaiton.github.io/encoder/"} github="https://github.com/andersonklaiton/encoder"/>

        <p>Projetos requisições de API com React</p>

        <CardsProjects projeto={"Personagens RICK e MORTY"}  descrição={"Aplicação com requisição de personagens na api de RICK e MORTY"} imagem={rickemorty} link={"https://react-atividade-s1-buscando-mais-personagens-andersonklaiton.vercel.app/"} github="https://github.com/Kenzie-Academy-Brasil-Developers/react-atividade-s1-buscando-mais-personagens-andersonklaiton"/>

        <CardsProjects projeto={"POKEMONS"}  descrição={"Aplicação com requisição de personagens na api de POKEMONS"} imagem={pokemons} link={"https://projetopokemon.vercel.app/"} github=""/>

        <p>Projeto com typescript</p>

        <CardsProjects projeto={"Burguer Kenzie"}  descrição={"Aplicação desenvolvidade com Typescript, simulando uma gestão de hamburgueria"} imagem={kenzieshop} link={"https://react-entrega-s5-hamburgueria-2-0-com-typescript-jso-l0h52jroc.vercel.app/"} github="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s5-hamburgueria-2-0-com-typescript-json-server-andersonklaiton"/>

        <p>Projetos em equipe</p>

        <CardsProjects projeto={"Habitude"}  descrição={"Aplicação voltada a criação de hábitos/tarefas - neste projeto tive a oportunidade de trabalhar como Tech Leader"} imagem={habitude} link={"https://habitude.vercel.app/"} github="https://github.com/andersonklaiton/habitude"/>

        <CardsProjects projeto={"Tranqyl"}  descrição={"Uma aplicação que visa o bem estar emocional e comportamental dos usuários. Valorizando o atendimento remoto de maneira objetiva e segura - neste projeto tive a oportunidade de trabalhar como Scrum Master"} imagem={tranqyl} link={"https://tranqly-capstone-osmg6nnsa-gabrielguti.vercel.app/"} github="https://github.com/gabrielguti/tranqly-capstone"/>

        <CardsProjects projeto={"ECommerce"} descrição={"Projeto de um ecomerce de um teste de front end para uma empresa"} imagem={agencia} link={"https://ecommerce-psi-bice.vercel.app/"} github={"https://github.com/andersonklaiton/teste_agencia_n1"}/>
        <p>Projetos Back End</p>

        <CardsProjects projeto={"Rent_a_car"} descrição={"API desenvolvida para gerenciamento de uma empresa de aluguel de veículos"} imagem={rent_a_car} github={"https://github.com/andersonklaiton/rent-a-car"}/>
        </>
    )
}

export default Projects