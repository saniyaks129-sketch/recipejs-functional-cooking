const recipes = [
  {
    id: 1,
    title: "Garlic Butter Pasta",
    time: 20,
    difficulty: "easy",
    description: "A quick and delicious garlic butter pasta perfect for busy evenings.",
    category: "pasta",
  },
  {
    id: 2,
    title: "Chicken Fried Rice",
    time: 30,
    difficulty: "easy",
    description: "Simple stir-fried rice with chicken and vegetables.",
    category: "rice",
  },
  {
    id: 3,
    title: "Paneer Butter Masala",
    time: 45,
    difficulty: "medium",
    description: "Rich and creamy Indian curry made with paneer and tomato gravy.",
    category: "curry",
  },
  {
    id: 4,
    title: "Vegetable Biryani",
    time: 60,
    difficulty: "medium",
    description: "Flavorful rice dish cooked with aromatic spices and mixed vegetables.",
    category: "rice",
  },
  {
    id: 5,
    title: "Beef Wellington",
    time: 120,
    difficulty: "hard",
    description: "A classic gourmet dish with beef fillet wrapped in pastry.",
    category: "main-course",
  },
  {
    id: 6,
    title: "Lasagna",
    time: 75,
    difficulty: "hard",
    description: "Layered pasta with rich tomato sauce, cheese, and herbs.",
    category: "pasta",
  },
  {
    id: 7,
    title: "Greek Salad",
    time: 15,
    difficulty: "easy",
    description: "Fresh salad with cucumber, tomato, olives, and feta cheese.",
    category: "salad",
  },
  {
    id: 8,
    title: "Thai Green Curry",
    time: 50,
    difficulty: "medium",
    description: "Spicy and aromatic curry with coconut milk and vegetables.",
    category: "curry",
  },
];


const recipeContainer = document.querySelector("#recipe-container");


const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};


const renderRecipes = (recipesToRender) => {
  const recipeHTML = recipesToRender
    .map((recipe) => createRecipeCard(recipe))
    .join("");

  recipeContainer.innerHTML = recipeHTML;
};


renderRecipes(recipes);
