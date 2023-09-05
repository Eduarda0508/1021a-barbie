import Filme from './../Filme/Filme'
import './Main.css'
export default function Main(){
    return(
        <main className="content-main">
            <Filme titulo= 'A Sereia das Pérolas'
            sinopse='Barbie é Lumina uma linda sereia, que sonha em ser uma princesa. Desde pequena, Lumina tem um poder mágico de fazer as pérolas dançarem e brilharem. '
            imagem='/barbie sereia.jpeg'
            />
            <Filme titulo=  'Sapatilhas Mágicas'
            sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
            imagem='/barbie.jpeg'
            />
              <Filme titulo=  'Barbie'
            sinopse='Kristyn e Hailey vão parar em um mundo mágico do balé dominado pela diabólica Rainha das Neves. As duas bailarinas dançam seus balés favoritos para derrotar a rainha e realizar seus sonhos.'
            imagem='/barbie.png'
            />
             <Filme titulo= 'Moda e Magia'
            sinopse='Em um conto de fadas fashion, Barbie viaja a Paris para salvar o ateliê de moda da sua tia, que está prestes a ser fechado.'
            imagem='/barbie moda.jpeg'
            />
        </main>
    )
}