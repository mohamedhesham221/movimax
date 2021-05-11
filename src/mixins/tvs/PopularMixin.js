import genresTv from '@/mixins/genres/genresTv';

export default {
  data() {
    return {
      apiKey: 'c10853c26d67ce724f0341b818f7d452',
      popularArr: [],
      baseUrl: 'https://image.tmdb.org/t/p/original',
    };
  },
  created() {
    this.popular();
    this.genre();
  },
  mixins: [genresTv],
  methods: {
    popular() {
      fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`)
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
  },

};
