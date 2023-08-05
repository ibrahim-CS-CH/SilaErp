import { useTranslation } from "react-i18next";
const Welcome = () => {
    const { t } = useTranslation();
  return (
    <div>
        <h1>{t("welcom")}</h1>
        <h1>{t("lang")}</h1>

    </div>
  )
}

export default Welcome