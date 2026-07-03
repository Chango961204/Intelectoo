export default function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-sky-100 border-t-sky-600 animate-spin" />
        <p className="text-sm font-medium text-slate-600">Cargando página…</p>
      </div>
    </div>
  )
}
