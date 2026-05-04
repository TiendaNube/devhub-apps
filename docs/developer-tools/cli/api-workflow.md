---
title: Fork workflow
sidebar_position: 3
---

# Fork workflow

O Fork workflow usa autenticação via bearer token e a API REST da Nuvemshop. Você tem sincronização completa de arquivos (baixar, enviar, monitorar) além do gerenciamento de instalações (criar, clonar, fazer fork, publicar, pré-visualizar, excluir).

:::warning Somente tema Ipanema
O Fork workflow atualmente suporta apenas o tema **Ipanema**. Se você estiver trabalhando com um tema diferente, use o [Fluxo FTP (legado)](./ftp-workflow).
:::

## Autorizar

Execute `theme authorize` para conectar o CLI à sua loja. Ele abre o navegador padrão, você faz login, copia o token da página e o cola de volta no terminal:

```bash
nuvemshop theme authorize
```

### 1. Autorize o CLI no painel da sua loja

Após fazer login, o painel da sua loja exibe uma tela de instalação solicitando as permissões que o Nuvemshop CLI precisa para gerenciar seu tema. Revise as permissões e clique em Aceitar:

![Tela de instalação do Nuvemshop CLI no painel da loja](/img/en/cli-authorize-admin.png)

### 2. Copie o token de acesso

Após aceitar, o navegador exibe seu token de acesso à API Pública. Use o botão Copiar para copiar:

![Token de acesso à API Pública exibido após a autorização bem-sucedida](/img/pt/cli-authorize-token-pt.png)

### 3. Cole o token de volta no terminal

Volte ao terminal onde `theme authorize` ainda está em execução e cole o token no prompt `Paste your token:`. O CLI decodifica o token, busca a URL da sua loja na API Pública, grava um arquivo `.nube` no seu diretório de trabalho e verifica a conexão.

:::warning
O arquivo `.nube` contém seu token de acesso. Adicione-o ao seu `.gitignore`.
:::

### Modo não-interativo

Para scripts e CI, passe o token diretamente com `--token` para pular o navegador e o prompt:

```bash
nuvemshop theme authorize --token SEU_TOKEN -y
```

O token deve ser a **string Base64 completa** exibida na página de autorização (ela codifica tanto o `store_id` quanto o `access_token`), não o token de acesso bruto da API.

### Opções

| Opção             | Descrição                                                          |
| ----------------- | ------------------------------------------------------------------ |
| `--token <token>` | Token Base64 da página de autorização; pula o navegador e o prompt |
| `-y`              | Pula o aviso de diretório não vazio                                |
| `-v`              | Ativa o log HTTP detalhado                                         |

## Arquivo de configuração

`theme authorize` cria um arquivo `.nube` no seu diretório de trabalho. Ele contém informações sensíveis — incluindo seu token de acesso — e não deve ser commitado no controle de versão. Adicione-o ao seu `.gitignore`.

:::info
Cada diretório de trabalho está vinculado a um fluxo de trabalho. Comandos de tema não funcionarão em um diretório configurado para FTP, e vice-versa.
:::

## Rate limits

A API Nuvemshop aplica limites de taxa. Se o CLI receber uma resposta `429 Too Many Requests`, ele aguarda automaticamente e tenta novamente. Durante operações em lote como `theme push` (que envia arquivos em paralelo), o CLI limita a concorrência a 2 uploads simultâneos para respeitar os limites da API.

## Próximos passos

- [Desenvolvimento de Tema](./theme-development) — Baixar, enviar e monitorar arquivos de tema
- [Instalações de Tema](./theme-installations) — Criar, clonar, fazer fork, publicar e excluir instalações
