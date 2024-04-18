import Footer from "./components/Footer"
import Main from "./components/Main"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
      <Footer/>
    </>
  )
}

export default App
