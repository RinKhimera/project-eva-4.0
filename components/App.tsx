import NavBar from "@/components/NavBar";
import About from "@/components/About";

const App = () => {
  return (
    <div className="h-full bg-zinc-50">
      <div className="bg-white ring-1 min-h-screen ring-zinc-100 w-4/5 p-5 mx-auto">
        <NavBar />
        <About />
      </div>
    </div>
  );
};

export default App;
