import "./App.css";
import { MyRoutes } from "./router/routes";

export default function App() {
  return (
    <div>
      <header>
        <h1 className="title">🎥Peliculas</h1>
        <MyRoutes />
      </header>
    </div>
  );
}
