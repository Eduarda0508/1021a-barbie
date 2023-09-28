import {useState} from 'react'
import Filme from './../Filme/Filme'
import './Main.css'
type FilmeType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main(){
    const [texto,setTexto]=useState("")

    const filmes:FilmeType[] = [
        {
            id:1,
            titulo:'A Sereia das Pérolas',
            sinopse: 'Barbie é Lumina uma linda sereia, que sonha em ser uma princesa. Desde pequena, Lumina tem um poder mágico de fazer as pérolas dançarem e brilharem. ',
            imagem :'/barbie sereia.jpeg'
        },
        {
            id:2,
            titulo: 'Sapatilhas Mágicas',
            sinopse: 'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
            imagem:'/barbie.jpeg'
    
        },
        {
            id:3,
            titulo: 'Barbie',
            sinopse: 'Kristyn e Hailey vão parar em um mundo mágico do balé dominado pela diabólica Rainha das Neves. As duas bailarinas dançam seus balés favoritos para derrotar a rainha e realizar seus sonhos.',
            imagem:'/barbie.png'    
        },
        {
            id:3,
            titulo: 'Moda e Magia',
            sinopse: 'Em um conto de fadas fashion, Barbie viaja a Paris para salvar o ateliê de moda da sua tia, que está prestes a ser fechado.',
            imagem:'/barbie moda.jpeg'   
        }
    ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
       setTexto(e.target.value)
    }
    return(
        <>
        <div className="campo_pesquisa">
            <p>Busque um filme</p>
            <input type="text" className='botao_pesquisa' placeholder='Pesquise um Filme' onChange={TrataTexto} />
            {!texto && <p>Resultados Para:{texto} </p>}
        </div>
        
        <main className="content-main">
             {/* 
                    Use algo do vetor para tentar criar os filmes 
                */}
                {
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                sinopse={filme.sinopse}
                                titulo={filme.titulo}
                                imagem={filme.imagem}
                            />
                    )
                }

            {/* <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser.'
                    imagem='/KEN.png'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                /> */}
            
        </main>
        </>
    )
}