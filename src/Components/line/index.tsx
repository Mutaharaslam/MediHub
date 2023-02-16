interface IStraightLine {
  width?: any;
  borderWidth?: any;
  hidden?: boolean
}
export const StraightLine = ({ width = "w-64", borderWidth = "border-1", hidden = false, }: IStraightLine) => {
  return (
    <hr
      className={`${borderWidth} border-secondary cursor-pointer duration-500 ${width}  ${hidden ? 'hidden' : 'block'}`}
    />
  );
};
