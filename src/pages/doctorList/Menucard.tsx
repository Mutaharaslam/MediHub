interface IMenuCard {
  cardText: string;
  CardIcon: () => JSX.Element;
}
export const Menucard = ({ CardIcon, cardText }: IMenuCard) => {
  return (
    <div className="rounded-xl shadow-custom flex flex-1 h-16 3xl:w-52 items-center gap-x-3 bg-gray-300 mb-4">
      <div className="bg-black-secondary h-full flex items-center rounded-tl-lg rounded-bl-lg p-3">
        <CardIcon />
      </div>
      <div className="bg-gray-300 h-full flex items-center">
        <p className="sm:text-[0.85rem] text-sm">{cardText}</p>
      </div>
    </div>
  );
};
