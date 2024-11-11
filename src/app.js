import AddNewForm from "./components/addnew";
import StudentsList from "./components/list";

function App() {
  const list = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Jane",
    },
    {
      id: 3,
      name: "Jack",
    },
  ];
  return (
    <div className="container">
      <div
        className="card rounded shadow-sm mx-auto my-4"
        style={{
          maxWidth: "500px",
        }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Classroom</h3>
          <AddNewForm />
        </div>
      </div>
      <StudentsList list={list} />
    </div>
  );
}

export default App;