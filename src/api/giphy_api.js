const key_value = "nfBWYUQ9w35T0IWyddbovwnAOLPQAZSo";
import axios from "axios";

export async function fetchGiphy () {
    return await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: key_value,
          limit: 100
        }
    });
};

export async function fetchGiphySearch(search) {

    return await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: key_value,
          q: search,
          limit: 100
        }
    });

}