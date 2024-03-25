
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/CardRecipes/Cards'
import Header from './components/header/Header'
import Recipes from './components/recipes/Recipes'

function App() {

  return (
    <>
    
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <div>
        <Cards></Cards>
      </div>
      
    </>
  )
}

export default App
