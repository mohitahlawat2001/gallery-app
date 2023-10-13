import axios from "axios";

//Since the number of API calls is limited, utilizing several api keys
const api_keys = [
	"1337516513msh551bb42aca4977cp16ceebjsn35c31582fbb0",
	"dbe6f2da59mshf84541ed7338ffep16dbb5jsna915521aaa69",
	"6b475d317fmsh5f17a527b6e7de8p1bff4fjsne8749ac8b491",
];

const fetchData = async (setApiData, setImages, page = 1) => {
	const options = {
		method: "GET",
		url: "https://anime-db.p.rapidapi.com/anime",
		params: {
			page: page,
			size: "10",
			genres: "Fantasy,Drama",
		},
		headers: {
			"X-RapidAPI-Key":
				api_keys[Math.floor(Math.random() * api_keys.length)],
			"X-RapidAPI-Host": "anime-db.p.rapidapi.com",
		},
	};
	try {
		const response = await axios.request(options);
		setApiData(response?.data);
		setImages((images) => images.concat(response?.data?.data));
	} catch (error) {
		console.error(error);
	}
};

export default fetchData;
