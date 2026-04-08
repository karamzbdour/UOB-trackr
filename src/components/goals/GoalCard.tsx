import type { GoalCard } from "@/lib/validators";

type EntryCardProps = {
  entry: GoalCard;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function PointsCard({ entry }: EntryCardProps) {
  return (
    <div className="flex flex-row justify-between w-[calc(100%)] p-4 rounded-xl border bg-blue-900 shadow-xs left-1/2 top-6">
      
        <p className="text-sm text-gray-500">{entry.goalDesc}</p>
        <p className="text-sm text-black-500">{entry.points}</p>
        <div className="flex gap-2">
        </div>

    </div>
  );
}
