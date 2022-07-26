const API_BASE = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json";
const API_KEY = "fy05XmmeVqql1CdM5uqJ6aeWVXFzfATV";
const DOMAIN = `${API_BASE}?api-key=${API_KEY}`;

// ========== http request: get news ==========
const getNews = async () => {
  const response = await fetch(DOMAIN);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Network response error!");
  }

  const fetchedNews = [];
  for (const key in data.results) {
    const newsData = {
      id: data.results[key].id ? data.results[key].id : key,
      title: data.results[key].title ? data.results[key].title : "Recent News",
      abstract: data.results[key].abstract
        ? data.results[key].abstract
        : "No Abstract",
      image: data.results[key].media.length
        ? data.results[key].media[0]["media-metadata"][2].url
        : "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    };
    fetchedNews.push(newsData);
  }

  return fetchedNews;
};

export default getNews;
