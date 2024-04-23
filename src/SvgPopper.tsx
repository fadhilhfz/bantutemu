import briefcase from "./assets/briefcase.svg";

function SvgPopper() {
  return (
    <div>
      <img src={briefcase} alt="briefcase" className="w-32 animate-pulse" />
    </div>
  );
}

export default SvgPopper;
