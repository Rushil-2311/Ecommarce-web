import HttpClient from "./index";
import { MoviesRequestType } from "./interface/video";

class DocumentRepoApi extends HttpClient {
  constructor(token?: any) {
    super(process.env.REACT_APP_APIBASE!, token);
  }
  public async getMoviesList(data: MoviesRequestType) {
    return await this.instance.get(
      `/movies?page=${data.page}&limit=${data.limit}`
    );
  }
  public async addMovie(data: any) {
    return await this.instance.post(`/movies`, data);
  }
  public async editMovie(id, data: any) {
    return await this.instance.put(`/movies/${id}`, data);
  }
  public async getMovie(id: number) {
    return await this.instance.get(`/movies/${id}`);
  }
  public async deleteMovie(id: number) {
    return await this.instance.delete(`/movies/${id}`);
  }
}

export default DocumentRepoApi;
