import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Context } from "../store/appContext";

export const Card = ({ name, uid, type, typeImg }) => {
    const { store, actions } = useContext(Context);

    // Con esto voy a comprobar si el nombre está en la lista de favoritos
    const esFavorito = store.favorites.some(fav => fav === name);

    return (
        <div className="tarjeta">
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/${typeImg}/${uid}.jpg`} alt={name} />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <div className="container-btn">
                        <Link className="btn btn-details" to={`/details/${type}/${uid}`}>
                            Learn more
                        </Link>
                        <button className="btn btn-favorite" onClick={() => actions.addFavorites(name)}>
                            {esFavorito ? <FaHeart /> : <FaRegHeart />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
