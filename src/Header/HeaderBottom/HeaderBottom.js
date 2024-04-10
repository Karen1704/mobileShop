import s from "../HeaderBottom/HeaderBottom.module.scss";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
function HeaderBottom() {
	return (
		<div className={s.headerBottom}>
			<Link to={"/"}>
				<span>E-Commerse App</span>
			</Link>
			<div className={s.icons}>
				<Link to="/heart">
					<FaHeart className={s.Heart} />
				</Link>
				<Link to="/cart">
					<FaCartPlus className={s.Cart} />
				</Link>
			</div>
		</div>
	);
}
export default HeaderBottom;
