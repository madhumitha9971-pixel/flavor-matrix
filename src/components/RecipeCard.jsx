import { useState } from 'react';
import IngredientList from './IngredientList';

export default function RecipeCard({ recipe, onStartCooking, onTogglePlanner, isPlanned }) {
  const [servings, setServings] = useState(recipe.baseServings || 2);
  const multiplier = servings / (recipe.baseServings || 2);

  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 group">
      {/* Card Image & Badges */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        
        {/* Veg / Non-Veg Badge */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-sm ${
            recipe.isVeg ? 'bg-emerald-500/90 text-white' : 'bg-rose-500/90 text-white'
          }`}>
            {recipe.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
          </span>
          <span className="bg-slate-900/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-xs font-semibold">
            ⏱️ {recipe.time}m
          </span>
        </div>

        {/* Category tag */}
        <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1 rounded-xl shadow-sm">
          {recipe.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-slate-800 text-base leading-snug group-hover:text-emerald-600 transition-colors">
            {recipe.name}
          </h3>
          <span className="text-amber-500 text-xs font-bold flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
            ★ {recipe.rating}
          </span>
        </div>

        <p className="text-slate-500 text-xs line-clamp-2 mb-4 leading-relaxed">
          {recipe.description}
        </p>

        {/* Servings Adjuster */}
        <div className="flex items-center justify-between bg-slate-50 px-3 py-2 rounded-xl border border-slate-100 mb-3">
          <span className="text-xs font-semibold text-slate-600">Servings</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setServings(Math.max(1, servings - 1))}
              className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100 shadow-xs"
            >
              -
            </button>
            <span className="text-xs font-bold text-emerald-700 w-4 text-center">{servings}</span>
            <button
              onClick={() => setServings(servings + 1)}
              className="w-6 h-6 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100 shadow-xs"
            >
              +
            </button>
          </div>
        </div>

        {/* Ingredient List Component with Props */}
        <div className="flex-grow">
          <IngredientList ingredients={recipe.ingredients} servingsMultiplier={multiplier} />
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
          <button
            onClick={() => onStartCooking(recipe)}
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-sm shadow-emerald-100 transition-all text-center"
          >
            👨‍🍳 Cook Mode
          </button>
          <button
            onClick={() => onTogglePlanner(recipe)}
            className={`w-full py-2.5 text-xs font-semibold rounded-xl transition-all text-center border ${
              isPlanned
                ? 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {isPlanned ? '✓ Planned' : '+ Meal Plan'}
          </button>
        </div>
      </div>
    </div>
  );
}
