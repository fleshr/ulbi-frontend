import { AppRouter } from "./providers/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import "./styles/index.scss";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="content-wrapper">
          <AppRouter />
        </div>
      </div>
    </>
  );
};
