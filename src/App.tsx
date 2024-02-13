import { Habit } from "./components/habit";

export default function App() {
  return (
    <div className="flex h-[100vh] flex-col bg-stone-800 justify-center items-center">
     <div>
      <h1 className="font-bold text-3xl items-center text-purple-500">hello</h1>
      <Habit completed={33} />


     </div>
    </div>
  )
}
