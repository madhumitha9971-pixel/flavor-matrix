export default function IngredientList({ ingredients }) {
  return (
    <div className="mt-3">
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
        Ingredients
      </h4>
      <ul className="space-y-1.5">
        {ingredients.map((ing, index) => (
          <li
            key={ing.item || index}
            className="flex justify-between text-xs bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"
          >
            <span className="font-medium text-slate-700">{ing.item}</span>
            <span className="font-bold text-emerald-700">
              {ing.amount} {ing.unit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}