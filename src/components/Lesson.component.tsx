import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const params = useParams<{slug: string}>();

  const typeText = {
    live: "Ao vivo",
    class: "Aula prática",
  }[type];

  const isLessonAvailable = isPast(availableAt);
  const availabledDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBr,
    }
  );

  const isActiveLesson = slug === params.slug

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availabledDateFormatted}</span>

      <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors ${isActiveLesson && 'bg-green-500'}`}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={`text-s font-medium flex items-center gap-2 ${isActiveLesson ? "text-white" : ""}`}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={`text-xs rounded px-2 py-[0.125rem] border uppercase font-bold ${isActiveLesson ? "border-white" : "border-green-300"}`}>
            {typeText}
          </span>
        </header>

        <strong className={`mt-5 block ${isActiveLesson ? "text-white" : "text-gray-200"}`}>{title}</strong>
      </div>
    </Link>
  );
}
