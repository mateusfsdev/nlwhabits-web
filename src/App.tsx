import { Habit } from "./components/Habit";


export default function App() {
  return (
    <div className="flex h-[100vh] flex-col bg-stone-800 justify-center items-center">
      <h1 className="font-bold text-3xl items-center text-purple-500">hello</h1>
      <Habit completed={3}/>
      <Habit completed={5}/>
      <Habit completed={6}/>
      <Habit completed={8}/>

    </div>
  )
}
