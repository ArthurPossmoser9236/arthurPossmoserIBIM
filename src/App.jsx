import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="body">
        {/* Cabeçalho */}
        <header>
          <div className="logo">
            <h1>Minha Loja</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
        </header>

        {/* Banner */}
        <section className="banner">
          <div className="banner-text">
            <h2>Bem-vindo à Nossa Loja Online</h2>
            <p>Encontre os melhores produtos com descontos incríveis!</p>
            <a href="#" className="btn">Ver Produtos</a>
          </div>
        </section>

        {/* Produtos */}
        <section className="produtos">
          <h2>Produtos em Destaque</h2>
          <div className="produto-lista">
            {/* Produto 1 */}
            <div className="produto">
              <img src="images/produto1.jpg" alt="Produto 1" />
              <h3>Produto 1</h3>
              <p>Descrição breve do produto 1. Super qualidade e ótimo preço.</p>
              <span>R$ 99,99</span>
              <button className="btn">Comprar</button>
            </div>
            {/* Produto 2 */}
            <div className="produto">
              <img src="images/produto2.jpg" alt="Produto 2" />
              <h3>Produto 2</h3>
              <p>Descrição breve do produto 2. Garantia e satisfação.</p>
              <span>R$ 129,99</span>
              <button className="btn">Comprar</button>
            </div>
            {/* Produto 3 */}
            <div className="produto">
              <img src="images/produto3.jpg" alt="Produto 3" />
              <h3>Produto 3</h3>
              <p>Descrição breve do produto 3. Ideal para seu dia a dia.</p>
              <span>R$ 79,99</span>
              <button className="btn">Comprar</button>
            </div>
          </div>
        </section>

        {/* Seção Sobre */}
        <section className="sobre">
          <h2>Sobre a Loja</h2>
          <p>Somos uma loja online dedicada a oferecer os melhores produtos com preços imbatíveis. Nosso compromisso é entregar qualidade, segurança e agilidade em cada compra.</p>
        </section>

        {/* Seção de Contato */}
        <section className="contato">
          <h2>Fale Conosco</h2>
          <form action="#" method="post">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />

            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="4" required></textarea>

            <button type="submit" className="btn">Enviar</button>
          </form>
        </section>

        {/* Rodapé */}
        <footer>
          <p>&copy; 2025 Minha Loja. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  )
}

export default App
