import { recipesData } from './data/recipes';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipesData.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>

      <footer className="text-center text-xs text-slate-400 py-6 border-t">
        SkillMe Week 1 • Recipe Cards with Components & Props
      </footer>
    </div>
  );
}