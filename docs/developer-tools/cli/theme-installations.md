---
title: Instalações de Tema
sidebar_position: 4
---

# Instalações de Tema

Uma **instalação de tema** é uma instância de tema com escopo de loja — uma cópia de trabalho com seus próprios arquivos, configurações e estado. Sua loja tem uma instalação **produtiva** (ativa na loja) e pode ter uma segunda que serve como rascunho ou experimento.

:::warning Duas instalações por vez
Uma loja pode ter no máximo **duas instalações** em qualquer momento. Se você atingiu o limite e quer criar uma nova, [exclua](#excluir) uma instalação não-produtiva existente para liberar o espaço.
:::

O Nuvemshop CLI permite que você gerencie o ciclo de vida completo das instalações pelo terminal:

```
criar → baixar → enviar/monitorar → fork (opcional) → publicar → excluir
```

`theme pull --installation-id <id>` salva o ID da instalação em `.nuvem`, para que os comandos subsequentes a utilizem como alvo sem precisar de `--installation-id` a cada vez.

Todos os comandos de instalação estão no grupo `theme installation`:

```bash
nuvemshop theme installation <comando>
```

:::info
Antes de usar esses comandos, execute `theme authorize` para conectar o CLI à sua loja. Veja [Fork workflow](./api-workflow) para instruções de configuração.
:::

## Listar

Liste todas as instalações de tema na sua loja:

```bash
nuvemshop theme installation list
```

A saída mostra o ID, título, versão do tema, se é produtiva (ativa) e se foi feito fork de cada instalação. Use `--json` para saída legível por máquina:

```bash
nuvemshop theme installation list --json
```

### Opções

| Opção    | Descrição                              |
| -------- | -------------------------------------- |
| `--json` | Exibe a saída em JSON em vez de tabela |
| `-v`     | Ativa a saída detalhada                |

## Criar

Crie uma nova instalação a partir de um código de tema:

```bash
nuvemshop theme installation create --theme-code CODIGO_DO_TEMA --title "Meu Tema"
```

Isso cria uma instalação nova com base nos arquivos e configurações padrão do tema especificado. O `theme_code` identifica o tema base no catálogo de temas da Nuvemshop.

### Opções

| Opção                 | Descrição                                                 |
| --------------------- | --------------------------------------------------------- |
| `--theme-code <code>` | **Obrigatório.** O código do tema para criar a instalação |
| `--title <name>`      | **Obrigatório.** Um nome legível para a instalação        |
| `-v`                  | Ativa a saída detalhada                                   |

## Selecionando a instalação ativa

Não há um comando `checkout` separado. O CLI vincula um diretório a uma instalação quando você executa:

```bash
nuvemshop theme pull --installation-id ID_DA_INSTALACAO
```

Após um pull bem-sucedido, o ID da instalação é salvo em `.nuvem`. Comandos subsequentes como `theme push`, `theme watch` e `theme installation publish/fork/clone/delete/preview-url` utilizam automaticamente essa instalação quando `--installation-id` é omitido.

Para verificar qual instalação o diretório atual está vinculado:

```bash
nuvemshop theme installation get-current
```

## Clonar

Crie uma cópia idêntica de uma instalação existente:

```bash
nuvemshop theme installation clone
```

Ao contrário do **criar** (que parte dos padrões do tema base), **clonar** duplica uma instalação existente — incluindo qualquer modificação de arquivos, alterações de configurações e personalizações que você fez. Útil quando você quer experimentar mudanças sem afetar o trabalho atual.

### Opções

| Opção                    | Descrição                                                                    |
| ------------------------ | ---------------------------------------------------------------------------- |
| `--installation-id <id>` | A instalação a ser clonada (padrão: a instalação vinculada a este diretório) |
| `-y`                     | Pula os prompts de confirmação                                               |
| `-v`                     | Ativa a saída detalhada                                                      |

## Fork

Faça fork de uma instalação para desbloquear acesso completo aos arquivos:

```bash
nuvemshop theme installation fork
```

### Por que o fork existe

Uma instalação do tema Ipanema separa o **código do tema** das **personalizações**. O código do tema é o núcleo — os layouts, templates de seção, blocos, estilos e scripts que definem a aparência e o comportamento da loja. As personalizações são as partes que variam por loja — quais seções aparecem em cada página, suas configurações e quaisquer arquivos customizados.

A árvore de arquivos de uma instalação baixada tem esta estrutura:

```
meu-tema/
├── blocks/            ← Código do tema: templates de bloco (.tpl)
├── config/
│   ├── settings_schema.json   ← Código do tema: define as configurações disponíveis
│   └── settings_data.json     ← Personalização: valores salvos pelo lojista
├── layouts/           ← Código do tema: estrutura HTML principal
├── locales/           ← Código do tema: arquivos de tradução
├── sections/          ← Código do tema: templates de seção (.tpl)
├── snippets/          ← Código do tema: partials compartilhados (.tpl)
├── static/            ← Código do tema: CSS, JS, assets
├── templates/         ← Personalização: templates de página (.json)
└── custom/            ← Personalização: arquivos adicionados pelo desenvolvedor
```

Por padrão, uma instalação sem fork **protege o código do tema** e permite apenas modificar a camada de personalização:

| Permitido sem fork          | O que contém                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------- |
| `templates/`                | Templates de página (`.json`) — definem quais seções aparecem em cada página, sua ordem e configurações |
| `custom/`                   | Arquivos customizados adicionados pelo desenvolvedor                                                    |
| `config/settings_data.json` | Os valores de configuração salvos pelo lojista                                                          |

Isso significa que você pode reorganizar seções em uma página, alterar configurações ou adicionar arquivos customizados — mas não pode tocar nos templates `.tpl`, estilos, scripts ou qualquer outro arquivo do núcleo.

**Fazer fork** remove essa restrição. Uma vez feito o fork, o CLI permite que você envie **qualquer arquivo** do tema — incluindo layouts, seções, blocos, snippets, assets estáticos e o schema de configurações.

### Quando fazer fork

**Não faça fork** se você só precisa:

- Mudar quais seções aparecem em uma página (editar `templates/*.json`)
- Ajustar configurações de seção (editar `templates/*.json` ou `config/settings_data.json`)
- Adicionar arquivos customizados (adicionar arquivos em `custom/`)

Esse é o caminho mais seguro — sua instalação permanece compatível com futuras atualizações do tema.

**Faça fork** quando precisar:

- Editar a lógica HTML/Twig de uma seção (`sections/*.tpl`)
- Modificar templates de bloco (`blocks/*.tpl`)
- Alterar o layout principal (`layouts/layout.tpl`)
- Atualizar estilos ou scripts (`static/`)
- Adicionar ou modificar traduções (`locales/`)
- Alterar o schema de configurações (`config/settings_schema.json`)

### Opções

| Opção                    | Descrição                                                                    |
| ------------------------ | ---------------------------------------------------------------------------- |
| `--installation-id <id>` | A instalação a ser forkada (padrão: a instalação vinculada a este diretório) |
| `-y`                     | Pula os prompts de confirmação                                               |
| `-v`                     | Ativa a saída detalhada                                                      |

:::warning
Fazer fork é uma **operação sem volta**. Uma vez forkada, uma instalação não pode ser des-forkada. Se você fizer fork de uma instalação já forkada, o CLI trata isso como uma operação sem efeito.
:::

:::info
Apenas **temas baseados em seções** (como o Ipanema) podem ser forkados. A API rejeitará solicitações de fork para temas não seccionáveis.
:::

## Publicar

Torne uma instalação o tema **produtivo** (ativo) na sua loja:

```bash
nuvemshop theme installation publish
```

Publicar torna a instalação visível para todos os visitantes. A instalação anteriormente produtiva é rebaixada — ela ainda existe, mas não está mais ativa.

### Opções

| Opção                    | Descrição                                                                      |
| ------------------------ | ------------------------------------------------------------------------------ |
| `--installation-id <id>` | A instalação a ser publicada (padrão: a instalação vinculada a este diretório) |
| `-y`                     | Pula os prompts de confirmação                                                 |
| `-v`                     | Ativa a saída detalhada                                                        |

:::warning
Publicar substitui o tema ativo atual. Sempre teste suas mudanças com uma [pré-visualização](#url-de-pré-visualização) antes de publicar.
:::

## URL de Pré-visualização

Obtenha uma URL de pré-visualização de uma instalação sem torná-la ativa:

```bash
nuvemshop theme installation preview-url
```

Isso gera uma URL no formato:

```
https://sualojanuvemshop.com.br?theme_installation_id=ID_DA_INSTALACAO
```

Abra no navegador para ver como a instalação fica na loja. A pré-visualização é visível apenas para você — não afeta o que os visitantes veem.

### Opções

| Opção                    | Descrição                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------ |
| `--installation-id <id>` | A instalação a ser pré-visualizada (padrão: a instalação vinculada a este diretório) |

## Excluir

Exclua uma instalação de tema:

```bash
nuvemshop theme installation delete
```

### Opções

| Opção                    | Descrição                                                                     |
| ------------------------ | ----------------------------------------------------------------------------- |
| `--installation-id <id>` | A instalação a ser excluída (padrão: a instalação vinculada a este diretório) |
| `-y`                     | Pula os prompts de confirmação                                                |
| `-v`                     | Ativa a saída detalhada                                                       |

:::warning
Excluir uma instalação é permanente e não pode ser desfeito. Você não pode excluir a instalação produtiva atual.
:::

## Referência rápida

| Comando                          | Descrição                                              |
| -------------------------------- | ------------------------------------------------------ |
| `theme installation list`        | Lista todas as instalações na loja                     |
| `theme installation create`      | Cria uma nova instalação a partir de um código de tema |
| `theme installation get-current` | Mostra a instalação vinculada a este diretório         |
| `theme installation clone`       | Duplica uma instalação existente                       |
| `theme installation fork`        | Desbloqueia acesso completo aos arquivos (sem volta)   |
| `theme installation publish`     | Torna uma instalação ativa na loja                     |
| `theme installation preview-url` | Gera um link de pré-visualização sem publicar          |
| `theme installation delete`      | Remove permanentemente uma instalação                  |
