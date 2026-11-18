export default function MealPlannerWidget({ plannedRecipes, onRemoveFromPlanner, onStartCooking }) {
  if (plannedRecipes.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm max-w-xl mx-auto my-12">
        <div className="text-5xl mb-4">📅</div>
        <h3 className="text-lg font-bold text-slate-800 mb-2">Your Meal Plan is Empty</h3>
        <p className="text-sm text-slate-500 mb-6">Explore recipes and click '+ Meal Plan' to organize your weekly meals here!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
        <h2 className="text-xl font-extrabold text-slate-800 mb-1">Your Weekly Meal Schedule</h2>
        <p className="text-sm text-slate-500 mb-6">Review your queued meals and cooking instructions.</p>

        <div className="space-y-4">
          {plannedRecipes.map((recipe, index) => (
            <div key={recipe.id} className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img src={recipe.image} alt={recipe.name} className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Day {index + 1} Meal</span>
                  <h4 className="font-bold text-slate-800 text-base">{recipe.name}</h4>
                  <p className="text-xs text-slate-500">⏱️ {recipe.time} mins · {recipe.category}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => onStartCooking(recipe)}
                  className="px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-xl hover:bg-emerald-700 shadow-sm transition-all"
                >
                  Cook
                </button>
                <button
                  onClick={() => onRemoveFromPlanner(recipe.id)}
                  className="px-4 py-2 bg-rose-50 text-rose-600 text-xs font-semibold rounded-xl hover:bg-rose-100 transition-all border border-rose-100"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
