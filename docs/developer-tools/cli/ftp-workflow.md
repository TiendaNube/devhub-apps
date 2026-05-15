---
title: Fluxo FTP (legado)
sidebar_position: 6
---

# Fluxo FTP (legado)

:::info
O [Fork workflow](./api-workflow) oferece recursos mais completos (gerenciamento de instalações, URLs de pré-visualização, fork/clone/publicar), mas atualmente suporta apenas o tema **Ipanema**. Para todos os outros temas, o Fluxo FTP (legado) é a opção indicada.
:::

O Nuvemshop CLI suporta sincronização de arquivos de tema via FTP. Todos os comandos FTP estão no grupo `theme ftp`:

```bash
nuvemshop theme ftp <comando>
```

## Configuração

Configure sua conexão FTP:

```bash
nuvemshop theme ftp setup \
  --ftp-server HOST_FTP \
  --ftp-username USUARIO_FTP \
  --ftp-password SENHA_FTP \
  --store-url https://sualojanuvemshop.com.br
```

O CLI testa a conexão FTP e salva as credenciais no arquivo de configuração `.nuvem`.

### Opções

| Opção                   | Descrição                                 |
| ----------------------- | ----------------------------------------- |
| `--ftp-server <host>`   | **Obrigatório.** Hostname do servidor FTP |
| `--ftp-username <user>` | **Obrigatório.** Usuário FTP              |
| `--ftp-password <pass>` | **Obrigatório.** Senha FTP                |
| `--store-url <url>`     | **Obrigatório.** URL da sua loja          |
| `-y`                    | Pula os prompts de confirmação            |
| `-v`                    | Ativa a saída detalhada                   |

:::tip
Você pode encontrar suas credenciais FTP no painel da loja. Procure pela opção "Abrir FTP" nas configurações de tema.
:::

## Baixar (Pull)

Baixe os arquivos de tema do servidor FTP:

```bash
nuvemshop theme ftp pull
```

### Opções

| Opção | Descrição                      |
| ----- | ------------------------------ |
| `-y`  | Pula os prompts de confirmação |
| `-v`  | Ativa a saída detalhada        |

## Enviar (Push)

Envie os arquivos de tema locais para o servidor FTP:

```bash
nuvemshop theme ftp push
```

### Envio incremental (smart push)

Antes de enviar, o CLI compara cada arquivo local com a sua versão no servidor FTP e só envia os que mudaram. Arquivos inalterados são pulados — isso acelera o envio em temas grandes, principalmente em redes lentas.

O CLI também sincroniza exclusões: arquivos que existem no servidor mas não no seu diretório local são removidos do FTP durante o push.

Para forçar o envio de **todos** os arquivos sem comparação com o remoto, use `--force`:

```bash
nuvemshop theme ftp push --force
```

### Opções

| Opção     | Descrição                                                                                     |
| --------- | --------------------------------------------------------------------------------------------- |
| `--force` | Envia todos os arquivos sem comparar com o remoto (ignora a detecção de arquivos inalterados) |
| `-y`      | Pula os prompts de confirmação                                                                |
| `-v`      | Ativa a saída detalhada                                                                       |

## Monitorar (Watch)

Monitore os arquivos locais e sincronize as alterações para o FTP ao salvar:

```bash
nuvemshop theme ftp watch
```

Assim como o modo watch do tema, isso monitora seus arquivos locais e envia as alterações automaticamente. Também lida com exclusões de arquivos. Por padrão, abre uma janela do navegador apontada para a sua loja e a recarrega após cada sincronização bem-sucedida. Use `--no-browser` para pular isso.

### Opções

| Opção          | Descrição                                      |
| -------------- | ---------------------------------------------- |
| `--no-browser` | Não abre nem recarrega uma janela de navegador |
| `-v`           | Ativa a saída detalhada                        |
