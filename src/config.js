/* eslint-disable import/no-anonymous-default-export */
export default {
  style: "mapbox://styles/amnnma/ckzqnnobf00o314p8jlof4bc9",
  accessToken:
    "pk.eyJ1IjoiYW1ubm1hIiwiYSI6ImNrcTgycDUzaTA5aGcybnMxeGFneTFxenoifQ.uD9aFRQVwIgbKTOukVdr6Q",
  showMarkers: false,
  theme: "mongabay",
  intro: {
    title: "Story",
    subtitle: "NSC2022",
  },
  alignment: "left",
  footer: "NSC2022",
  chapters: [
    {
      id: "amazon3",
      title: "อดีตและปัจจุบัน",
      legend: [
        {
          title: 'Tree cover loss 2001 - 2019',
          color: '#DC6B9C'
        }
      ],
      image: "",
      source: "Global Forest watch",
      description:
        "why",
      location: {
        center: [101.3722, 14.4392],
        zoom: 4,
        pitch: 0,
        bearing: 0,
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
      title: "อนาคต",
      legend: [
        {
          title: 'พื้นที่ที่เหลืออยู่',
          color: '#008e00'
        },
        {
          title: 'พื้นที่ที่สูญเสีย',
          color: '#F30404'
        }
      ],
      image: "rho.png",
      source: "Model",
      description:
        "สิ่งที่เราทำคือการทำนายการสูญเสียของพื้นที่ชั้นต้นไม้ในอนาคตที่คาดว่าน่าจะสูญเสียจากแบบจำลองการถดถอย จากรูปคือบริเวณพื้นที่ของกรุงเทพมหานครในปี 2050",
      location: {
        center: [100.523186, 13.736],
        zoom: 12,
        pitch: 0.0,
        bearing: 0,
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
          opacity: 1,
        },
      ],
    },
    {
      id: "amazon-region2",
      title: "อนาคต",
      legend: [
        {
          title: 'พื้นที่ที่เหลืออยู่',
          color: '#008e00'
        },
        {
          title: 'พื้นที่ที่สูญเสีย',
          color: '#F30404'
        }
      ],
      image: "rho.png",
      source: "Model",
      description:
        "ในอีกด้านหนึ่ง จากรูปคือบริเวณพื้นที่ของอุทยานแห่งชาติเขาใหญ่ในปี 2050",
      location: {
        center: [101.3722, 14.43],
        zoom: 12,
        pitch: 0.0,
        bearing: 0,
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
      title: "สรุป",
      image: "",
      source: "asd",
      description:
        "",
      location: {
        center: [100.0373, 13.8140],
        zoom: 2,
        pitch: 0.0,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: []
    }
  ],
};
