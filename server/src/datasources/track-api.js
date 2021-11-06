const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }
}

module.exports = TrackAPI;
