# 🏛️ Site Igreja Presbiteriana do Crato

Site institucional profissional desenvolvido com React, TypeScript e Vite.

## 🎨 Identidade Visual

### Paleta de Cores

```css
--color-header: rgb(246, 246, 246);
--color-footer: rgba(0, 0, 0, 0);
--color-accent: rgb(239, 239, 244);
--bg: #fff;
--text: #44916f;
```

## 🚀 Tecnologias

- **React** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool moderna e rápida
- **React Router DOM** - Roteamento de páginas
- **React Icons** - Biblioteca de ícones
- **CSS3** - Estilização

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens, logos e recursos estáticos
├── components/      # Componentes reutilizáveis
├── data/           # Dados mockados e configurações
├── pages/          # Páginas do site
├── styles/         # Arquivos CSS globais
├── types/          # Definições de tipos TypeScript
├── utils/          # Funções utilitárias
├── App.tsx         # Componente principal
└── main.tsx        # Ponto de entrada
```

## 🛠️ Como Executar

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd igreja-presbiteriana-crato
```

2. Instale as dependências

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

4. Acesse no navegador

```
http://localhost:5173
```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa linter

## 📄 Páginas

- **Início** - Página principal com avisos, horários e destaques
- **Dízimos e Ofertas** - Informações sobre contribuições
- **Agenda** - Calendário de eventos
- **Contato** - Formulário e informações de contato
- **Sociedades Internas** - Ministérios e grupos da igreja
- **Sobre** - História e missão da igreja

## 🎯 Funcionalidades

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Navegação suave entre páginas
- ✅ Slider de avisos
- ✅ Galeria de imagens
- ✅ Formulário de contato
- ✅ Integração com mapas
- ✅ SEO otimizado
- ✅ Acessibilidade (WCAG)

## 📱 Responsividade

- Mobile: até 480px
- Tablet: 481px - 768px
- Desktop: 769px+

## 🤝 Contribuindo

Este é um projeto em desenvolvimento. Sugestões e melhorias são bem-vindas!

## 📝 Licença

# Igreja Presbiteriana do Crato — Site Institucional

Versão profissional do site institucional da Igreja Presbiteriana do Crato, construída com foco em acessibilidade, SEO e responsividade.

## Visão geral

Este repositório contém a aplicação front-end desenvolvida com React + TypeScript e empacotada com Vite. O objetivo é disponibilizar informações institucionais, agenda, contato e meios para a comunidade acompanhar as atividades da igreja.

## Tecnologias principais

- React
- TypeScript
- Vite
- React Router DOM
- React Icons
- CSS3 (organizado em módulos e arquivos por página)

## Estrutura (resumida)

```
src/
├─ assets/         # imagens e recursos estáticos
├─ components/     # componentes reutilizáveis (header, footer, SEO, etc.)
├─ pages/          # páginas (Home, Contato, Sobre, Sociedades, etc.)
├─ styles/         # estilos globais e variáveis CSS
├─ App.tsx         # rota e montagem da aplicação
└─ main.tsx        # ponto de entrada
```

## Funcionalidades

- Design responsivo (mobile / tablet / desktop)
- Meta tags e Open Graph para SEO
- Favicon / manifest para PWA
- Formulário de contato com validação
- Integração com Google Maps (iframe)
- Páginas institucionais: Início, Dízimos, Agenda, Contato, Sociedades, Sobre
- Acessibilidade e contraste adequados

## Como rodar (desenvolvimento)

Pré-requisitos: Node.js (18+) e npm

1. Clone o repositório

```bash
git clone https://github.com/LuisPedro53/igreja-presb-crato-site.git
cd igreja-presbiteriana-crato
```

2. Instale dependências

```bash
npm install
```

3. Rode em modo de desenvolvimento

```bash
npm run dev
```

Abra http://localhost:5173

## Build para produção

```bash
npm run build
npm run preview
```

## Boas práticas e recomendações

- Verificar o arquivo `public/robots.txt` e `sitemap.xml` antes do deploy
- Gerar favicons PNG (veja `FAVICON-INSTRUCTIONS.md`)
- Testar formulários em ambiente de produção com serviço de e-mail ou webhook

## Deploy sugerido

Plataformas que funcionam bem com Vite:

- Vercel
- Netlify
- GitHub Pages (com adapter)

## Licença e propriedade

Este projeto é de propriedade da Igreja Presbiteriana do Crato. Para uso, adaptação ou publicação é recomendada autorização prévia da diretoria da igreja.

## Contato do projeto

Para dúvidas sobre o código ou publicação, entre em contato com o mantenedor do repositório.

---

_Preparado para publicação — Igreja Presbiteriana do Crato_
