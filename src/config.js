export default {
  style: "mapbox://styles/amnnma/ckzqnnobf00o314p8jlof4bc9",
  accessToken:
    "pk.eyJ1IjoiYW1ubm1hIiwiYSI6ImNrcTgycDUzaTA5aGcybnMxeGFneTFxenoifQ.uD9aFRQVwIgbKTOukVdr6Q",
  showMarkers: false,
  theme: "dark",
  intro: {
    title: "Test",
    subtitle: "Test",
  },
  alignment: "left",
  footer: "NSC2022",
  chapters: [
    {
      id: "amazon-region",
      title: "amnnma",
      image: "",
      source: "asd",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location: {
        center: [100.523186, 13.736],
        zoom: 4.42,
        pitch: 0.0,
        bearing: -8.78,
      },
      onChapterEnter: [
        {
          layer: "amnnma",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "amnnma",
          opacity: 0,
        },
      ],
    },
  ],
};
