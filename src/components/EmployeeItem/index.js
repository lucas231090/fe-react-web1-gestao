import { format } from "date-fns";
import "./styles.css";

const formatSalary = (salary) => {
  return salary.replace(".", ",");
};
export default function EmployeeItem({ employee }) {
  const formattedSalary = formatSalary(employee.salary);
  const formattedHireDate = format(new Date(employee.hireDate), "dd/MM/yyyy");
  return (
    <li className="employee-item">
      <header>
        <div className="employees-info">
          <div className="name-icons">
            <strong>{employee.name}</strong>
            <span className="icon-buttons">
              <i className="fas fa-edit"></i>
              <i className="fas fa-trash-alt"></i>
            </span>
          </div>
          <span className="title">{employee.position}</span>
        </div>
      </header>
      <div>
        <p>E-mail: {employee.email}</p>
        <p>Remuneração: R$ {formattedSalary}</p>
        <p>Data Contratação: {formattedHireDate}</p>
        <p>Departamento: {employee.department_name}</p>
      </div>
    </li>
  );
}
