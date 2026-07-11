import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  title: string;
  values: string[];
  onChange: (values: string[]) => void;
}

export default function ChipInput({
  title,
  values,
  onChange,
}: Props) {
  const [input, setInput] = useState("");

  function addChip() {
    const value = input.trim();

    if (!value) return;

    if (values.includes(value)) {
      setInput("");
      return;
    }

    onChange([...values, value]);

    setInput("");
  }

  function removeChip(value: string) {
    onChange(values.filter((v) => v !== value));
  }

  return (
    <div className="rounded-2xl bg-slate-900
border
border-slate-800
hover:border-cyan-500/40
hover:shadow-lg
hover:shadow-cyan-500/10
transition-all
duration-300 p-6">
      <h2 className="text-white font-semibold mb-5">
        {title}
      </h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {values.map((value) => (
          <div
            key={value}
            className="flex items-center gap-2 rounded-full bg-cyan-500/20 px-3 py-1"
          >
            <span className="text-cyan-300">
              {value}
            </span>

            <button
              onClick={() => removeChip(value)}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder={`Add ${title}`}
          className="flex-1 rounded-xl bg-slate-800 border border-slate-700 px-4 py-2 text-white"
        />

        <button
          onClick={addChip}
          className="rounded-xl bg-cyan-500 px-4 text-black font-semibold"
        >
          Add
        </button>
      </div>
    </div>
  );
}