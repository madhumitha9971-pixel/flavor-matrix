import { useState } from 'react';
import { recipesData } from './data/recipes';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import RecipeCard from './components/RecipeCard';
import CookingModeModal from './components/CookingModeModal';
import MealPlannerWidget from './components/MealPlannerWidget';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('explore');
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [plannedIds, setPlannedIds] = useState([]);

  // Extract unique categories
  const categories = ['All', ...new Set(recipesData.map((r) => r.category))];

  // Filter recipes based on search and category
  const filteredRecipes = recipesData.filter((recipe) => {
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesSearch =
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some((ing) => ing.item.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const togglePlanner = (recipe) => {
    if (plannedIds.includes(recipe.id)) {
      setPlannedIds(plannedIds.filter((id) => id !== recipe.id));
    } else {
      setPlannedIds([...plannedIds, recipe.id]);
    }
  };

  const plannedRecipes = recipesData.filter((r) => plannedIds.includes(r.id));

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Header
        totalRecipes={recipesData.length}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'explore' ? (
          <>
            <FilterBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />

            {filteredRecipes.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm max-w-md mx-auto my-12">
                <span className="text-4xl mb-3 block">🍽️</span>
                <h3 className="font-bold text-slate-800 text-lg mb-1">No recipes found</h3>
                <p className="text-xs text-slate-500">Try searching for something else or pick a different category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onStartCooking={(rec) => setActiveRecipe(rec)}
                    onTogglePlanner={togglePlanner}
                    isPlanned={plannedIds.includes(recipe.id)}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <MealPlannerWidget
            plannedRecipes={plannedRecipes}
            onRemoveFromPlanner={(id) => setPlannedIds(plannedIds.filter((i) => i !== id))}
            onStartCooking={(rec) => setActiveRecipe(rec)}
          />
        )}
      </main>

      <CookingModeModal recipe={activeRecipe} onClose={() => setActiveRecipe(null)} />

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-xs text-slate-400 border-t border-slate-200 mt-12">
        ChefSync & FlavorMatrix • Frontend Engineer Virtual Internship Task 1 @SkillMe
      </footer>
    </div>
  );
}
