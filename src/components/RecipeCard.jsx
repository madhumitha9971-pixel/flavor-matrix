import IngredientList from './IngredientList';

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-md transition">
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white ${
            recipe.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
          }`}
        >
          {recipe.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
        </span>
        <span className="absolute top-3 right-3 bg-black/60 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
          ⏱️ {recipe.time} min
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-emerald-600 mb-1">
          {recipe.category}
        </span>
        <h3 className="font-bold text-slate-800 text-lg mb-3 leading-snug">
          {recipe.name}
        </h3>

        <IngredientList ingredients={recipe.ingredients} />
      </div>
    </div>
  );
}