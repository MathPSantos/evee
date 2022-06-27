import { GithubLogo, MoonStars, TextIndent } from "phosphor-react";
import { Logo } from "./Logo.component";

export function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-gray-700 border-b border-b-gray-600">
      <Logo />

      <div className="flex items-center gap-2">
        <button
          className="w-10 h-10 flex items-center justify-center text-white bg-gray-600 rounded-lg transition hover:brightness-90"
          title="Toggle to White theme"
        >
          <MoonStars size={20} />
        </button>

        <a
          className="w-10 h-10 flex items-center justify-center text-white bg-gray-600 rounded-lg transition hover:brightness-90"
          title="Open github repo"
          href="#"
        >
          <GithubLogo size={20} />
        </a>

        <button
          className="w-10 h-10 flex items-center justify-center text-white bg-gray-600 rounded-lg transition hover:brightness-90"
          title="Toggle sidebar show"
        >
          <TextIndent size={20} />
        </button>
      </div>
    </header>
  );
}
