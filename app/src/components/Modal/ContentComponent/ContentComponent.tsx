import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

export function ContentComponent({ children }: ContentProps) {
  return <div>{children}</div>;
}
