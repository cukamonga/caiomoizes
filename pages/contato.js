import { useState } from 'react';

import Header from '../src/header';
import Footer from '../src/footer';

function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando...');

        let data = {
            nome,
            email,
            mensagem
        };

        fetch('/api/contato', {
            method: 'POST',
            header: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received');
            if (res.status == 200) {
                console.log('Response succeeded!');
                setEnviado(true);
                setNome('');
                setEmail('');
                setMensagem('');
            }
        });
    };

    return (
        <html>
            <head>
                <title>Caio Moizés - Contato</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></script>
            </head>
            <body>
                <Header />
                <div class="container-fluid">
                    <h1>Contato</h1>
                    <div class="container-contato">
                        <p>Teste de descrição do formulário de contato. Teste de descrição do formulário de contato. 
                            Teste de descrição do formulário de contato.</p>
                        <form class="form-contato" method="POST">
                            <div class="form-column">
                                <label for="">Nome</label>
                                <input type="text" name="nome" id="nome" autoComplete="off" onChange={(e) => {setNome(e.target.value)}} />
                            </div>
                            <div class="form-column">
                                <label for="email">E-mail</label>
                                <input type="email" name="email" id="email" autoComplete="off" onChange={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <div style={{ clear: 'both' }}></div>
                            <div class="form-row">
                                <label for="mensagem">Mensagem</label>
                                <textarea name="mensagem" id="mensagem" autoComplete="off" onChange={(e) => {setMensagem(e.target.value)}}></textarea>
                            </div>
                            <div style={{ clear: 'both' }}></div>
                            <input class="botao-enviar" type="submit" name="enviar" id="enviar" onClick={(e) => {handleSubmit(e)}} value="Enviar" />
                        </form>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}

export default Contato;
