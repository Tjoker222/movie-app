import { Background } from "../Background";
import { Navbar } from "../Navbar";

interface DefaultLayoutProps {
  children: JSX.Element;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Navbar />
      <Background/>
      {children}
    </>
  );
}
