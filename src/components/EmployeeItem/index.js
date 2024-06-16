import "./styles.css";

export default function EmployeeItem() {
  const email = "lucas@mail.com";
  const salary = 1200;
  const data = "23/10/1990";
  const department = "RH";
  return (
    <li className="employee-item">
      <header>
        <div className="employees-info">
          <strong>Lucas José</strong>
          <span>Professor UFPR</span>
        </div>
      </header>
      <div>
        <p>email: {email}</p>
        <p>salario: {salary}</p>
        <p>data contratação: {data}</p>
        <p>departamento: {department}</p>
      </div>
    </li>
  );
}
