import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <div>
                <h1>(주)호윤상사_관리자 페이지</h1>
                <h2>{new Date().toDateString()}</h2>
            </div>
        </div>
    );
};
export default Header;
