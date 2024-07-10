import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { DetailsPeople } from "../component/DetailsPeople.jsx"
import { DetailsPlanets } from "../component/DetailsPlanets.jsx";
import { DetailsVehicles } from "../component/DetailsVehicles.jsx";

export const Details = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()
    console.log(params)
    const { uid, type } = useParams();


    useEffect(() => {
        actions.getDetails(uid, type)
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="container details d-flex justify-content-center overlay">
                <div className="d-flex flex-column align-items-center text-center">
                    <div className="text-danger me-5">
                        {type === 'people' ? <DetailsPeople /> : ''}
                        {type === 'planets' ? <DetailsPlanets /> : ''}
                        {type === 'starships' ? <DetailsVehicles /> : ''}
                    </div>
                </div>

            </div>

        </>

    )
}