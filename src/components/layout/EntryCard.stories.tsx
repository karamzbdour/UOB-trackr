import type { Meta, StoryObj } from "@storybook/react";                                                                                            
  import EntryCard from "./EntryCard";                                                                                                             
                                               
  const meta: Meta<typeof EntryCard> = {
    title: "layout/EntryCard",
    component: EntryCard,                                                                                                                            
  };
                                                                                                                                                     
  export default meta;                                                                                                                             
                                               
  type Story = StoryObj<typeof EntryCard>;

  export const Default: Story = {
    args: {
      entry: {
        date: "2026-03-29",
        bedtime: "2026-03-29T23:00:00Z",                                                                                                             
        wakeTime: "2026-03-30T07:00:00Z",
        quality: 8,                                                                                                                                  
        notes: "Slept well",                                                                                                                       
      },                                                                                                                                             
      onEdit: () => console.log("edit clicked"),                                                                                                   
      onDelete: () => console.log("delete clicked"),
    },                                                                                                                                               
  };
                                                                                                                                                     
  export const NoNotes: Story = {                                                                                                                  
    args: {                                    
      entry: {
        date: "2026-03-28",
        bedtime: "2026-03-28T00:30:00Z",                                                                                                             
        wakeTime: "2026-03-28T06:45:00Z",
        quality: 5,                                                                                                                                  
      },                                                                                                                                           
    },                                                                                                                                               
  };                                                                                                                                               
                                               
  export const WithCycles: Story = {
    args: {
      entry: {                                                                                                                                       
        date: "2026-03-27",
        bedtime: "2026-03-27T22:30:00Z",                                                                                                             
        wakeTime: "2026-03-28T06:30:00Z",                                                                                                          
        quality: 7,                                                                                                                                  
        cycles: [
          { start: "2026-03-27T22:30:00Z", end: "2026-03-28T00:00:00Z", depth: "light" },                                                            
          { start: "2026-03-28T00:00:00Z", end: "2026-03-28T02:00:00Z", depth: "deep" },                                                             
          { start: "2026-03-28T02:00:00Z", end: "2026-03-28T04:00:00Z", depth: "rem" },                                                              
        ],                                                                                                                                           
      },                                                                                                                                             
    },                                                                                                                                               
  };                                                                                                                                               
                                               
  export const ReadOnly: Story = {
    args: {
      entry: {
        date: "2026-03-26",
        bedtime: "2026-03-26T23:15:00Z",                                                                                                             
        wakeTime: "2026-03-27T07:30:00Z",
        quality: 9,                                                                                                                                  
      },                                                                                                                                           
    },                                                                                                                                               
  };