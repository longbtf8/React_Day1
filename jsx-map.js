const tasks = [
  { id: 0, title: "Nấu Cơm", isCompleted: false },
  { id: 1, title: "Học bài", isCompleted: true },
  { id: 2, title: "Đọc Sách", isCompleted: false },
  { id: 3, title: "Quét nhà", isCompleted: true },
  { id: 4, title: "Thể Thao", isCompleted: false },
  { id: 5, title: "Giải Trí", isCompleted: true },
];
const div = (
  <>
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.isCompleted ? "isCompleted" : ""}>
          {task.title}
        </li>
      ))}
    </ul>
  </>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(div);
