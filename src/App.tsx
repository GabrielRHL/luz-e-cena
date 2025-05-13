import { Banner } from "./components/Banner"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { MovieSection } from "./components/MovieSection"
import { Newsletter } from "./components/Newsletter"

function App() {
  return (
    <>
    <Header />
    <Banner src="/public/imgs/banner_desktop.png" alt="Banner"/>
    <MovieSection />
    <Banner src="/public/imgs/banner_combo_desktop.png" alt="Combo"/>
    <Newsletter />
    <Footer />
    </>
  )
}

export default App