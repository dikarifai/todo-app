import SectionItem from "@/components/SectionItem/SectionItem";
import TodoList from "@/components/SectionItem/SectionItem";

const SectionLayout: React.FC = () => {
  return (
    <section className="grid grid-cols-3 w-full gap-3">
      <SectionItem title="To Do"/>
      <SectionItem title="Doing" />
      <SectionItem title="Done" />
    </section>
  );
};

export default SectionLayout;
