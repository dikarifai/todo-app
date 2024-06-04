import CardItem from "../CardItem/CardItem";

interface SectionItemProps {
  title: string;
}

const SectionItem: React.FC<SectionItemProps> = (props) => {
  return (
    <div className="shadow-md col-span-1 flex flex-col p-6">
      <div className="flex flex-row justify-between mb-5">
        <h1>{props.title}</h1>
        <button>+</button>
      </div>
      <CardItem />
    </div>
  );
};

export default SectionItem;
