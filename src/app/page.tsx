"use client"
import Image from "next/image";
import EntryCard from "@/components/layout/EntryCard";
import StatCard from "@/components/layout/StatCard";
import { trpc } from "@/shared/trpc";
import { useAuth } from "@/lib/useAuth";
const sampleEntry = {
  date: "2026-04-04",
  bedtime: "2026-04-03T22:30:00Z",
  wakeTime: "2026-04-04T06:30:00Z",
  quality: 8,
  notes: "Feeling rested today!",
};

export default function Home() {
  useAuth();
  let {data, isLoading,error} = trpc.auth.me.useQuery()
  if (isLoading || !data) {
    return <>
    <h1>
      Loading ...
      </h1></>
  }


  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white m:items-start">
        Welcome back, {data.name}
        
        <StatCard title={"Avg sleep"} value={"7.2h"} />
        <StatCard title={""} value={""}/>
      </main>
    </div>
  );
}
