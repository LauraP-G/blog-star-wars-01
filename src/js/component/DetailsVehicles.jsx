import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsVehicles = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()
    console.log(params)
    const { uid, type } = useParams();

    return (
        <>
            <div className="container d-flex flex-column align-items-center">
                <div className="d-flex flex-row mb-4">
                    <div>
                        <img src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}></img>
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
                    <h6 className="col"><strong className="d-block">Model</strong>
                        <p className="d-block">{store.details?.properties.model}</p>
                    </h6>
                    <h6 className="col">
                        <strong className="d-block">Starship Class</strong>
                        <p className="d-block">{store.details?.properties.starship_class}</p>
                    </h6>
                    <h6 className="col">
                        <strong className="d-block">Cost</strong>
                        <p className="d-block">{store.details?.properties.cost_in_credits}</p>
                    </h6>
                    <h6 className="col">
                        <strong className="d-block">Passengers</strong>
                        <p className="d-block">{store.details?.properties.passengers}</p>
                    </h6>
                    <h6 className="col">
                        <strong className="d-block">Manufacturer</strong>
                        <p className="d-block">{store.details?.properties.manufacturer}</p>
                    </h6>
                </div>
            </div>
        </>

    )
}