import DogInfo from "./dogInfo.json";

export default function DogBreedList() {
  return (
    <div className="dog_breed">
      {DogInfo.map((dog) => (
        <div key={dog.id}>{dog.name}</div>
      ))}
    </div>
  );
}
