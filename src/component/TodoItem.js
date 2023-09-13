import "./TodoItem.css";

const TodoItem = () => {
    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                <input type="checkbox" />
            </div>
            <div className="title_col">새로운 영상</div>
            <div className="date_col">{new Date().toLocaleDateString()}</div>
            <div className="btn_col">
                <button>확인 후 삭제</button>
            </div>
        </div>
    );
};
export default TodoItem;
