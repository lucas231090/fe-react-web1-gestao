import "./css/global.css";
import "./css/app.css";
import "./css/sidebar.css";
import "./css/main.css";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeItem from "./components/EmployeeItem";

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastro de Funcionário</strong>
        <EmployeeForm />
      </aside>
      <main>
        <ul>
          <EmployeeItem />
        </ul>
      </main>
    </div>
  );
}

export default App;
