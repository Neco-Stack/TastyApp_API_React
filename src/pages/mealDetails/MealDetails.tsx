import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Meal } from '../../types/Meal';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { fetchMealDetails } from "../../services/Api";

const MealDetails: React.FC = () => {
  const { mealId } = useParams<{ mealId: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    const loadMealDetails = async () => {
      if (mealId) {
        try {
          const data = await fetchMealDetails(mealId);
          setMeal(data.meals ? data.meals[0] : null);
        } catch (error) {
          console.error("Error fetching meal details:", error);
        }
      }
    };
  
    loadMealDetails();
  }, [mealId]);

  if (!meal) return <div>Loading...</div>;

  return (
    <>
    <Header />

    <main>
    <section>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h3>Instructions</h3>
        <div>{meal.strInstructions.split('.')[0]?.trim()}</div>
        <div>{meal.strInstructions.split('.')[1]?.trim()}</div>
        <div>{meal.strInstructions.split('.')[2]?.trim()}</div>
        <div>{meal.strInstructions.split('.')[3]?.trim()}</div>
        <div>{meal.strInstructions.split('.')[4]?.trim()}</div>
        <div>{meal.strInstructions.split('.')[5]?.trim()}</div>
        <div>{meal.strInstructions.split('.')[6]?.trim()}</div>
        <div>{meal.strInstructions.split('.')[7]?.trim()}</div>
        <div>{meal.strInstructions.split('.')[8]?.trim()}</div>
        <div>{meal.strInstructions.split('.')[9]?.trim()}</div>
        <div>{meal.strInstructions.split('.')[10]?.trim()}</div>

        <h3>Ingredients</h3>
        <div>{meal.strIngredient1}</div>
        <div>{meal.strIngredient2}</div>
        <div>{meal.strIngredient3}</div>
        <div>{meal.strIngredient4}</div>
        <div>{meal.strIngredient5}</div>
        <div>{meal.strIngredient6}</div>
        <div>{meal.strIngredient7}</div>
        <div>{meal.strIngredient8}</div>
        <div>{meal.strIngredient9}</div>
        <div>{meal.strIngredient10}</div>
        <div>{meal.strIngredient11}</div>
        <div>{meal.strIngredient12}</div>
        <div>{meal.strIngredient13}</div>
        <div>{meal.strIngredient14}</div>
        <div>{meal.strIngredient15}</div>
        <div>{meal.strIngredient16}</div>
        <div>{meal.strIngredient17}</div>
        <div>{meal.strIngredient18}</div>
        <div>{meal.strIngredient19}</div>
        <div>{meal.strIngredient20}</div>

        {meal.strYoutube && (
          <button
            type="button"
            onClick={() => {
              if (meal.strYoutube) {
                window.location.href = meal.strYoutube;
              }
            }}
          >
            Watch on YouTube
          </button>
        )}
      </section> 
    </main>
    <Footer />
    </>
  );
};

export default MealDetails;
