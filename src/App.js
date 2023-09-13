import "./App.css";
import Header from "./component/Header";
import TodoItem from "./component/TodoItem";
import TodoList from "./component/TodoList";

function App() {
    return (
        <div className="App">
            <Header />
            <div>Todo Editor</div>
            <TodoList />
            <TodoItem />
        </div>
    );
}
export default App;
