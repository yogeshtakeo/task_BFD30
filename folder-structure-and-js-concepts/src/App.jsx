import './App.css'


function App() {
//mapping function
let price = [500, 200, 300, 700, 600, 200];
let discountPrice = price.map(function (pr) {
return pr-20/100*pr;
});

//array destructuring
let product= ["GoPro","Speaker","Vacuum Cleaner","LED TV", "Tablet","Ear Bud"]
let [discPro1,,,discPro2,]=product;

//object destructuring
let GoPro = {
  brand: "GoPro ",
  type: "hand-held camera",
  color: "black",
  model: "hero 10"
};

//spresd operator for concatenaiton
let {brand, color, model} = GoPro;
const d_brand = brand;
const d_color = color;
const d_model = model;

let info = [...d_brand,...d_model]
let infn = [...info]

//rest parameter
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
let totalDiscItem = sum(1, 1);



  return (
    <>
        <div className='topMenu'>
          <a href='https://www.pinterest.com'><h1 className='logo'>infamy</h1>
          <h3 className='logo' >products</h3></a>
          <input className='search' type="text" placeholder="Search bar under construction"></input>
          
          <p>About</p>
          <p>Mission</p><p> <a href='https://www.facebook.com/'>Sign in</a></p>
        </div>
        <div className='mainBody'> 
          <div className='alignItem'>
            <div className='discount'>
              <h4>Today's offer ({totalDiscItem} products)</h4>
              <p></p>
              <div className='product'>
                <img className='productPic' src="./pic/gopro.jpg"></img>
                <p>${discountPrice[0]} not ${price[0]}</p>
                <p></p>
                <a href="https://gopro.com">{infn}</a>
              </div>
              <div className='product'>
                <img className='productPic' src="./pic/led.jpg"></img>
                <p>${discountPrice[3]} not ${price[3]}</p>
                <a href="https://www.samsung.com">{discPro2}</a>
              </div>
            </div>
          </div>
          
          <div className='alignItem'>
            <div className='sales'>
                <h4>Best seller</h4>
              <div className='product'>
                <img className='productPic' src="./pic/speaker.jpg"></img>
                <p>${price[1]}</p>
                <a>{product[1]}</a>
              </div>
              <div className='product'>
                <img className='productPic' src="./pic/vacuum.jpg"></img>
                <p>${price[2]}</p>
                <a>{product[2]}</a>
              </div>
            </div>
              
            <div className='alignItem'>
              <div className='sales'>
                <div className='product'>
                  <img className='productPic' src="./pic/tab.jpg"></img>
                  <p>${price[4]}</p>
                  <a>{product[4]}</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className='advert'><h3>Advertisements here</h3></div>
         
        </div>
        
    </>
  )

}


export default App