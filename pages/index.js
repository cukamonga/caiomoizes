import Header from '../src/header';
import Footer from '../src/footer';
import Link from 'next/link';

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
                            <p>Meu nome é Caio Moizés Santos, sou estudante do último ano de Engenharia da Computação no UniSALESIANO Araçatuba-SP.</p>
                            <div class="redes">
                                <Link href={ 'https://wa.me/' + process.env.NEXT_PUBLIC_TELEFONE_NUM }><a target="_blank"><span><i class="fa-brands fa-whatsapp"></i> (18) 99752-4254</span></a></Link>
                                <a href="#"><span><i class="fa-solid fa-envelope"></i> caiomoizess2014@gmail.com</span></a>
                                <Link href={ 'https://instagram.com/' + process.env.NEXT_PUBLIC_INSTAGRAM_NICK }><a target="_blank"><span><i class="fa-brands fa-instagram"></i> @{process.env.NEXT_PUBLIC_INSTAGRAM_NICK}</span></a></Link>
                            </div>
                        </div>
                    </div>
                    <div class="container-pers1">
                        <h1>Experiência Profissional</h1>
                        <div style={{clear: 'both' }}></div>
                        <div class="col-pers1">
                            <h3>Cartório de Registro de Imóveis</h3>
                            <div class="periodo">2020 - 2022</div>
                        </div>
                        <div class="col-pers1">
                            <h3>Global Websites</h3>
                            <div class="periodo">2019</div>
                        </div>
                    </div>
                    <div class="container-pers1">
                        <h1>Trabalho Voluntário</h1>
                        <div style={{clear: 'both'}}></div>
                        <div class="col-pers1">
                            <img src="img/ic_logo.png" />
                            <div style={{clear: 'both'}}></div>
                            <div class="periodo">2015 - 2018</div>
                        </div>
                        <div class="col-pers1">
                            <img src="img/rct_logo.png" />
                            <div style={{clear: 'both'}}></div>
                            <div class="periodo">2019</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    )
}

export default Home