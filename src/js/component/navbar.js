import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { FaTrash } from "react-icons/fa";


export const Navbar = () => {
	const { store, actions } = useContext(Context)

	
	
	return (
		<nav className="navbar navbar-light mb-3 fixed-top" style={{ backgroundColor: 'black' }}>
			<div className="container">
				<Link to="/">
					<img src="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png" className="navbar-brand mb-0 h1" style={{ width: '7rem', height: '7rem' }} />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="counterFavorites">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
							{
								 store.favorites.length === 0 ? (
									<li>Empty</li>
								 ):(
								store.favorites.map((favorite,index)=>(
									<li key={index}  className="d-flex justify-content-between align-items-center">{favorite} <span className="iconTrash " onClick={(e) => {e.stopPropagation(); actions.deleteFavorite(index)}}>
									<FaTrash />
								  </span></li>
								))
							)
							}
							
						
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
