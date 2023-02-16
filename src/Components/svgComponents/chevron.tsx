
interface IChevron {
  customClass?: string;
}

const Chevron = ({ customClass }: IChevron) => {
  return (
    <div className={customClass}>
      <svg width="8" height="14" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L4 4L1 7" stroke="white" />
      </svg>
    </div>

  );
};

export default Chevron;
