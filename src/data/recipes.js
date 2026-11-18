export const recipesData = [
  {
    id: 1,
    name: "Classic Creamy Paneer Butter Masala",
    category: "Main Course",
    time: 35,
    isVeg: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    description: "Rich and creamy North Indian curry featuring tender paneer cubes in a buttery tomato-cashew gravy.",
    baseServings: 2,
    ingredients: [
      { item: "Paneer cubes", amount: 250, unit: "g" },
      { item: "Ripe tomatoes (pureed)", amount: 4, unit: "pcs" },
      { item: "Butter", amount: 2, unit: "tbsp" },
      { item: "Fresh cream", amount: 3, unit: "tbsp" },
      { item: "Ginger-garlic paste", amount: 1, unit: "tbsp" },
      { item: "Kashmiri red chili powder", amount: 1, unit: "tsp" },
      { item: "Garam masala", amount: 0.5, unit: "tsp" },
      { item: "Kasuri methi (dry fenugreek)", amount: 1, unit: "tbsp" }
    ],
    instructions: [
      "Heat butter in a pan and sauté ginger-garlic paste until fragrant.",
      "Pour in tomato puree and cook until oil separates from the edges.",
      "Add spices (chili powder, garam masala) and salt to taste.",
      "Stir in fresh cream and crushed kasuri methi for richness.",
      "Add paneer cubes, simmer for 5 minutes, and serve hot with naan."
    ]
  },
  {
    id: 2,
    name: "South Indian Special Masala Dosa",
    category: "Breakfast",
    time: 20,
    isVeg: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800",
    description: "Crispy fermented rice and lentil crepe stuffed with spiced potato mash, served with coconut chutney.",
    baseServings: 2,
    ingredients: [
      { item: "Dosa batter", amount: 2, unit: "cups" },
      { item: "Boiled potatoes (mashed)", amount: 3, unit: "pcs" },
      { item: "Sliced onions", amount: 1, unit: "large" },
      { item: "Green chilies & Curry leaves", amount: 4, unit: "pcs" },
      { item: "Mustard seeds & Turmeric", amount: 1, unit: "tsp" },
      { item: "Ghee or oil for roasting", amount: 2, unit: "tbsp" }
    ],
    instructions: [
      "Prepare potato masala by tempering mustard seeds, curry leaves, onions, and turmeric, then tossing in boiled potatoes.",
      "Heat a cast-iron skillet (tava) and spread a ladleful of dosa batter in concentric circles.",
      "Drizzle ghee around the edges and cook until golden brown and crisp.",
      "Place potato filling in the center, fold, and serve hot."
    ]
  },
  {
    id: 3,
    name: "Zesty Herb Grilled Chicken Breast",
    category: "High Protein",
    time: 25,
    isVeg: false,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800",
    description: "Juicy marinated chicken breasts grilled to perfection with lemon, garlic, and fresh rosemary.",
    baseServings: 2,
    ingredients: [
      { item: "Chicken breast", amount: 2, unit: "fillets" },
      { item: "Olive oil", amount: 2, unit: "tbsp" },
      { item: "Minced garlic", amount: 3, unit: "cloves" },
      { item: "Lemon juice", amount: 2, unit: "tbsp" },
      { item: "Dried oregano & thyme", amount: 1, unit: "tsp" },
      { item: "Black pepper & salt", amount: 1, unit: "pinch" }
    ],
    instructions: [
      "Whisk olive oil, garlic, lemon juice, herbs, salt, and pepper in a bowl.",
      "Coat chicken fillets evenly and let marinate for at least 15 minutes.",
      "Grill on medium-high heat for 6-7 minutes per side until fully cooked and charred.",
      "Rest for 5 minutes before slicing and serving."
    ]
  },
  {
    id: 4,
    name: "Classic Italian Margherita Pizza",
    category: "Main Course",
    time: 40,
    isVeg: true,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80&w=800",
    description: "Artisanal thin-crust pizza topped with San Marzano tomato sauce, fresh mozzarella, and sweet basil.",
    baseServings: 2,
    ingredients: [
      { item: "Pizza dough ball", amount: 1, unit: "pc" },
      { item: "Crushed San Marzano tomatoes", amount: 0.5, unit: "cup" },
      { item: "Fresh mozzarella cheese", amount: 120, unit: "g" },
      { item: "Fresh basil leaves", amount: 8, unit: "pcs" },
      { item: "Extra virgin olive oil", amount: 1, unit: "tbsp" }
    ],
    instructions: [
      "Preheat oven to maximum temperature (250°C / 480°F).",
      "Stretch pizza dough on a floured surface into a 12-inch round disc.",
      "Spread tomato sauce evenly, leaving a border for the crust.",
      "Top with torn mozzarella and fresh basil leaves.",
      "Bake for 8-10 minutes until the crust is blistered and cheese is bubbly."
    ]
  },
  {
    id: 5,
    name: "Tropical Avocado & Quinoa Bowl",
    category: "Healthy & Fit",
    time: 15,
    isVeg: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
    description: "Nutrient-dense power bowl packed with protein quinoa, sliced avocado, chickpeas, and lemon-tahini dressing.",
    baseServings: 2,
    ingredients: [
      { item: "Cooked quinoa", amount: 1.5, unit: "cups" },
      { item: "Ripe avocado (sliced)", amount: 1, unit: "pc" },
      { item: "Boiled chickpeas", amount: 1, unit: "cup" },
      { item: "Cherry tomatoes (halved)", amount: 0.5, unit: "cup" },
      { item: "Tahini dressing", amount: 2, unit: "tbsp" }
    ],
    instructions: [
      "Fluff cooked quinoa and divide evenly into serving bowls.",
      "Arrange sliced avocado, chickpeas, and cherry tomatoes neatly on top.",
      "Drizzle creamy tahini dressing over the bowl and garnish with toasted sesame seeds."
    ]
  },
  {
    id: 6,
    name: "Decadent Molten Chocolate Lava Cake",
    category: "Desserts",
    time: 25,
    isVeg: true,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
    description: "Warm individual chocolate cakes with a gooey, flowing molten center that melts in your mouth.",
    baseServings: 2,
    ingredients: [
      { item: "Dark chocolate (chopped)", amount: 100, unit: "g" },
      { item: "Unsalted butter", amount: 50, unit: "g" },
      { item: "Powdered sugar", amount: 0.25, unit: "cup" },
      { item: "Whole eggs", amount: 2, unit: "pcs" },
      { item: "All-purpose flour", amount: 3, unit: "tbsp" }
    ],
    instructions: [
      "Preheat oven to 200°C (400°F) and grease two ramekins with butter and cocoa powder.",
      "Melt dark chocolate and butter together in a heatproof bowl.",
      "Whisk eggs and sugar until pale, then gently fold into the melted chocolate mixture.",
      "Fold in flour until just combined, pour into ramekins, and bake for exactly 11-12 minutes.",
      "Invert onto plates and serve immediately with vanilla ice cream."
    ]
  }
];
