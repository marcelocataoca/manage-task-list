interface ItemTask{
  taskName: string;
  levelPriority: string;
}

interface ListTaskProps{
  list: ItemTask[];
}

export function ListTask({list}: ListTaskProps){
  return (
    <p>teste</p>
  )
}