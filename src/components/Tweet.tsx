
interface TextProps{
  text: string;
}

export function Tweet({text}: TextProps){
  return(
    <p> {text} </p>
  )
}