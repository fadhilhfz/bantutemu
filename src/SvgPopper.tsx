import { useEffect, useState } from "react";
import briefcase from "./assets/briefcase.svg";

function SvgPopper() {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const rotate = `rotate(${randomNumber}deg)`;
  console.log(rotate);

  useEffect(() => {
    const interval = setInterval(() => {
      const min = -360;
      const max = 360;
      const rnumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(rnumber);
      console.log("effect fired", rnumber, rotate);
    }, 2250);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <img
        src={briefcase}
        alt="briefcase"
        style={{ transform: rotate }}
        className={`w-32 animate-fadeInOut`}
      />
    </div>
  );
}

export default SvgPopper;
