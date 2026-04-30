# DSCommerce - Frontend (React)

Frontend do projeto **DSCommerce**, desenvolvido em **React + TypeScript** com **Vite**, seguindo o layout do Figma (exercício/aula 1).  
Foco principal: **componentização**, **CSS responsivo** e organização de estrutura de pastas.

## Links

- Repositório: [MiltonRafaeel/dscommerce-frontend-react-aula1](https://github.com/MiltonRafaeel/dscommerce-frontend-react-aula1)
- Figma (design): [DSCommerce (Design)](https://www.figma.com/design/ZrGNVNG0kZL6txDv4G8P6s/DSCommerce?node-id=0-1&p=f&t=NgTwjFhPfFJmk9QW-0)
- Figma (link alternativo): [DSCommerce (File)](https://www.figma.com/file/ZrGNVNG0kZL6txDv4G8P6s/DSCommerce)

## Visão geral

Atualmente o projeto implementa a estrutura visual das telas principais do DSCommerce:

- **Catálogo**
  - Header com logo “DSCommerce” e ícone do carrinho
  - Barra de busca (form com `submit` e `reset`)
  - Grid/lista de cards de produto (layout estático)
  - Botão “Carregar mais”
- **Detalhes do produto** (estrutura criada, em evolução)

> Observação: neste estágio, o `App` renderiza o **Catálogo** diretamente (sem roteamento).

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- Yarn
- ESLint
- CSS puro (classes utilitárias e responsividade por breakpoints)

## Como executar o projeto (local)

```bash
# 1) Clonar o repositório
git clone https://github.com/MiltonRafaeel/dscommerce-frontend-react-aula1.git

# 2) Entrar na pasta do projeto
cd dscommerce-frontend-react-aula1

# 3) Instalar dependências
yarn

# 4) Rodar o projeto
yarn dev
