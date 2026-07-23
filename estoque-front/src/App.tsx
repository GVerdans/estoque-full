import "./App.css";
import AppRoutes from "./routes/appRoutes";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
      return (
            <AuthProvider>
                  <div className="min-h-screen bg-background text-text">
                        <NavBar />

                        <main className="p-6">
                              <AppRoutes />
                        </main>

                        <Footer />
                  </div>
            </AuthProvider>
      );
}

export default App;
