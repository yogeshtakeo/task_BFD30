import './App.css'

function App(){

// Array declaration
  const plantTypes=["Annual", "Biennial", "Perinnial"]
  
// Array destructuring 
  const [firstPlanttype, ,thirdPlantType]=plantTypes
  console.log ({firstPlanttype}) 
// Rest parameter  
  const [... lastPlantType]=plantTypes
  console.log({ ...lastPlantType})

// spread operator

const num1 = [1,2,3,4]
const num2 =[3,4,5,6]
const combinedNum=[num1, [...num2]]

console.log(combinedNum)

// array declaration
  const flowers=[
    {
      "name":"Achillea Desert Eve Deep Rose",
     "image":"https://www.allaboutgardening.com/wp-content/uploads/2021/11/Achillea-Desert-Eve-Deep-Rose-960x534.jpg",
      "scientificName":"Scientic name: Yarrow",
      "Description": "Part of the Desert Eve Series, this is one of the earliest blooming Yarrows. It is a wonderfully bright herbaceous perennial that produces large clusters of bright pink flowers. It blooms profusely in late spring for several weeks, and each flower has a fluffy yellow center. This flower is aromatic, semi-evergreen, and compliments most other blooms in any setting. Butterflies adore all Yarrows, so this is a must for any wild or cottage garden. "
    },

    {
      "name":"African Daisy",
      "image":"https://www.allaboutgardening.com/wp-content/uploads/2021/11/African-Daisy-960x534.jpg",
      "scientificName":"Scientific name: Osteosperum",
      "Description":"This is an excellent choice for anyone looking for bright, beautiful blooms all through summer into fall. There are around 70 species of Osteospermum and an increasing number of cultivars, and the Royal Horticultural Society (RHS) lists about 900 varieties. One stem carries a single flower, comprising a central disc surrounded by bright petals. The petals of some species are variegated in color, offering the most stunning bloom. Most petals are flat, but some produce spoon-shaped petals, such as the Osteospermum Sunny Philip. Depending on what zone you live in, different species can be annuals or perennials."
    },

    {
      "name":"African Lily",
      "image":"https://www.allaboutgardening.com/wp-content/uploads/2021/11/African-Lily-960x534.jpg",
      "scientificName":"Scientific name: Agapanthus africanus",
      "Description":"Other names include the Star of Bethlehem or the Lily of the Nile, despite only being native to the South of Africa. These evergreen perennials reach heights of up to one meter and produce erect stems carrying a globe-shaped display of blue, lilac, or white blooms. Each globe has showy trumpet-shaped flowers that do well in salty sea winds, making them ideal for a coastal garden."
    },

    {
      "name":"Alpenrose",
      "image":"https://www.allaboutgardening.com/wp-content/uploads/2021/11/Alpenrose-960x534.jpg",
      "scientificName":"Scientific name: Rhododendron ferrugineum",
      "Description":"This upright evergreen shrub produces glossy, dark-green leaves and clusters of tubular rose pink to crimson flowers. It blooms in the early summer and grows in a compact and upright habit. The Alpenrose can grow up to five feet high, looking great in the rear of borders and at the side of water gardens. It prefers full sun to partial shade and is hardy in zones four to nine. "
    }
  ]

  // using map function to iterate the arrays
  const flowers_array= flowers.map(function(flowers){
    return(<>
    
    <div className="main">
      <div className="array">
        
        <h2>{flowers.name}</h2>
        <h3>{flowers.scientificName}</h3>
        <p>{flowers.Description}</p>
        <a href= {flowers.image}><img src = {flowers.image}></img></a>
      </div>
    </div>
      </>)
  })

  
  return(
    <>
    <div className="header">
      <header>Team Flower</header>
    </div>

    <div className='nav'>
      <nav>
        <a href="index.html">Home</a>
        <a href="index.html">Shop</a>
        <a href="index.html">About</a>
      </nav>
      <div className='cartLogo'>
        <nav >
         <a href="shoppingCart.html"><img src = "https://www.logolynx.com/images/logolynx/2f/2fd9abfa6c80a65c15a808977bebbcda.png"></img></a>
        </nav>
      </div>
    </div>
    <div className='grid'>
      <div className='plantTypes'>
        Currently available: {firstPlanttype} 
      </div>
      <div className='plantTypes'>
        Coming soon: { ...lastPlantType}
      </div>
    </div>
    <div className = "block">
     
      {flowers_array}
    </div>
    </>
  )
}

export default App