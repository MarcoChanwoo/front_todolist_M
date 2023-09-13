import "./App.css";
import Header from "./component/Header";
import TodoItem from "./component/TodoItem";
import TodoList from "./component/TodoList";

function App() {
    return (
        <div className="App">
            <Header />
            <TodoList />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}
export default App;
