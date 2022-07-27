import Link from 'next/link';

function Header() {
    return (
        <div class="header">
            <div class="topo">
                <div class="info">
                    <h1>Caio Moizés</h1>
                    <h2>Engenharia da Computação</h2>
                    <Link href={ 'https://wa.me/' + process.env.NEXT_PUBLIC_TELEFONE_NUM }><a target="_blank"><span><i class="fa-brands fa-whatsapp"></i> (18) 99752-4254</span></a></Link>
                </div>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/portfolio">Portfólio</a></li>
                    {/* <li><a href="/orcamento">Orçamento</a></li> */}
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;