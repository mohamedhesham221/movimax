import genres from '@/mixins/genres/genresMovi';

export default {
  data() {
    return {
      apiKey: 'c10853c26d67ce724f0341b818f7d452',
      upComingArr: [],
      baseUrl: 'https://image.tmdb.org/t/p/original',
    };
  },
  created() {
    this.upComing();
    this.genre();
  },
  mixins: [genres],
  methods: {
    upComing() {
      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          // eslint-disable-next-line no-else-return
          } else {
            throw new Error('error');
          }
        }).then((resolve) => {
          // console.log(resolve.results);
          this.upComingArr.push(resolve.results);
        })
        .catch((error) => console.log(error));
    },
  },
};
