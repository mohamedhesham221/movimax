export default {
  data() {
    return {
      apiKey: 'c10853c26d67ce724f0341b818f7d452',
      topRatedArr: [],
      genres: [],
      baseUrl: 'https://image.tmdb.org/t/p/original',
    };
  },
  created() {
    this.topRated();
    this.genre();
  },
  methods: {
    topRated() {
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          // eslint-disable-next-line no-else-return
          } else {
            throw new Error('error');
          }
        }).then((resolve) => {
          // console.log(resolve.results);
          this.topRatedArr.push(resolve.results);
        })
        .catch((error) => console.log(error));
    },
    genre() {
      fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
        .then((response) => {
          if (response.ok) {
            return response.json();
            // eslint-disable-next-line no-else-return
          } else {
            throw new Error('error');
          }
        }).then((resolve) => {
          // console.log(resolve.genres);
          this.genres.push(resolve.genres);
        })
        .catch((error) => console.log(error));
    },
  },
};
