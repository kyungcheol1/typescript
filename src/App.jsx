import { Header } from "./common";
import { AppRouter } from "./route";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { categoryRequest } from "./store/category";

const App = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log(state);
    useEffect(() => {
        dispatch(categoryRequest());
    }, [dispatch]);

    return (
        <>
            <Header />
            <AppRouter />
        </>
    );
};

export default App;

