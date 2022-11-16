import "./App.css";
import CategoryForm from "./components/Category";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="text-center">
      <section className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm />
        </div>
      </section>
    </div>
  );
}

export default App;
