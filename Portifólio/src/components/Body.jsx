import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import huddleImg from "../img/Huddle.png";

// Importe os módulos do Swiper que você precisará
import { Navigation, Pagination, Autoplay } from 'swiper';

const Body = () => {
    const projetos = [
        { id: 1, nome: "Huddle", link: "http://https://catyz00.github.io/Desafio01/", img: huddleImg },
        { id: 2, nome: "Projeto 2", img: "url-da-imagem2.jpg" },
        { id: 3, nome: "Projeto 3", img: "url-da-imagem3.jpg" }
    ];

    return (
        <div className="bg-gray-800 text-white min-h-screen">
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Olá, eu me chamo <span className="text-pink-500">Catarina Dalsan :)</span>
                </h1>
                <p className="text-3xl text-pink-500">Desenvolvedora Front-end</p>
            </div>
            <div className="mt-10 p-10 rounded-lg bg-gray-700">
                <h2 className="text-2xl font-bold mb-4">Sobre mim</h2>
                <div className="flex flex-col items-center justify-center gap-4">
                    <img src="" alt="" className="w-56 h-56 rounded-lg" />
                    <p className="max-w-2xl text-lg text-gray-300">
                        Desenvolvedora Front-end com experiência em React.js, Next.js, JavaScript, Material UI e consumo de APIs com Axios. Apaixonada pelo desenvolvimento de componentes reutilizáveis. Formada em Análise e desenvolvimento de sistemas na FAM. Atualmente estou estagiando na área.
                    </p>
                </div>
            </div>
            <div className="mt-10 p-10 rounded-lg bg-gray-700">
                <h2 className="text-2xl font-bold mb-4">Meus Projetos</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="mySwiper"
                >
                    {projetos.map((projeto) => (
                        <SwiperSlide key={projeto.id} className="flex flex-col items-center justify-center text-center">
                            <img src={projeto.img} alt={projeto.nome} className="w-full rounded-lg max-h-72 object-cover" />
                            <h3 className="mt-4 text-xl text-pink-500">{projeto.nome}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-10 p-10 rounded-lg bg-gray-700">
                <h2 className="text-2xl font-bold mb-4">Minhas Habilidades</h2>
                <ul className="flex flex-wrap justify-center gap-4">
                    <li className="bg-pink-500 text-gray-800 px-4 py-2 rounded-lg">React.js</li>
                    <li className="bg-pink-500 text-gray-800 px-4 py-2 rounded-lg">Next.js</li>
                    <li className="bg-pink-500 text-gray-800 px-4 py-2 rounded-lg">JavaScript</li>
                    <li className="bg-pink-500 text-gray-800 px-4 py-2 rounded-lg">Material UI</li>
                    <li className="bg-pink-500 text-gray-800 px-4 py-2 rounded-lg">APIs com Axios</li>
                </ul>
            </div>
        </div>
    );
};

export default Body;