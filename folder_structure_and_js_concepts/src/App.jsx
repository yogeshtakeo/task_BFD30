import "./App.css";

function App() {
  // Array declaration
  const juiceRecipe = ["Apple Juice", " Banana Shake", " Orange Juice"];

  // Array destructuring
  const [firstJuiceRecipe, , thirdJuiceRecipe] = juiceRecipe;
  console.log({ firstJuiceRecipe });
  // Rest parameter
  const [...lastJuiceRecipe] = juiceRecipe;
  console.log({ ...lastJuiceRecipe });

  // spread operator

  const letters1 = ["A", "B", "C", "D"];
  const letters2 = ["J", "K", "L", "M", "N"];
  const combinedletters = [letters1, [...letters2]];

  console.log(combinedletters);

  // array declaration
  const chelseaJuice = [
    {
      name: "Orange Juice",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNjPpC_Bb_tAtqVdxWFww0-BRYmrBtpggvuFMWCARCkvgaPy5tC0g5OlEuJokIma3lK1wjfRCPN7g&usqp=CAU&ec=48665701",
      calories: "39 calories",
      healthBenifits:
        "Drinking orange juice is a very popular way to consume oranges and the drink is often served with breakfast. While it does contain naturally occurring sugar, orange juice is also high in vitamins, minerals, and antioxidants; some brands are fortified to add even more nutrients.",
    },

    {
      name: "Banana Shake",
      image:
        "https://www.indianveggiedelight.com/wp-content/uploads/2022/08/banana-juice.jpg",
      calories: "165 calories",
      healthBenifits:
        "Excellent source of potassium, iron, calcium, and vitamins B3, B5, and B6. High in dietary fiber and boosts immunity.",
    },

    {
      name: "Strawberry Sunrise",
      image:
        "https://recipes.ventray.com/wp-content/uploads/2023/04/Strawberry-Peach-Juice_1200x675-1024x576.jpg",
      calories: "90 calories",
      healthBenifits:
        "Strawberry juice is low in calories and high in fiber, making it a great addition to a weight loss diet. Drinking strawberry juice can help to promote feelings of fullness and reduce overall calorie intake.",
    },

    {
      name: "Breezy Berries",
      image:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2022/05/blueberry-juice.jpg",
      calories: "92 calories",
      healthBenifits:
        "Blueberry juice is an antioxidant-rich drink that provides vitamins C and K. It is low in both fat and protein, but high in manganese and other macronutrients, along with naturally occurring sugars.",
    },
  ];

  // using map function to iterate the arrays
  const juice_array = chelseaJuice.map(function (chelseaJuice) {
    return (
      <>
        <div className="main">
          <div className="array">
            <h2>{chelseaJuice.name}</h2>
            <h3>{chelseaJuice.calories}</h3>
            <p>{chelseaJuice.healthBenifits}</p>
            <a href={chelseaJuice.image}>
              <img src={chelseaJuice.image}></img>
            </a>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="header">
        <header>Welcome to chelsea juice</header>
      </div>

      <div className="nav">
        <nav>
          <a href="https://www.juicegeneration.com/">Home</a>
          <a href="https://www.juicegeneration.com/about">About</a>
          <a href="https://www.juicegeneration.com/menu/fresh-juices">Menu</a>
          <a href="https://www.juicegeneration.com/locations?location_id=4&tab=allitems">
            Locations
          </a>
        </nav>
      </div>

      <div className="block">{juice_array}</div>
      <div className="bottom">
        Juice of The Season: {firstJuiceRecipe} <br />
        Low Calorie Juices: {...lastJuiceRecipe}
      </div>
    </>
  );
}

export default App;
