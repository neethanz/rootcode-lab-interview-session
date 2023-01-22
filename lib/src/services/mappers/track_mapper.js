const mapTracks = tracks => {
  return tracks.map(ele => {
    let stringifiedEle = JSON.stringify(ele);
    let element = JSON.parse(stringifiedEle);
    let date = new Date(element.releaseDate);
    date = date.toDateString();
    date = date.toString();
    return {
      thumbnailUrl: element.artworkUrl30,
      artist: element.artistName,
      colletion: element.collectionName,
      track: element.trackName,
      price: element.trackPrice,
      releaseDate: date,
      description: element.description,
      primaryGenreName: element.primaryGenreName,
      country: element.country,
    };
  });
};

export default mapTracks;
