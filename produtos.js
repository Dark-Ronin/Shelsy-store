//Abaixo voce encotrara uma ENORME lista de produtos, BOA SORTE!
    const numeroWhatsapp = '258852205772';

          /*Promocoes*/
const promocoes = [
  {
    nome: "Oculos Escuros Estilizados, Dois Pares",
    descricao: "Taxa: 100MZN ",
    preco: 130,
    precoOriginal: 190,
    imagem: "img/misc/oculos_1.jpg"
  },
  {
    nome: "Oculos Escuros",
    descricao: "Taxa: 100MZN ",
    preco: 170,
    precoOriginal: 250,
    imagem: "img/misc/oculos_2.jpg"
  },
  {
    nome: "Capa de Celular, Samsung/Iphone",
    descricao: "Taxa: 100MZN ",
    preco: 250,
    precoOriginal: 300,
    imagem: "img/misc/capinha_1.jpg"
  },
  {
    nome: "Capa de Celular",
    descricao: "Taxa: 100MZN ",
    preco: 130,
    precoOriginal: 200,
    imagem: "img/misc/capinha_2.jpg"
  }
];

const produtos = [
  {
    nome: "Conjunto",
    descricao: "Taxa: 150MZN",
    preco: 550,
    imagem: "img/vestidos/IMG-20250819-WA0017.jpg",
    termos: ["conjunto", "roupa", "feminino", "moda", "vestido"]
  },
  {
    nome: "Vestido Sereia",
    descricao: "Taxa: 150MZN",
    preco: 550,
    imagem: "img/vestidos/vestido_sereia_0.jpg",
    termos: ["vestido", "sereia", "feminino", "moda", "longo"]
  },
  {
    nome: "Vestido Sereia",
    descricao: "Taxa: 150MZN",
    preco: 650,
    imagem: "img/vestidos/vestido_sereia_1.jpg",
    termos: ["vestido", "sereia", "feminino", "moda", "longo"]
  },
  {
    nome: "Vestido Sereia",
    descricao: "Taxa: 150MZN",
    preco: 650,
    imagem: "img/vestidos/vestido_sereia_2.jpg",
    termos: ["vestido", "sereia", "feminino", "moda", "longo"]
  },
  {
    nome: "Vestido Sereia",
    descricao: "Taxa: 100MZN",
    preco: 400,
    imagem: "img/vestidos/vestido_sereia_3.jpg",
    termos: ["vestido", "sereia", "feminino", "moda", "longo"]
  },
  {
    nome: "Vestido Sereia",
    descricao: "Taxa: 150MZN",
    preco: 500,
    imagem: "img/vestidos/vestido_sereia_4.jpg",
    termos: ["vestido", "sereia", "feminino", "moda", "longo"]
  },
  {
    nome: "Vestido Sereia",
    descricao: "Taxa: 150MZN",
    preco: 550,
    imagem: "img/vestidos/vestido_sereia_5.jpg",
    termos: ["vestido", "sereia", "feminino", "moda", "longo"]
  },
  {
    nome: "Vestido Sereia",
    descricao: "Taxa: 150MZN",
    preco: 550,
    imagem: "img/vestidos/vestido_sereia_6.jpg",
    termos: ["vestido", "sereia", "feminino", "moda", "longo"]
  },
  {
    nome: "Vestido Longo",
    descricao: "Taxa: 150MZN",
    preco: 780,
    imagem: "img/vestidos/vestido_longo_1.jpg",
    termos: ["vestido", "longo", "feminino", "moda", "elegante"]
  },
  {
    nome: "Vestido Longo",
    descricao: "Taxa: 150MZN",
    preco: 780,
    imagem: "img/vestidos/vestido_longo_2.jpg",
    termos: ["vestido", "longo", "feminino", "moda", "elegante"]
  },
  {
    nome: "Vestido Longo",
    descricao: "Taxa: 150MZN",
    preco: 650,
    imagem: "img/vestidos/vestido_longo_3.jpg",
    termos: ["vestido", "longo", "feminino", "moda", "elegante"]
  },
  {
    nome: "Vestido Longo",
    descricao: "Taxa: 150MZN",
    preco: 750,
    imagem: "img/vestidos/vestido_longo_4.jpg",
    termos: ["vestido", "longo", "feminino", "moda", "elegante"]
  },
  {
    nome: "Vestido Longo",
    descricao: "Taxa: 150MZN",
    preco: 550,
    imagem: "img/vestidos/vestido_longo_5.jpg",
    termos: ["vestido", "longo", "feminino", "moda", "elegante"]
  },
  {
    nome: "Vestido Longo",
    descricao: "Taxa: 150MZN",
    preco: 700,
    imagem: "img/vestidos/vestido_longo_6.jpg",
    termos: ["vestido", "longo", "feminino", "moda", "elegante"]
  },
  {
    nome: "Vestido Longo",
    descricao: "Taxa: 150MZN",
    preco: 550,
    imagem: "img/vestidos/vestido_longo_7.jpg",
    termos: ["vestido", "longo", "feminino", "moda", "elegante"]
  },
  {
    nome: "Vestido Longo",
    descricao: "Taxa: 100MZN",
    preco: 550,
    imagem: "img/vestidos/vestido_longo_8.jpg",
    termos: ["vestido", "longo", "feminino", "moda", "elegante"]
  },
  {
    nome: "Conjunto Top + Saia",
    descricao: "Taxa: 150MZN",
    preco: 750,
    imagem: "img/vestidos/conjunto_top_1.jpg",
    termos: ["conjunto", "top", "saia", "feminino", "moda"]
  },
  {
    nome: "Conjunto Top + Saia",
    descricao: "Taxa: 150MZN",
    preco: 750,
    imagem: "img/vestidos/conjunto_top_2.jpg",
    termos: ["conjunto", "top", "saia", "feminino", "moda"]
  },
  {
    nome: "Vestido Robe",
    descricao: "Taxa: 150MZN",
    preco: 750,
    imagem: "img/vestidos/robe_1.jpg",
    termos: ["vestido", "robe", "feminino", "moda", "conforto"]
  },
  {
    nome: "Vestido Robe",
    descricao: "Taxa: 150MZN",
    preco: 650,
    imagem: "img/vestidos/robe_2.jpg",
    termos: ["vestido", "robe", "feminino", "moda", "conforto"]
  },
  {
    nome: "Vestido Robe",
    descricao: "Taxa: 150MZN",
    preco: 650,
    imagem: "img/vestidos/robe_3.jpg",
    termos: ["vestido", "robe", "feminino", "moda", "conforto"]
  },
  {
    nome: "Bolsa",
    descricao: "Taxa: 150MZN",
    preco: 350,
    imagem: "img/bolsas/bolsa_1.jpg",
    termos: ["bolsa", "acessório", "feminino", "moda", "mão"]
  },
  {
    nome: "Bolsa",
    descricao: "Taxa: 150MZN",
    preco: 450,
    imagem: "img/bolsas/bolsa_2.jpg",
    termos: ["bolsa", "acessório", "feminino", "moda", "mão"]
  },
  {
    nome: "Bolsa",
    descricao: "Taxa: 150MZN",
    preco: 450,
    imagem: "img/bolsas/bolsa_3.jpg",
    termos: ["bolsa", "acessório", "feminino", "moda", "mão"]
  },
  {
    nome: "Bolsa",
    descricao: "Taxa: 150MZN",
    preco: 550,
    imagem: "img/bolsas/bolsa_4.jpg",
    termos: ["bolsa", "acessório", "feminino", "moda", "mão"]
  },
  {
    nome: "Bolsa",
    descricao: "Taxa: 100MZN",
    preco: 250,
    imagem: "img/bolsas/bolsa_5.jpg",
    termos: ["bolsa", "acessório", "feminino", "moda", "mão"]
  },
  {
    nome: "Lenço 4pcs",
    descricao: "Taxa: 100MZN",
    preco: 130,
    imagem: "img/misc/lenco_1.jpg",
    termos: ["lenço", "acessório", "moda", "colorido", "kit"]
  },
  {
    nome: "Lenço 4pcs",
    descricao: "Taxa: 100MZN",
    preco: 130,
    imagem: "img/misc/lenco_2.jpg",
    termos: ["lenço", "acessório", "moda", "colorido", "kit"]
  },
  {
    nome: "Lenço 4pcs",
    descricao: "Taxa: 100MZN",
    preco: 130,
    imagem: "img/misc/lenco_3.jpg",
    termos: ["lenço", "acessório", "moda", "colorido", "kit"]
  },
  {
    nome: "Lenço 8pcs",
    descricao: "Taxa: 100MZN",
    preco: 280,
    imagem: "img/misc/lenco_4.jpg",
    termos: ["lenço", "acessório", "moda", "colorido", "kit"]
  },
  {
    nome: "Lenço 9pcs",
    descricao: "Taxa: 100MZN",
    preco: 300,
    imagem: "img/misc/lenco_5.jpg",
    termos: ["lenço", "acessório", "moda", "colorido", "kit"]
  },
  {
    nome: "Lenço 9pcs",
    descricao: "Taxa: 100MZN",
    preco: 300,
    imagem: "img/misc/lenco_6.jpg",
    termos: ["lenço", "acessório", "moda", "colorido", "kit"]
  }
];

    function mostrarModal(p) {
      const modalTitle = document.getElementById('produtoModalLabel');
      const modalImg = document.getElementById('modalImg');
      const modalDescricao = document.getElementById('modalDescricao');
      const modalPreco = document.getElementById('modalPreco');
      const modalWhatsapp = document.getElementById('modalWhatsapp');

      modalTitle.textContent = p.nome;
      modalImg.src = p.imagem;
      modalImg.alt = p.nome;
      modalDescricao.textContent = p.descricao;
      modalPreco.textContent = p.precoOriginal ? 
        `De ${p.precoOriginal} MT por ${p.preco} MT` : 
        `${p.preco} MT`;
      modalWhatsapp.href = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent("Olá! Tenho interesse no produto: " + p.nome)}`;

      const produtoModal = new bootstrap.Modal(document.getElementById('produtoModal'));
      produtoModal.show();
    }

    function montarProdutos() {
      const container = document.getElementById('produtos');
      container.innerHTML = '';

      produtos.forEach(p => {
        const isNovo = produtos.indexOf(p) === 0;
const badgeNovo = isNovo ? '<span class="badge bg-warning text-dark position-absolute top-0 end-0 m-2">Novo</span>' : '';
const card = `
  <div class="col-6 col-sm-4 col-lg-3">
    <div class="card h-100 shadow-sm position-relative">
      ${badgeNovo}
      <img src="${p.imagem}" class="card-img-top" alt="${p.nome}" onclick='mostrarModal(${JSON.stringify(p)})'>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${p.nome}</h5>
        <p class="card-text text-muted small">${p.descricao}</p>
        <div class="mt-auto">
          <strong class="text-success fs-5">${p.preco} MT</strong>
          <a href="https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent("Olá! Tenho interesse no produto: " + p.nome)}" target="_blank" class="btn btn-success w-100 mt-2">
            <i class="bi bi-whatsapp me-1"></i> Comprar
          </a>
        </div>
      </div>
    </div>
  </div>
