export default function SectionHeader({ eyebrow, title, description, tag = "h2", className = "" }) {
  const TitleTag = tag

  return (
    <div className={className}>
      {eyebrow && (
        <div className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-semibold text-sky-600">
          <span className="h-px flex-1 bg-sky-200" />
          <span>{eyebrow}</span>
          <span className="h-px flex-1 bg-sky-200" />
        </div>
      )}

      <TitleTag className="font-black tracking-tight leading-tight text-slate-950">
        {title}
      </TitleTag>

      {description && (
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  )
}
