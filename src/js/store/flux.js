const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people: [],
			planets: [],
			starships: [],
			favorites: [],



		},
		actions: {
			getPeople: async () => {
				try {
					const resp = await fetch(getStore().url + '/people');
					const data = await resp.json()
					if (!resp.ok) throw new Error('fetching people error')
					console.log(data)
					setStore({ people: data.results })
				} catch (error) {
					console.log('error:', error)
				}


			},

			getPlanets: async () => {
				try {
					const resp = await fetch(getStore().url + '/planets');
					const data = await resp.json()
					if (!resp.ok) throw new Error('fetching planets error')
					console.log(data)
					setStore({ planets: data.results })
				} catch (error) {
					console.log('error:', error)
				}


			},

			getStarships: async () => {
				try {
					const resp = await fetch(getStore().url + '/starships');
					const data = await resp.json()
					if (!resp.ok) throw new Error('fetching starships error')
					console.log(data)
					setStore({ starships: data.results })
				} catch (error) {
					console.log('error:', error)
				}


			},

			getDetails: async (uid, type) => {
				try {
					const resp = await fetch(`${getStore().url}/${type}/${uid}`);
					const data = await resp.json()
					if (!resp.ok) throw new Error('fetching details error')
					console.log(data)
					setStore({ details: data.result })
				} catch (error) {
					console.log('error:', error)
				}


			},

			addFavorites: (name) => {
				const favorites = getStore().favorites;
				if (!favorites.includes(name)) {
					const updateFavorites = [...favorites, name];
					setStore({ favorites: updateFavorites });
				}
			},

			deleteFavorite: (index) => {
				const updateFavorites = getStore().favorites.filter((el, i) => i !== index);
				setStore({ favorites: updateFavorites });
			}


		}
	};
};

export default getState;
