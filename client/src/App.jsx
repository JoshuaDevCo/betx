import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => {
  return (
      <div class="min-h-screen">
        <div class="gradiant-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
  )
}

export default App
