import { Habit } from "./components/Habit";

export default function App() {
  return (
    <div>
      <h1>hello</h1>
      <Habit completed={3}/>
      <Habit completed={5}/>
      <Habit completed={6}/>
      <Habit completed={8}/>

    </div>
  )
}
