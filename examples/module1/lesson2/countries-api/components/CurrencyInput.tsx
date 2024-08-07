export function CurrencyInput({
  currency,
  setCurrency,
}: {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <label className="flex flex-col">
      Currency
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="PLN..."
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
    </label>
  );
}
