import { useParams } from "react-router-dom";

import { Header } from "../components/layout/Header.component";
import { Sidebar } from "../components/layout/Sidebar.component";
import { Video } from "../components/widgets/Video.component";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        <div className="flex-1">{slug && <Video lessonSlug={slug} />}</div>
        <Sidebar />
      </main>
    </div>
  );
}
