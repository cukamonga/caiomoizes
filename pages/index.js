import Header from '../src/header';
import Footer from '../src/footer';

function Home() {
    return (
        <html>
            <head>
                <title>Caio Moizés - Programador</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" rel="stylesheet"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/js/all.min.js"></script>
            </head>
            <body>
                <Header />
                <div class="container-fluid">
                    <div class="perfil">
                        <div class="foto">
                            <img src="img/foto_perfil.jpeg" />
                        </div>
                        <div class="p-info">
                            <h1>Perfil</h1>
                            <span>Meu nome é Caio Moizés Santos, sou estudante do último ano de Engenharia da Computação no UniSALESIANO Araçatuba-SP.</span>
                        </div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    )
}

export default Home