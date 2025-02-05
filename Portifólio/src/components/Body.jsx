import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Body.css";

const Body = () => {
    const projetos = [
        { id: 1, nome: "Projeto 1", img: "url-da-imagem1.jpg" },
        { id: 2, nome: "Projeto 2", img: "url-da-imagem2.jpg" },
        { id: 3, nome: "Projeto 3", img: "url-da-imagem3.jpg" }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div>
            <div className='eu'>
                <h1>Olá, eu sou a <div className='name'>Catarina Dalsan :)</div></h1>
                <p>Desenvolvedora Front-end</p>
            </div>

            <div className='sobre'>
                <h2>Sobre mim</h2>
                <img src="" alt="" />
                <p>Desenvolvedora Front-end com experiência em React.js, Next.js, JavaScript, Material UI e consumo de APIs com Axios. Apaixonada pelo desenvolvimento de componentes reutilizáveis. Formada em Análise e desenvolvimento de sistemas na FAM. Atualmente estou estagiando na área.</p>
            </div>

            <div className='projetos'>
                <h2>Meus Projetos</h2>
                <Slider {...settings}>
                    {projetos.map((projeto) => (
                        <div key={projeto.id}>
                            <img src={projeto.img} alt={projeto.nome} style={{ width: "100%", borderRadius: "10px" }} />
                            <h3>{projeto.nome}</h3>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="habilidades">
                <h2>Minhas Habilidades</h2>
                <ul>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>JavaScript</li>
                    <li>Material UI</li>
                    <li>APIs com Axios</li>
                </ul>
            </div>
        </div>
    );
};

export default Body;
