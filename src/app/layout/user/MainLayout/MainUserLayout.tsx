import { FC, PropsWithChildren } from "react";
import { Footer, Header } from "./components";

export const MainUserLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-black-2 flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
