import { Habit } from "./components/habit";

export default function App() {
  return (
    <div className="flex h-[100vh] flex-col bg-stone-800 justify-center items-center">
 
      <h1 className="font-bold text-3xl text-purple-500">hello</h1>
      <Habit completed={33} />
      <Habit completed={24} />
      <Habit completed={15} />
      <Habit completed={34} />
      <Habit completed={18} />

    </div>
  )
}
