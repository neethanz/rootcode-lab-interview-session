import axios from 'axios';

const login = (username: string, password: string) => {
  return axios({
    method: 'post',
    url: 'https://stage-api.serw.io/v1/auth/local/login',
    data: {
      email: username,
      password: password,
    },
  })
    .then(async res => {
      let token = res.data['customerAccessToken'];
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
};

const fetchAllSongs = (limit: number) => {
  return axios
    .get('https://itunes.apple.com/search?term=all', {params: {limit: limit}})
    .then(res => {
      return res.data.results;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
};

const fetchParicularArtistSongs = (keyword: string, limit: number) => {
  keyword = keyword.replace(' ', '+');
  return axios
    .get(`https://itunes.apple.com/search?term=${keyword}`, {
      params: {limit: limit},
    })
    .then(res => {
      return res.data.results;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
};

export default {fetchAllSongs, fetchParicularArtistSongs, login};
