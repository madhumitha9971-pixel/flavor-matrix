export default function Header({ totalRecipes, activeTab, setActiveTab }) {
  return (
    <header className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="bg-white/10 p-2.5 rounded-2xl text-2xl backdrop-blur-md shadow-inner">🍳</span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">ChefSync & FlavorMatrix</h1>
              <p className="text-emerald-100 text-sm font-medium">Interactive Culinary Studio & Smart Meal Planner</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20">
          <button
            onClick={() => setActiveTab('explore')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'explore'
                ? 'bg-white text-emerald-800 shadow-md'
                : 'text-white hover:bg-white/10'
            }`}
          >
            Explore Recipes ({totalRecipes})
          </button>
          <button
            onClick={() => setActiveTab('planner')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'planner'
                ? 'bg-white text-emerald-800 shadow-md'
                : 'text-white hover:bg-white/10'
            }`}
          >
            📅 Meal Planner
          </button>
        </div>
      </div>
    </header>
  );
}
