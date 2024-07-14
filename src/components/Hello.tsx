// import { useTranslation } from "next-i18next";

interface HelloProps {
  id: string;
}
const Hello: React.FC<HelloProps> = ({ id }) => {
  // const { t } = useTranslation()
  return <div>hello {id}</div>;
};

export { Hello };
export default Hello;
