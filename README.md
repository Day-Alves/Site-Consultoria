# Site de Consultoria em Certificações

Site moderno e responsivo para uma empresa de consultoria especializada em certificações como OEA, ISO e LGPD.

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome
- Google Fonts
- AOS (Animate On Scroll)

## 📋 Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet (para carregar as CDNs)
- Node.js e npm (opcional, para desenvolvimento local)

## 🔧 Instalação e Desenvolvimento Local

1. Clone este repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Navegue até o diretório do projeto:
```bash
cd [NOME_DO_DIRETÓRIO]
```

3. Para desenvolvimento local, você pode usar um servidor local como o `serve`:
```bash
npm install -g serve
serve
```

## 📦 Deploy na Vercel

### Método 1: Deploy Automático (recomendado)

1. Faça fork deste repositório para sua conta do GitHub

2. Acesse [Vercel](https://vercel.com)

3. Clique em "New Project"

4. Importe o repositório do GitHub

5. A Vercel detectará automaticamente as configurações. Clique em "Deploy"

### Método 2: Deploy via CLI

1. Instale a Vercel CLI:
```bash
npm install -g vercel
```

2. Faça login na sua conta Vercel:
```bash
vercel login
```

3. Deploy do projeto:
```bash
vercel
```

4. Para fazer deploy em produção:
```bash
vercel --prod
```

## 📁 Estrutura do Projeto

```
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── index.html
├── vercel.json
└── README.md
```

## 🛠️ Personalização

### Cores
As cores principais do site podem ser alteradas no arquivo `assets/css/style.css`:

```css
:root {
    --primary-color: #1E3D59;
    --secondary-color: #FF6B6B;
    --accent-color: #4CAF50;
    --dark-color: #2C3E50;
    --light-color: #F8F9FA;
    --gray-color: #6C757D;
}
```

### Imagens
- Substitua as imagens na pasta `assets/images/` mantendo os mesmos nomes de arquivo
- Atualize os caminhos das imagens no HTML se necessário

### Conteúdo
- Edite o arquivo `index.html` para atualizar textos e informações
- Modifique os links das redes sociais no footer
- Atualize as informações de contato

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop (> 992px)
- Tablet (768px - 991px)
- Mobile (< 767px)

## ⚡ Performance

Para manter a boa performance do site:
- Otimize as imagens antes de usar
- Mantenha os arquivos CSS e JS minificados em produção
- Use lazy loading para imagens
- Mantenha as bibliotecas atualizadas

## 🔒 SEO e Segurança

- Meta tags otimizadas para SEO
- Estrutura HTML semântica
- Alt text em todas as imagens
- SSL/HTTPS fornecido pela Vercel

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes

## ✨ Funcionalidades

- Design moderno e luxuoso
- Totalmente responsivo
- Animações suaves
- Formulário de contato com validação
- Integração com WhatsApp
- Smooth scroll
- Efeitos de hover
- Carrossel de imagens
- Seção de serviços interativa
- Newsletter
- Links para redes sociais

## 🤝 Suporte

Para suporte ou dúvidas:
- Abra uma issue no GitHub
- Entre em contato através do email: [seu-email@dominio.com]

## 🌐 Demo

Você pode ver o site em produção em: [URL_DO_SEU_PROJETO.vercel.app]
