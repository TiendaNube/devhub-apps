---
title: Visão geral
sidebar_position: 1
---

# Nuvemshop CLI

**Nuvemshop CLI** (`@tiendanube/cli`) é a ferramenta oficial de linha de comando para o desenvolvimento de temas Nuvemshop. Ela oferece tudo o que você precisa para criar, sincronizar e gerenciar temas da loja — desde o desenvolvimento local até a publicação em produção.

## O que você pode fazer

| Funcionalidade                    | Descrição                                                                                                       |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Fork workflow**                    | Baixar, enviar e monitorar arquivos de tema usando a API Pública da Nuvemshop com autenticação via bearer token |
| **Gerenciamento de instalações**  | Criar, clonar, fazer fork, publicar e excluir instalações de tema diretamente do terminal                       |
| **Sincronização via FTP**         | Baixar, enviar e monitorar arquivos de tema via FTP                                                             |

## Dois modos de sincronização

O Nuvemshop CLI suporta duas formas de sincronizar arquivos de tema com sua loja:

### Fork workflow

O Fork workflow usa autenticação via bearer token e a API REST da Nuvemshop. Ele oferece gerenciamento completo de instalações — você pode criar, clonar, fazer fork, publicar e pré-visualizar instalações de tema, além de baixar, enviar e monitorar arquivos.

:::warning
O Fork workflow atualmente suporta apenas o tema **Ipanema**. Para outros temas, use o [Fluxo FTP (legado)](./ftp-workflow).
:::

### Fluxo FTP (legado)

O Fluxo FTP conecta-se diretamente ao servidor FTP da loja. Ele suporta baixar, enviar e monitorar arquivos, mas não oferece funcionalidades de gerenciamento de instalações. Use-o para temas diferentes do Ipanema, ou se o seu fluxo de trabalho depende de acesso FTP.

## Próximos passos

- [Primeiros Passos](./getting-started) — Instale o CLI e escolha seu fluxo de trabalho
- [Fork workflow](./api-workflow) — Configure as credenciais da API e comece a sincronizar
- [Instalações de Tema](./theme-installations) — Criar, clonar, fazer fork e publicar instalações
- [Fluxo FTP (legado)](./ftp-workflow) — Sincronização de tema via FTP
