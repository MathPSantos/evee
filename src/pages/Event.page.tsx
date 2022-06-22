import { Header } from "../components/Header.component";
import { Sidebar } from "../components/Sidebar.component";
import { Video } from "../components/Video.component";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        <div className="flex-1">
          <Video />
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
