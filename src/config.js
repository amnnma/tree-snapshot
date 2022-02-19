const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/amnnma/ckzqnnobf00o314p8jlof4bc9',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'dark',
  intro: {
    title: 'Test',
    subtitle: 'Test',
  },
  alignment: 'left',
  footer: 'NSC2022',
  chapters: [
    {
      id: 'amazon-region',
      title: 'amnnma',
      image: '',
      source: 'asd',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      location: {
        center: [100.523186, 13.736],
        zoom: 4.42,
        pitch: 0.0,
        bearing: -8.78
      },
      onChapterEnter: [
        {
          layer: 'amnnma',
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: 'amnnma',
          opacity: 0
        }
      ]
    }
  ]
};
