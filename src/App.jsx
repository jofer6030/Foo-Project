import Header from "./components/Header"
import PopularItems from "./components/PopularItems"
import ContactUs from "./components/ContactUs"

const App = () => {
  return (
    <div className="container">
      <Header />
      <PopularItems />
      <ContactUs />
    </div>
  )
}

export default App