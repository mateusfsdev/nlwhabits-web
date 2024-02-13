
/**
 * propriedade: informação enviada para modificar o componente
 * components: reaproveitar codigo ou isolar

 * interface ou type é a descrição para o typescript 
 * temos que declarar quais as propriedades da fuction Habit
 * no html sao os atributos como src alt... 
 * aqui sao chamadas de props
 */

interface HabitProps {
  completed: number
}
//acessando ass props como parametro da função e mencionando o padrao HabitProps
export function Habit(props: HabitProps) {
  //variavel se chama com chaves
  return <div className='bg-stone-900/50 rounded m-8 p-6 items-center flex justify-center font-bold size-8 text-purple-500'>{props.completed}</div>


}