// import { useTranslation } from "next-i18next";
import useTranslation from "next-translate/useTranslation";

interface HelloProps {
  id: string;
}
const Hello: React.FC<HelloProps> = ({ id }) => {
  const { t } = useTranslation();
  console.log("HERE");
  return (
    <>
      <div>
        {t("common:description")} {id}
      </div>
      <div>
        {t("hello:description")} {id}
      </div>
    </>
  );
};

export { Hello };
export default Hello;
