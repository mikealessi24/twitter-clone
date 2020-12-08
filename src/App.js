import "./App.css";
import Sidebar from "../src/components/Sidebar";
import Feed from "../src/components/Feed";
import Widgets from "../src/components/Widgets";

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
