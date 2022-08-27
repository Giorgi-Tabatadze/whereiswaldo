import LevelCard from "./card";

function LevelSelector(props) {
  const { levels } = props;
  return (
    <div className="level-selector">
      <div>
        {levels.map((level) => {
          return (
            <LevelCard
              img={level.cardImage}
              alt={level.alt}
              levelName={level.name}
              id={level.id}
            />
          );
        })}{" "}
      </div>
    </div>
  );
}

export default LevelSelector;
