import { IConfig } from "./useConfig.types";

const useConfig = (): {
  config: IConfig | null;
  setConfig: (config?: IConfig) => void;
} => {
  const storage = localStorage.getItem("config");
  const config = storage ? (JSON.parse(storage as string) as IConfig) : null;

  const setConfig = (config?: IConfig) => {
    localStorage.setItem("config", JSON.stringify(config ?? {}));
  };

  return { config, setConfig };
};

export default useConfig;
