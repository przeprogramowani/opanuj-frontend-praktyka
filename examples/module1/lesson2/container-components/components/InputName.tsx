export default function InputName({
  name,
  setName,
}: {
  name: string;
  setName: (name: string) => void;
}) {
  return (
    <label className="flex flex-col">
      Name
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );
}
