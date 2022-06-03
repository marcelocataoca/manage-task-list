import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <AppRoutes />
    </ModalProvider>
  );
}

export default App;
