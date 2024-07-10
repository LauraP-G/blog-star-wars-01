import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"
import { Card } from "../component/Card.jsx";
import SimpleBar from "simplebar-react";


export const Home = () => {

	const { store, actions } = useContext(Context)
	const styles = {
		maxWidth: 2000,
		width: "100%",
		maxHeight: 200,
		height: "100%"
	};


	return (
		<div className="container">

			<div className="mb-5 characters">
				<h2>Characters</h2>
				<SimpleBar style={styles}>
					<div className="d-flex flex-row">

						{store.people?.map(element => <Card key={element.uid} name={element.name} type={'people'} typeImg={'characters'} uid={element.uid} />)}

					</div>
				</SimpleBar>

			</div>

			<div className="mb-5 cards">
				<h2>Planets</h2>
				<SimpleBar style={styles}>
					<div className="d-flex flex-row">
						{store.planets?.map(element => <Card key={element.uid} name={element.name} typeImg={'planets'} type={'planets'} uid={element.uid} />)}
					</div>
				</SimpleBar>

			</div>
			<div className="mb-5 cards">
				<h2>Straships</h2>
				<SimpleBar style={styles}>
					<div className="d-flex flex-row">
						{store.starships?.map(element => <Card key={element.uid} name={element.name} type={'starships'} typeImg={'starships'} uid={element.uid} />)}
					</div>
				</SimpleBar>
			</div>



		</div>

	)
};
