import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPeople = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()
    console.log(params)
    const { uid, type } = useParams();

    return (
        <>
            <div className="container d-flex flex-column align-items-center">
                <div className="d-flex flex-row mb-4">
                    <div>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}></img>
                    </div>
                    <div className="ms-4">
                        <h2>{store.details?.properties.name}</h2>
                        <p>{store.details?.description}</p>
                    </div>
                </div>
                <div className="border-top border-danger text-danger row justify-content-center">
                    <h6 className="col"><strong className="d-block">Name</strong>
                        <p className="d-block">{store.details?.properties.name}</p>
                    </h6>
                    <h6 className="col"><strong className="d-block">Birth year</strong>
                        <p className="d-block">{store.details?.properties.birth_year}</p>
                    </h6>
                    <h6 className="col">
                        <strong className="d-block">Gender</strong>
                        <p className="d-block">{store.details?.properties.gender}</p>
                    </h6>
                    <h6 className="col">
                        <strong className="d-block">Height</strong>
                        <p className="d-block">{store.details?.properties.height}</p>
                    </h6>
                    <h6 className="col">
                        <strong className="d-block">Skin color</strong>
                        <p className="d-block">{store.details?.properties.skin_color}</p>
                    </h6>
                    <h6 className="col">
                        <strong className="d-block">Eye color</strong>
                        <p className="d-block">{store.details?.properties.eye_color}</p>
                    </h6>
                </div>
            </div>

        </>

    )
}