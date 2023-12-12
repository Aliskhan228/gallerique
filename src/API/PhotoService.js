import axios from "axios";

const apikey = "nYNn4KIw0IC6a-7g7kIUhHQitkPTgRVJEKWnoyMnesY";

export default class PhotoService {

	static async getAll(limit = 10, page = 1) {
		const response = await axios.get(`https://api.unsplash.com/photos`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: `Client-ID ${apikey}`
			},
			params: {
				page,
				per_page: limit
			}
		});
		return response;
	}

	static async getByQuery(limit = 10, page = 1, query) {
		const response = await axios.get(`https://api.unsplash.com/search/photos`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: `Client-ID ${apikey}`
			},
			params: {
				page,
				per_page: limit,
				query,
			}
		});
		return response;
	}

	static async getById(id) {
		const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				Authorization: `Client-ID ${apikey}`
			},
		})
		return response;
	}
}