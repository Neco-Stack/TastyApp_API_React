import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './MealDetails.css';
import { Meal } from '../../types/Meal';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const MealDetails: React.FC = () => {
  const { mealId } = useParams<{ mealId: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    const loadMealDetails = async () => {
      try {
        if (mealId) {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
          const data = await response.json();
          setMeal(data.meals ? data.meals[0] : null);
        }
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    loadMealDetails();
  }, [mealId]);

  if (!meal) return <div>Loading...</div>;

  const ingredients = Object.keys(meal)
    .filter((key) => key.startsWith("strIngredient") && meal[key as keyof Meal])
    .map((key) => {
      const measureKey = `strMeasure${key.slice(13)}`; 
      return `${meal[key as keyof Meal]} ${meal[measureKey as keyof Meal] || ""}`.trim();
    });

  return (
    <div className="meal-details">
        <Header />
      <main>
        <div className="meal-details-content">
          <div className="meal-image">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
          <div className="meal-info">
            <h3>Instructions</h3>
            <ul>
              {meal.strInstructions.split('.').map((instruction, index) => (
                instruction.trim() && <li key={index}>{instruction.trim()}.</li>
              ))}
            </ul>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MealDetails;
