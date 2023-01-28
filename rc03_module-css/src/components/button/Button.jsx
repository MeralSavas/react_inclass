// import "./Button.css";
import ButtonStyle from "./button.module.css";

//* Eğer CSS'deki class adi kebap-case seklinde yazilmis ise
//* module ile bu class'a erismek icin ornekte goruldugu gibi
//* koseli parentez ile erisim yapilir.Koseli parentez erisimi
//* en garanti yontemdir.

//* ORN:moduleName["class-adi"]

const Button = ({ btn }) => {
  console.log(btn);
  return (
    <div className={ButtonStyle.title}>
      <button className={ButtonStyle["btn-blue"]}>{btn}</button>
    </div>
  );
};

export default Button;
