import { Routes, Route } from "react-router-dom";
import { Main, Counter, Board } from "../pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/board" element={<Board />} />
        </Routes>
    );
};

