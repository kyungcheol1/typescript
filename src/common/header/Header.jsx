import { NavLink } from "react-router-dom";
import { Ul, HeaderWrap, Logo } from "./styles";

export const Header = () => {
    return (
        <HeaderWrap>
            <Logo>Logo</Logo>
            <Ul>
                <li>
                    <NavLink to="/">Main</NavLink>
                </li>
                <li>
                    <NavLink to="/counter">Counter</NavLink>
                </li>
                <li>
                    <NavLink to="/board">Board</NavLink>
                </li>
            </Ul>
            <div>
                <img src="" alt="" />
            </div>
        </HeaderWrap>
    );
};

