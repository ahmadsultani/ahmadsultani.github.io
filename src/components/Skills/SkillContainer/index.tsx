interface SkillContainerProps {
  title: string;
  skills: {
    image: string;
    name: string;
  }[];
}

export default function SkillContainer(props: SkillContainerProps) {
  const { title, skills } = props;
  return (
    <div className="flex flex-col w-[48%] gap-6">
      <span className="z-1 border-l-4 border-yellow-500 w-fit bg-gray-800 bg-opacity-80 pl-6 pr-8 md:pr-16 py-3 text-xl text-white">
        {title}
      </span>
      <div className="flex flex-wrap w-full gap-5">
        {skills.map((skill, index) => (
          <li
            className="flex flex-grow p-4 rounded bg-gray-800 basis-2/5 gap-6 justify-start items-center bg-gray"
            key={index}
          >
            <img
              className="h-8 w-8 object-cover object-center "
              src={skill.image}
              alt="content"
              sizes="8px"
              loading="lazy"
            />
            <h2 className="text-sm text-white">{skill.name}</h2>
          </li>
        ))}
      </div>
    </div>
  );
}
