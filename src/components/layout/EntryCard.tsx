import type { SleepEntry } from "@/lib/validators";

type EntryCardProps = {
  entry: SleepEntry;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function EntryCard({ entry, onEdit, onDelete }: EntryCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{entry.date}</p>
        <div className="flex gap-2">
          {onEdit && (
            <button
              onClick={onEdit}
              className="text-sm text-blue-600 hover:underline"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={onDelete}
              className="text-sm text-red-600 hover:underline"
            >
              Delete
            </button>
          )}
        </div>
      </div>
      <p className="mt-2 text-lg font-semibold">
        {entry.bedtime} → {entry.wakeTime}
      </p>
      <div className="mt-2 flex gap-4 text-sm text-gray-600">
        <span>Quality: {entry.quality}/10</span>
        {entry.notes && <span>· {entry.notes}</span>}
      </div>
    </div>
  );
}
