import "./stylesheets/index.css";
import Convertor from "./containers/Converter";

function App() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-4xl m-auto pb-6 pt-14">
        <Convertor />
      </div>
    </div>
  );
}

export default App;
