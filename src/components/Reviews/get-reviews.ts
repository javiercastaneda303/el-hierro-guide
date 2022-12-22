import axios from 'axios'
import Geocode from "react-geocode";
export type Review = {
	profile_photo_url: string;
	rating: number;
	text: string;
	 author_name: string;
};


// const placeId = 'ChIJYZqqMcpYawwRgUq_IX0pFz4';
//const placeId = '27.7720505,-18.0802594,13';
// borrar const placeId = 'GhIJzKUCOAevO0ARNSvbh7xhMsA';
const placeId = 'ChIJReL17PnPQQwR5oMGeAkv16w';
const apiKey = 'AIzaSyA4ZgH7FCaawZu_XuY8N9fY6mZIc46J-9Q';
Geocode.setApiKey(apiKey)
Geocode.setLanguage("es")
Geocode.setRegion("es");
Geocode.enableDebug();
const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;



const getReviews = async (
) => {
	const resp = await axios.get(url)

	Geocode.fromLatLng("27.6837039", "-18.381783").then(
		(response) => {
			console.log(response)



		},
		(error) => {
		  console.error(error);
		}
	  );


}

export default getReviews;