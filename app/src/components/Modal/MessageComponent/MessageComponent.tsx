interface Props {
  message: string;
}
export function MessageComponent({ message }: Props) {
  return (
    <p
      style={{
        margin: "32px 0",
      }}
    >
      {message}
    </p>
  );
}
