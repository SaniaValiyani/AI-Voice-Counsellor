import { Skeleton } from "../ui/skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-6">

      <Skeleton className="col-span-12 h-40 rounded-3xl" />

      <Skeleton className="col-span-4 h-36 rounded-2xl" />
      <Skeleton className="col-span-4 h-36 rounded-2xl" />
      <Skeleton className="col-span-4 h-36 rounded-2xl" />

      <Skeleton className="col-span-6 h-72 rounded-2xl" />
      <Skeleton className="col-span-6 h-72 rounded-2xl" />

      <Skeleton className="col-span-12 h-80 rounded-2xl" />

    </div>
  );
}