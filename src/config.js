/* eslint-disable import/no-anonymous-default-export */
export default {
  style: "mapbox://styles/amnnma/ckzqnnobf00o314p8jlof4bc9",
  accessToken:
    "pk.eyJ1IjoiYW1ubm1hIiwiYSI6ImNrcTgycDUzaTA5aGcybnMxeGFneTFxenoifQ.uD9aFRQVwIgbKTOukVdr6Q",
  showMarkers: false,
  theme: "mongabay",
  intro: {
    title: "Test",
    subtitle: "Test",
  },
  alignment: "left",
  footer: "NSC2022",
  chapters: [
    {
      id: "amazon3",
      title: "2223",
      image: "",
      source: "asdlk",
      description:
        "why",
      location: {
        center: [101.3722, 14.4392],
        zoom: 11,
        pitch: 40,
        bearing: 50,
      },
      onChapterEnter: [
        {
          layer: "Land-rights_1",
          opacity: 1,
        },
        {
          layer: "Tree-cover-loss-2001-2019",
          opacity: 1,
        },
        {
          layer: "amnnma",
          opacity: 0,
        }
      ],
      onChapterExit: [
        {
          layer: "Land-rights_1",
          opacity: 0.3,
        },
        {
          layer: "Tree-cover-loss-2001-2019",
          opacity: 0.3,
        }
      ],
    },
    {
      id: "amazon-region",
      title: "ความเป็นมา",
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
    {
      id: "amazon",
      title: "222",
      image: "",
      source: "asd",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location: {
        center: [100.0373, 13.8140],
        zoom: 11,
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
    }
  ],
};
