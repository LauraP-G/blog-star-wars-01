import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPlanets = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()
    console.log(params)
    const { uid, type } = useParams();

    return (
        <>
            <div className="container d-flex flex-column align-items-center">
                <div className="d-flex flex-row mb-4">
                    <div>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}></img>
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
                    <h6 className="col"><strong className="d-block">Diameter</strong>
                        <p className="d-block">{store.details?.properties.diameter}</p>
                    </h6>
                    <h6 className="col">
                        <strong className="d-block">Orbital Period</strong>
                        <p className="d-block">{store.details?.properties.orbital_period}</p>
                    </h6>
                    <h6 className="col">
                        <strong className="d-block">Population</strong>
                        <p className="d-block">{store.details?.properties.population}</p>
                    </h6>
                    <h6 className="col">
                        <strong className="d-block">Climate</strong>
                        <p className="d-block">{store.details?.properties.climate}</p>
                    </h6>
                    <h6 className="col">
                        <strong className="d-block">Terrain</strong>
                        <p className="d-block">{store.details?.properties.terrain}</p>
                    </h6>
                </div>
            </div>
        </>

    )
}