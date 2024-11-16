import { NativeBaseProvider } from "native-base";


function App() {

  const food = ["potato", "tomato", "banana"]
  return (
    <NativeBaseProvider>
      <div>
        <h1>Food</h1>
        <ul>
          {food.map((food) => (
            <li key={food}>{food}</li>
          ))}
        </ul>
      </div>
    </NativeBaseProvider>
  );
}

export default App;
