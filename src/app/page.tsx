import StatCard from "@/components/layout/StatCard";
import Dashboard from "@/components/pages/DashboardPage";
import Image from "next/image";

import { db } from "@/db"
import * as p from "drizzle-orm/pg-core"

export const screen = p.pgTable("screen", {
  uid: p.integer().primaryKey(),
  date: p.date().notNull(),
  hrs: p.integer().notNull(),
  mins: p.integer().notNull(),
  cat: p.text().notNull(),
  app: p.text(),
  notes: p.text()
});

async function insertScreenTimeEntry(
  uid: number, date: Date, hrs: number, mins: number, cat: string, app?: string, notes?: string) {

  console.log(app)
  console.log(notes)
  
  await db.insert(screen).values({
    uid: uid,
    date: date,
    hrs: hrs,
    mins: mins,
    cat: cat,
    app: app,
    notes: notes
  })
} 

try {
  await insertScreenTimeEntry(
    1, new Date(2026, 4), 12, 40
  );    
}
catch (error) {
  console.log("The error is " + error)
}

export default function Home() {
  return (
    <Dashboard/>
  );
}