`;
        container.insertAdjacentHTML('beforeend', card);
      });
    }

    function montarPromocoes() {
      const container = document.getElementById('promoCards');
      container.innerHTML = '';

      promocoes.forEach(p => {
        const card = `
          <div class="col-6 col-sm-4 col-lg-3">
            <div class="card h-100 position-relative card-promo">
              <span class="badge bg-danger position-absolute top-0 start-0 m-2">Promoção</span>
              <img src="${p.imagem}" class="card-img-top" alt="${p.nome}" onclick='mostrarModal(${JSON.stringify(p)})'>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${p.nome}</h5>
                <p class="card-text text-muted small">${p.descricao}</p>
                <div class="mt-auto">
                  <span class="text-muted text-decoration-line-through me-2">${p.precoOriginal} MT</span>
                  <strong class="text-success fs-5">${p.preco} MT</strong>
                  <a href="https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent("Olá! Tenho interesse no produto em promoção: " + p.nome)}" target="_blank" class="btn btn-success w-100 mt-2">
                    <i class="bi bi-whatsapp me-1"></i> Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>
        `;
        container.insertAdjacentHTML('beforeend', card);
      });
    }

    function filtrarProdutos(termo) {
      const termoLower = termo.toLowerCase();
      const filtrados = produtos.filter(p =>
        p.nome.toLowerCase().includes(termoLower) ||
        p.descricao.toLowerCase().includes(termoLower) ||
        (p.termos && p.termos.some(t => t.toLowerCase().includes(termoLower)))
      );
      montarProdutosFiltrados(filtrados);
    }

    function montarProdutosFiltrados(lista) {
      const container = document.getElementById('produtos');
      container.innerHTML = '';
      lista.forEach(p => {
        const card = `
          <div class="col-6 col-sm-4 col-lg-3">
            <div class="card h-100 shadow-sm">
              <img src="${p.imagem}" class="card-img-top" alt="${p.nome}" onclick='mostrarModal(${JSON.stringify(p)})'>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${p.nome}</h5>
                <p class="card-text text-muted small">${p.descricao}</p>
                <div class="mt-auto">
                  <strong class="text-success fs-5">${p.preco} MT</strong>
                  <a href="https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent("Olá! Tenho interesse no produto: " + p.nome)}" target="_blank" class="btn btn-success w-100 mt-2">
                    <i class="bi bi-whatsapp me-1"></i> Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>
        `;
        container.insertAdjacentHTML('beforeend', card);
      });
    }

    window.onload = () => {
      montarProdutos();
      montarPromocoes();
    };