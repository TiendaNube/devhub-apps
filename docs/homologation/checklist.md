---
sidebar_position: 2
---

import { Tag, Card, Box, list } from '@nimbus-ds/components';

# Design Checklist

## Checklist de Homologação de Design

O objetivo desse documento é tornar os requisitos de construção e homologação de design mais transparentes. Esses requisitos foram categorizados por urgência e obrigatoriedade.

### Categorização de Urgência

<Box display="flex" flexDirection="column" gap="4">
  <Card>
    <Card.Header><Tag appearance="danger">Prioridade Alta</Tag></Card.Header>
    <Card.Body>
        Itens marcados com essa tag são temas de importância primária, que devem ter a atenção desde o primeiro momento. Se os itens não estiverem de acordo, a homologação pode ser recusada.
    </Card.Body>
  </Card>
  <Card>
    <Card.Header><Tag appearance="warning">Prioridade Média</Tag></Card.Header>
    <Card.Body>
      Itens marcados com essa tag são temas de prioridade secundária, que devem ter a atenção ao longo do desenvolvimento. Se os itens não estiverem de acordo, a homologação pode ser pausada até que os itens sejam contemplados.
  </Card.Body>
  </Card>
  <Card>
    <Card.Header><Tag appearance="success">Prioridade Baixa</Tag></Card.Header>
    <Card.Body>
      Itens marcados com essa tag são temas de prioridade secundária, que devem ter a atenção ao longo do desenvolvimento. Se os itens não estiverem de acordo, a homologação pode ser pausada até que ajustes sejam feitos.
    </Card.Body>
  </Card>
</Box>

### Categorização de Obrigatoriedade

<Box display="flex" flexDirection="column" gap="4">
  <Card>
    <Card.Header><Tag appearance="primary">Obrigatório</Tag></Card.Header>
    <Card.Body>
      Todos os itens marcados com essa tag devem ser verificados e contemplados, não importa qual seja a solução apresentada.
    </Card.Body>
  </Card>
  <Card>
    <Card.Header><Tag appearance="neutral">Recomendado</Tag></Card.Header>
    <Card.Body>
      Todos os itens marcados com essa tag devem ser verificados e avaliados, segundo a necessidade e contexto em que o aplicativo está inserido. Ou seja, deve ser contemplado se o aplicativo apresentar caso de uso ou elemento similar.
    </Card.Body>
  </Card>
</Box>

---

### Uso de Templates Nimbus - Prioridade Alta

Nesse item devemos nos atentar ao uso de templates Nimbus, visando atingir uma maior consistência visual com os produtos Nuvemshop.

- Página de Estado Vazio - Ver Guidelines - Obrigatorio
- Página de Erro - Ver Guidelines - Obrigatorio
- Página de Formulários - Ver Guidelines - Recomendado
- Página de Ajustes - Ver Guidelines - Recomendado
- Modal de Confirmação - Ver Guidelines - Recomendado
- Página de Tabela Simples - Ver Guidelines - Recomendado
- Página de Tabela de Produtos - Ver Guidelines - Recomendado
- Limites de Personalização de Templates - Ver Guidelines - Obrigatório

### 2.0 Uso de Componentes e Patterns - Prioridade Alta

Nesse item devemos nos atentar à atribuição dos componentes e padrões segundo suas respectivas documentações.

- [ ] 2.1 Componentes Atômicos e Compostos - Ver Guidelines - Obrigatório
- [ ] 2.2 Padrões de Composição - Ver Guidelines - Recomendado
- [ ] 2.3 Componentes de Formulários - Ver Guidelines - Recomendado
- [ ] 2.4 Limites de Personalização e Flexibilidade - Ver Guidelines - Obrigatório

### 3.0 Uso de Conceitos de UX/UI - Prioridade Média

Nesse item devemos nos atentar aos comportamentos e disposição de elementos, visando atingir uma maior consistência com os produtos Nuvemshop.

- [ ] 3.1 Priorização e Organização de Ações e Conteúdos - Ver Guidelines - Obrigatório
- [ ] 3.2 Sinalização de Status e Padronização de Elementos - Ver Guidelines - Recomendado
- [ ] 3.3 Mensagens de Feedback e Confirmações - Ver Guidelines - Recomendado
- [ ] 3.4 Processamento e Carregamento de Informação - Ver Guidelines - Recomendado
- [ ] 3.5 Organização de Dados em Tabelas - Ver Guidelines - Recomendado
- [ ] 3.6 Responsividade e Alinhamento dos Elementos - Ver Guidelines - Obrigatório
- [ ] 3.7 Organização e Sinalização em Formulários - Ver Guidelines - Recomendado

### 4.0 Uso de Conceitos de UX Writing - Prioridade Baixa

- [ ] 4.1 Nomenclatura de Apps e Telas - Ver Guidelines - Obrigatório
- [ ] 4.2 Fundamentos de UX Writing - Ver Guidelines - Obrigatório
- [ ] 4.3 Tom de Voz Nuvemshop - Ver Guidelines - Obrigatório
- [ ] 4.4 Padrões de Texto - Ver Guidelines - Obrigatório
