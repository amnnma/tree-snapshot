/* eslint-disable import/no-anonymous-default-export */
export default {
  style: "mapbox://styles/amnnma/ckzqnnobf00o314p8jlof4bc9",
  accessToken:
    "pk.eyJ1IjoiYW1ubm1hIiwiYSI6ImNrcTgycDUzaTA5aGcybnMxeGFneTFxenoifQ.uD9aFRQVwIgbKTOukVdr6Q",
  showMarkers: false,
  theme: "dark",
  intro: {
    title: "Story",
    subtitle: "NSC2022",
  },
  alignment: "left",
  footer: "NSC2022",
  chapters: [
    {
      id: "first",
      title: "ความเป็นมา",
      image: "we.png",
      source: "Global Forest watch",
      description:
        "จากการเปลี่ยนแปลงของสภาพอากาศเป็นหนึ่งในปัญหาสำคัญที่เกิดจากภาวะโลกร้อน โดยเฉพาะในสังคมเมือง หรือในชื่อของ “Urban Heat Island”  ( ปรากฏการณ์เกาะความร้อนเมือง ) ที่เกิดขึ้นทำให้อุณหภูมิความร้อนเพิ่มขึ้นทุก ๆ ปี ‘ต้นไม้’ ถูกมองว่าเป็นวิธีแก้ปัญหาที่ดีวิธีหนึ่ง สิ่งที่เราทำคือทำการประเมินมันด้วยข้อมูลชั้นต้นไม้(Tree cover)",
      location: {
        center: [101.3722, 14.4392],
        zoom:  5,
        pitch: 0,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "amazon3",
      title: "อดีตและปัจจุบัน",
      legend: [
        {
          title: "Tree cover loss 2001 - 2020",
          color: "#DC6B9C",
        },
      ],
      image: "",
      source: "Global Forest watch",
      description:
        "วิธีวัดความรุนแรงของการสูญเสียที่นิยมใช้กันทั่วไปมากที่สุด คือการหาความกว้างของพื้นที่สูญเสียต้นไม้ปกคลุม (tree cover loss) ซึ่งเป็นพื้นที่ป่าที่ไม่หลงเหลือพืชพรรณใด ๆ อยู่อีกเลย องค์กรพิทักษ์ป่าโลกหรือ Global Forest Watch รายงานว่าในปีค.ศ. 2018 เพียงปีเดียว ได้เกิดพื้นที่สูญเสียต้นไม้ปกคลุมไปแล้วถึง 40,000 ตร.กม.  ในจำนวนนี้เกือบครึ่งหนึ่งเป็นพื้นที่ของป่าปฐมภูมิราว 17,000 ตร.กม. โดยป่าปฐมภูมินั้นคือผืนป่าที่ยังอยู่ในสภาพดั้งเดิมและมีความหลากหลายทางชีวภาพสูง   ผู้เชี่ยวชาญอย่าง ดร. อันโตนิโอ นอบรี เชื่อว่าการตัดไม้ทำลายป่าเพียงอย่างเดียว ไม่อาจแสดงให้เราเห็นภาพของความเสียหายที่เกิดขึ้นทั้งหมดได้ และเราควรจะต้องนำปัญหาการเสื่อมสภาพของผืนป่าที่แอบแฝงอยู่มาพิจารณาร่วมด้วย",
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
          layer: "Tree-cover-loss-2001-2020",
          opacity: 1,
        },
        {
          layer: "amnnma",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "Land-rights_1",
          opacity: 0.3,
        },
        {
          layer: "Tree-cover-loss-2001-2020",
          opacity: 0.3,
        },
      ],
    },
    {
      id: "amazon-region",
      title: "อนาคต",
      legend: [
        {
          title: "พื้นที่ที่เหลืออยู่",
          color: "#008e00",
        },
        {
          title: "พื้นที่ที่สูญเสีย",
          color: "#F30404",
        },
      ],
      image: "rho.png",
      source: "Model",
      description:
        "สิ่งที่เราทำคือการทำนายการสูญเสียของพื้นที่ชั้นต้นไม้ในอนาคตที่คาดว่าน่าจะสูญเสียจากแบบจำลองการถดถอย จากรูปคือบริเวณพื้นที่ของกรุงเทพมหานครในปี ค.ศ. 2050",
      location: {
        center: [100.523186, 13.736],
        zoom: 13,
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
          title: "พื้นที่ที่เหลืออยู่",
          color: "#008e00",
        },
        {
          title: "พื้นที่ที่สูญเสีย",
          color: "#F30404",
        },
      ],
      image: "rho.png",
      source: "Model",
      description:
        "ในอีกด้านหนึ่ง จากรูปคือบริเวณพื้นที่ของอุทยานแห่งชาติเขาใหญ่ในปี ค.ศ. 2050",
      location: {
        center: [101.3722, 14.43],
        zoom: 11,
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
        "ผลลัพธ์จากแบบจำลองจะทำนายการเปลี่ยนแปลงของพื้นที่ชั้นต้นไม้ในอนาคตยังอยู่ในขั้นตอนของการพัฒนา อาจมีบางจุดหรือบางอย่างที่ขาดไปแต่ทางเราจะเพิ่มความถูกต้องของโมเดลโดยใช้เครื่องมือทางภูมิศาสตร์มากขึ้น",
      location: {
        center: [100.0373, 13.814],
        zoom: 2,
        pitch: 0.0,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
