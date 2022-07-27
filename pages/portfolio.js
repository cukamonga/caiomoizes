import Header from '../src/header';
import Footer from '../src/footer';
import Link from 'next/link';
import { useState } from 'react';
import Modal from '../src/Modal';

function Portfolio() {
    const [showModal, setShowModal] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const [text, setText] = useState('');

    const handleModal = (e, t) => {
        setImgSrc(e);
        setText(t);
        setShowModal(true);
    };

    return (
        <html>
            <head>
                <title>Caio Moizés - Portfólio</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></script>
            </head>
            <body>
                <Header />
                <div class="container-fluid">
                    <h1>Portfólio</h1>
                    <div class="container-pers2">
                        <span>
                            Nesta página estarei mostrando um pouco do que eu sei fazer.
                            Estou finalizando o curso de Engenharia da Computação e estou aberto para 
                            oportunidades de freelance nas áreas apresentadas abaixo.
                        </span>
                        <div class="item-portfolio">
                            <img 
                                src="img/nodejs.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Teste de envio de texto por parâmetro."
                                    )
                                }}
                            />
                            <Modal show={ showModal } onClose={() => setShowModal(false)}>
                                <div class="divimg-modal">
                                    <img src={imgSrc} />
                                </div>
                                <div style={{ clear: 'both' }}></div>
                                {text}
                            </Modal>
                        </div>
                        <div class="item-portfolio">
                            <img 
                                src="img/react_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Teste de envio de texto por parâmetro."
                                    )
                                }}
                            />
                        </div>
                        <div class="item-portfolio">
                            <img 
                                src="img/php_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Teste de envio de texto por parâmetro."
                                    )
                                }}
                            />
                        </div>
                        <div class="item-portfolio">
                            <img 
                                src="img/html_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Teste de envio de texto por parâmetro."
                                    )
                                }}
                            />
                        </div>
                        <div class="item-portfolio">
                            <img 
                                src="img/css_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Teste de envio de texto por parâmetro."
                                    )
                                }}
                            />
                        </div>
                        <div class="item-portfolio">
                            <img 
                                src="img/js_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Teste de envio de texto por parâmetro."
                                    )
                                }}
                            />
                        </div>
                        <div class="item-portfolio">
                            <img 
                                src="img/cpp_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Teste de envio de texto por parâmetro."
                                    )
                                }}
                            />
                        </div>
                        <div class="item-portfolio">
                            <img 
                                src="img/android_icon.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        "Teste de envio de texto por parâmetro."
                                    )
                                }}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}

export default Portfolio;