export default function Header() {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🍳</span>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Flavor Matrix</h1>
            <p className="text-emerald-100 text-sm">Recipe Cards • Components & Props</p>
          </div>
        </div>
      </div>
    </header>
  );
}