import "./Main.scss";
import { data } from "../../helper/data";
import Card from "./Card";

const Main = () => {
  return (
    <div className="card-container">
      {/* console.log(data); */}
      {data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </div>
  );
};

export default Main;
