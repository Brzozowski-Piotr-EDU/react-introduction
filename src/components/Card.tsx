import { ReactNode } from "react";
import cardAdornment1 from "../assets/card-adornment-1.png";
import cardAdornment2 from "../assets/card-adornment-2.png";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="card">
      <img
        className="card__adorment--first"
        src={cardAdornment1}
        alt="Card adornment with balloons"
      ></img>
      {children}
      <img
        className="card__adorment--second"
        src={cardAdornment2}
        alt="Card adornment with happy birthday text"
      ></img>
    </div>
  );
};
