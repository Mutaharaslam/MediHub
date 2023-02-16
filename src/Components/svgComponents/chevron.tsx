
interface IChevron {
  customClass?: string;
  color?: any;
  height?: any;
  width?: any;
}

const Chevron = ({ customClass, color, width = 8, height = 14 }: IChevron) => {
  return (
    <div className={customClass}>
      <svg width={width} height={height} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L4 4L1 7" stroke={color} />
      </svg>
    </div>

  );
};

export default Chevron;
