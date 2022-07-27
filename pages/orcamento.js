import Header from '../src/header';
import Footer from '../src/footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Modal from '../src/Modal';

function Orcamento() {
    const mensagens = [
        "Olá, gostaria de fazer um orçamento para Montagem.",
        "Olá, gostaria de fazer um orçamento para Formatação Completa.",
        "Olá, gostaria de fazer um orçamento para Formatação Simples.",
        "Olá, gostaria de fazer um orçamento para Limpeza."
    ];

    const [showModal, setShowModal] = useState(false);
    const [imgSrc, setImgSrc] = useState('');
    const [text, setText] = useState();
    const [overflow, setOverflow] = useState('visible');

    useEffect(() => {
        if (showModal) {
            console.log('ON');
            setOverflow('hidden');
        } else {
            console.log('OFF');
            setOverflow('visible');
        }
    }, [showModal]);

    const handleModal = (e, t) => {
        setImgSrc(e);
        setText(t);
        setShowModal(true);
    };

    return (
        <html style={{ overflow: overflow }}>
            <head>
                <title>Caio Moizés - Orçamento</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></script>
            </head>
            <body>
                <Header />
                <div class="container-fluid">
                    <h1>Orçamento</h1>
                    <div class="container-pers2">
                        <div class="item-orcamento">
                            <a href="#">
                            <img 
                                src="img/montagem.png"
                                onClick={(e, t) => {
                                    handleModal(
                                        e.target.src,
                                        (
                                            <div>
                                                Montagem completa do computador (hardware).<br></br>
                                                <Link href={'https://wa.me/' + process.env.NEXT_PUBLIC_TELEFONE_NUM + '?text=' + mensagens[0]}>
                                                    <a target="_blank">Clique aqui</a>
                                                </Link>
                                            </div>
                                        )
                                    )
                                }}
                            />
                            </a>
                            <Modal show={ showModal } onClose={() => setShowModal(false)}>
                                <div class="divimg-modal">
                                    <img src={imgSrc} />
                                </div>
                                <div style={{ clear: 'both' }}></div>
                                {text}
                            </Modal>
                        </div>
                        <div class="item-orcamento">
                            <Link href={'https://wa.me/' + process.env.NEXT_PUBLIC_TELEFONE_NUM + '?text=' + mensagens[0]}><a target="_blank"><img src="img/montagem.png" /></a></Link>
                            <h3>Montagem</h3>
                            <p>Montagem completa do computador (hardware).</p>
                        </div>
                        <div class="item-orcamento">
                            <Link href={'https://wa.me/' + process.env.NEXT_PUBLIC_TELEFONE_NUM + '?text=' + mensagens[1]}><a target="_blank"><img src="img/formatar_full.png" /></a></Link>
                            <h3>Formatação Completa</h3>
                            <p>Formatação do Windows + instalação de programas solicitados.</p>
                        </div>
                        <div class="item-orcamento">
                            <Link href={'https://wa.me/' + process.env.NEXT_PUBLIC_TELEFONE_NUM + '?text=' + mensagens[2]}><a target="_blank"><img src="img/formatar_simples.png" /></a></Link>
                            <h3>Formatação Simples</h3>
                            <p>Formatação do Windows.</p>
                        </div>
                        <div class="item-orcamento">
                            <Link href={'https://wa.me/' + process.env.NEXT_PUBLIC_TELEFONE_NUM + '?text=' + mensagens[3]}><a target="_blank"><img src="img/limpeza.png" /></a></Link>
                            <h3>Limpeza</h3>
                            <p>Limpeza das peças e componentes (hardware) do computador.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}

export default Orcamento;