---
title: Primeiros passos
sidebar_position: 2
---

# Primeiros passos

## Pré-requisitos

| Requisito          | Detalhes                                                       |
| ------------------ | -------------------------------------------------------------- |
| **Node.js 24.15+** | [Baixe o Node.js](https://nodejs.org/) se você ainda não tiver |
| **npm**            | Já vem com o Node.js                                           |

## Instalação

```bash
npm install -g @tiendanube/cli
```

Verifique a instalação:

```bash
nuvemshop --version
```

:::tip
Você pode usar tanto `tiendanube` quanto `nuvemshop` — os dois comandos são idênticos.
:::

## Escolha seu fluxo de trabalho

O Nuvemshop CLI suporta duas formas de sincronizar arquivos de tema. Compare as funcionalidades e escolha a que melhor se adapta ao seu projeto:

| Funcionalidade               | FTP (legado)    | Fork            |
| ---------------------------- | --------------- | --------------- |
| Baixar / Enviar / Monitorar  | Sim             | Sim             |
| Gerenciamento de instalações | Não             | Sim             |
| Fork / Clone / Publicar      | Não             | Sim             |
| URLs de pré-visualização     | Não             | Sim             |
| Autenticação                 | Credenciais FTP | Bearer token    |
| Suporte de temas             | Todos os temas  | Somente Ipanema |

| Fluxo de trabalho | Ideal para                                                                          | Guia                                 |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------------ |
| **Fork**          | Tema Ipanema — gerenciamento completo de instalações, autenticação via bearer token | [Fork workflow](./api-workflow)      |
| **FTP (legado)**  | Todos os outros temas — sincronização simples de arquivos via FTP                   | [Fluxo FTP (legado)](./ftp-workflow) |

:::warning
O Fork workflow atualmente suporta apenas o tema **Ipanema**. Para todos os outros temas, use o Fluxo FTP (legado).
:::
