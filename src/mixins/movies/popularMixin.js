export default {
  data() {
    return {
      apiKey: 'c10853c26d67ce724f0341b818f7d452',
      popularArr: [],
      genres: [],
      baseUrl: 'https://image.tmdb.org/t/p/original',
    };
  },
  created() {
    this.popular();
    this.genre();
  },
  methods: {
    popular() {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          // eslint-disable-next-line no-else-return
          } else {
            throw new Error('error');
          }
        }).then((resolve) => {
          // console.log(resolve.results);
          this.popularArr.push(resolve.results);
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
