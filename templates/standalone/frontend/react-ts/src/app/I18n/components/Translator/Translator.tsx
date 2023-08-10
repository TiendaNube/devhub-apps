import { useTranslation } from "react-i18next";

const Translator = ({ path }: { path: string }) => {
  const { t } = useTranslation();
  return t(path);
};

export default Translator;
