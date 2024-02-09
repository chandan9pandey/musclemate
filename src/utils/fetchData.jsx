export const exerciseOptions = {
	method: "GET",
	url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
	params: { limit: "10" },
	headers: {
		"X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};

export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();

	return data;
};
