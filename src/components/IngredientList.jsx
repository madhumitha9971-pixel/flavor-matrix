export default function IngredientList({ ingredients, servingsMultiplier = 1 }) {
  return (
    <div className="mt-3">
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
        Ingredients ({ingredients.length})
      </h4>
      <ul className="space-y-1.5 max-h-40 overflow-y-auto pr-1 scrollbar-thin">
        {ingredients.map((ing, index) => {
          const calculatedAmount = typeof ing.amount === 'number' 
            ? (ing.amount * servingsMultiplier).toFixed(1).replace(/\.0$/, '') 
            : ing.amount;

          return (
            <li 
              key={ing.item || index} 
              className="flex items-center justify-between text-xs bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"
            >
              <span className="font-medium text-slate-700">{ing.item}</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                {calculatedAmount} {ing.unit}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
