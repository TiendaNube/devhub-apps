import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card } from "@nimbus-ds/components";
import { FormField } from "@nimbus-ds/patterns";

import { IConfig } from "@/hooks/useConfig";
import { useConfig } from "@/hooks";

const Configuration: React.FC = () => {
  const { config, setConfig } = useConfig();
  const navigate = useNavigate();

  const [form, setForm] = useState<IConfig>(config ?? ({} as IConfig));

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevState: IConfig) => ({
      ...prevState,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <Card>
      <Card.Header title="Configurar variáveis" />
      <Box
        as="form"
        onSubmit={(evt) => {
          evt.preventDefault();
          setConfig(form as IConfig);
          navigate("/instalation");
        }}
        display="flex"
        flexDirection="column"
        gap="4"
      >
        <FormField.Input
          name="appName"
          label="Nome do aplicativo"
          onChange={onChange}
          value={form?.appName ?? ""}
        />
        <FormField.Input
          name="clientId"
          label="Client ID"
          onChange={onChange}
          value={form?.clientId ?? ""}
          required
        />
        <FormField.Input
          name="apiURL"
          label="Endereço da API"
          placeholder="http://"
          onChange={onChange}
          value={form?.apiURL ?? ""}
          required
        />
        <Button type="submit" appearance="primary">
          Salvar
        </Button>
      </Box>
    </Card>
  );
};

export default Configuration;
