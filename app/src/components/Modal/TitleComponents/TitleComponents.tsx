export interface TitleComponentsProps {
  title: "Nova tarefa" | "Deletar tarefa";
}
export function TitleComponents({ title }: TitleComponentsProps) {
  return <h2>{title}</h2>;
}
