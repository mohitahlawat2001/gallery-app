const url =
	"https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc";

//Since the number of API calls is limited, utilizing several api keys
const api_keys = [
	"1337516513msh551bb42aca4977cp16ceebjsn35c31582fbb0",
	"dbe6f2da59mshf84541ed7338ffep16dbb5jsna915521aaa69",
	"6b475d317fmsh5f17a527b6e7de8p1bff4fjsne8749ac8b491",
];
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": api_keys[Math.floor(Math.random() * api_keys.length)],
		"X-RapidAPI-Host": "anime-db.p.rapidapi.com",
	},
};

const fetchData = async (setImages, setIsLoading) => {
	try {
		setIsLoading(true);
		const response = await fetch(url, options);
		const result = await response.json();
		setImages(result);
	} catch (error) {
		console.error(error);
	} finally {
		setIsLoading(false);
	}
};

export default fetchData;
