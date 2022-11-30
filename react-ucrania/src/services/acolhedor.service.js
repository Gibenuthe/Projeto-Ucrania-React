import http from "../http-common";

class AcolhedorDataService {
  getAll() {
    return http.get("/acolhedores");
  }

  get(id) {
    return http.get(`/acolhedores/${id}`);
  }

  create(data) {
    return http.post("/acolhedores", data);
  }

  update(id, data) {
    return http.put(`/acolhedores/${id}`, data);
  }

  delete(id) {
    return http.delete(`/acolhedores/${id}`);
  }

  deleteAll() {
    return http.delete(`/acolhedores`);
  }

  findByCountry(pais) {
    return http.get(`/acolhedores?pais=${pais}`);
  }
}

export default new AcolhedorDataService();