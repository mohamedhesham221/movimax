import genresTv from '@/mixins/genres/genresTv';

export default {
  data() {
    return {
      apiKey: 'c10853c26d67ce724f0341b818f7d452',
      topRatedArr: [],
      baseUrl: 'https://image.tmdb.org/t/p/original',
    };
  },
  created() {
    this.topRate();
    this.genre();
  },
  mixins: [genresTv],
  methods: {
    topRate() {
      fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}`)
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
  },

};
