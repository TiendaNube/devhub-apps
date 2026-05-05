---
title: Desenvolvimento de Tema
sidebar_position: 5
---

# Desenvolvimento de Tema

Use `theme pull`, `theme push` e `theme watch` para sincronizar arquivos entre sua máquina local e uma instalação de tema na sua loja via Fork workflow.

:::info
Antes de usar esses comandos, execute `theme authorize` para conectar o CLI à sua loja. Veja [Fork workflow](./api-workflow) para instruções de configuração.
:::

## Baixar (Pull)

Baixe todos os arquivos de tema de uma instalação para o seu diretório de trabalho local:

```bash
nuvemshop theme pull
```

O CLI busca cada arquivo da instalação e os grava no seu diretório atual, preservando a estrutura de pastas do tema:

```
meu-tema/
├── blocks/            ← Templates de bloco (.tpl)
├── config/            ← Schema de configurações e configurações do lojista
├── layouts/           ← Estrutura HTML principal
├── locales/           ← Arquivos de tradução
├── sections/          ← Templates de seção (.tpl)
├── snippets/          ← Partials compartilhados (.tpl)
├── static/            ← CSS, JS e outros assets
├── templates/         ← Templates de página (.json)
└── manifest.json      ← Gerado pelo CLI (não faz parte do tema)
```

### manifest.json

Após o download, o CLI gera um arquivo `manifest.json` no seu diretório de trabalho com metadados sobre a instalação:

```json
{
  "theme": "ipanema",
  "theme_version": "1.0.0",
  "forked": false,
  "revision_token": "<REVISION_TOKEN>",
  "installation_id": "4541834"
}
```

Esse arquivo é **apenas local** — nunca é enviado quando você faz push ou watch. Ele ajuda a rastrear de qual instalação e revisão vieram seus arquivos locais.

### Opções

| Opção                    | Descrição                                                                                          |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| `--installation-id <id>` | Aponta para uma instalação específica (padrão: a instalação vinculada a este diretório em `.nube`) |
| `-y`                     | Pula os prompts de confirmação                                                                     |
| `-v`                     | Ativa a saída detalhada                                                                            |

:::warning
Baixar sobrescreve os arquivos locais. Se você tiver alterações não commitadas, faça commit ou stash antes de baixar.
:::

## Enviar (Push)

Envie seus arquivos de tema locais para a instalação de tema:

```bash
nuvemshop theme push
```

O CLI lê cada arquivo local, determina o formato com base na extensão e o envia para a instalação:

| Extensão                      | Formato de envio                       |
| ----------------------------- | -------------------------------------- |
| `.json`                       | Analisado e enviado como JSON          |
| `.tpl`, `.css`, `.js`, `.svg` | Enviado como texto                     |
| Todo o resto                  | Enviado como binário codificado Base64 |

### Opções

| Opção                    | Descrição                                                                                          |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| `--installation-id <id>` | Aponta para uma instalação específica (padrão: a instalação vinculada a este diretório em `.nube`) |
| `-y`                     | Pula os prompts de confirmação                                                                     |
| `-v`                     | Ativa a saída detalhada                                                                            |

### O que é enviado

O CLI envia todos os arquivos do seu diretório de trabalho, com as seguintes exclusões:

- **Paths com ponto no início** — arquivos e diretórios que começam com `.` (como `.nube`, `.git`, `.vscode`) são sempre ignorados
- **`manifest.json`** — o manifesto local nunca é enviado
- **Paths restritos por fork** — se a instalação não for forkada, apenas `custom/`, `templates/` e `config/settings_data.json` podem ser enviados (veja abaixo)

Arquivos vazios (zero bytes) não são exclusões — eles geram um erro por arquivo, e o push geral é reportado como falho.

### Regras de fork

Antes de enviar, o CLI verifica se a instalação alvo foi **forkada**. Isso determina quais arquivos você pode enviar:

**Instalação sem fork** — você só pode enviar arquivos de personalização:

- `custom/**` — arquivos customizados
- `templates/**` — templates de página (`.json`)
- `config/settings_data.json` — configurações do lojista

**Instalação com fork** — você pode enviar qualquer arquivo do tema.

Arquivos fora dos caminhos permitidos são silenciosamente ignorados. Se você precisar modificar layouts, seções, blocos ou outro código do tema, [faça fork da instalação](./theme-installations#fork) primeiro.

## Monitorar (Watch)

Monitore seus arquivos locais e envie automaticamente as alterações ao salvar:

```bash
nuvemshop theme watch
```

O modo watch monitora seu diretório de trabalho em busca de alterações. Quando você salva um arquivo, ele é enviado para a instalação imediatamente. Quando você exclui um arquivo localmente, ele também é excluído da instalação.

As mesmas regras de envio e restrições de fork do `theme push` se aplicam — o modo watch não enviará arquivos que o push ignoraria.

### Recarga do navegador

Por padrão, o CLI abre uma janela de navegador controlada pelo Puppeteer exibindo a loja com o parâmetro de pré-visualização `?theme_installation_id=<id>`, para que você veja a instalação em que está trabalhando (e não a produtiva). Após cada envio ou exclusão bem-sucedida, a página é recarregada automaticamente. Use `--no-browser` para pular isso.

:::tip
O recurso de navegador usa o Puppeteer, que pode precisar baixar o Chromium na primeira execução. Use `--no-browser` para pular isso e depender de testes manuais no navegador.
:::

### Opções

| Opção                    | Descrição                                                                                          |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| `--installation-id <id>` | Aponta para uma instalação específica (padrão: a instalação vinculada a este diretório em `.nube`) |
| `--no-browser`           | Não abre nem recarrega uma janela de navegador                                                     |
| `-v`                     | Ativa a saída detalhada                                                                            |

## Fluxo de desenvolvimento típico

Um ciclo de desenvolvimento comum se parece com isso:

1. **Criar ou clonar** uma instalação para trabalhar: `nuvemshop theme installation clone`
2. **Baixar** os arquivos da instalação (vincula o diretório a essa instalação): `nuvemshop theme pull --installation-id ID`
3. **Fazer fork** se você precisar editar o código do tema: `nuvemshop theme installation fork`
4. **Iniciar o modo watch**: `nuvemshop theme watch`
5. **Editar** templates, seções e configurações no seu editor — as alterações sincronizam automaticamente
6. **Pré-visualizar** com o navegador que recarrega automaticamente, ou gerar um link: `nuvemshop theme installation preview-url`
7. **Publicar** quando estiver pronto: `nuvemshop theme installation publish`
