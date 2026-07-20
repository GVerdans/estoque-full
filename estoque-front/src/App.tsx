import "./App.css";
import AppRoutes from "./routes/appRoutes";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
      return (
            <div className="min-h-screen bg-background text-text">
                  <NavBar />

                  <main className="p-6">
                        <AppRoutes />
                  </main>

                  <Footer />
            </div>
      );
}

export default App;
