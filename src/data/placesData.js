import p1 from "../assets/images/pulinjalfort/image01.webp";
import p2 from "../assets/images/pulinjalfort/image02.webp";
import p3 from "../assets/images/pulinjalfort/image03.webp";
import p4 from "../assets/images/pulinjalfort/image04.webp";
import p5 from "../assets/images/pulinjalfort/image05.webp";
import p6 from "../assets/images/pulinjalfort/image06.webp";
import p7 from "../assets/images/pulinjalfort/image07.webp";
import p8 from "../assets/images/pulinjalfort/image08.webp";
import p9 from "../assets/images/pulinjalfort/image09.webp";
import p10 from "../assets/images/pulinjalfort/image10.webp";
import p11 from "../assets/images/pulinjalfort/image11.webp";
import p12 from "../assets/images/pulinjalfort/image12.webp";



export const placesData = [
  {
    id: "place1",
    name: "Edakkal Caves",
    about:
      "Edakkal Caves are prehistoric rock shelters located in Wayanad with ancient petroglyphs dating back thousands of years, showcasing early human life and art. They are among the most remarkable archaeological sites in southern India. :contentReference[oaicite:3]{index=3}", 
       aboutImage:"https://as1.ftcdn.net/jpg/02/80/71/92/1000_F_280719273_AJ2hs9InFxkrvo8zP5F2yvGpSLzgQvwR.jpg",
      images: [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12],
    facts: [
  "Edakkal Caves host some of the only Stone Age petroglyphs in South India.",
  "The caves lie about 1200 m above sea level on Ambukutty Mala hill.",
  "The carvings inside range from human figures to animals and symbols."
],
    map: "https://www.google.com/maps?q=Edakkal+Caves,+Wayanad&output=embed",
  },
  {
    id: "place2",
    name: "Thirunelli Temple",
    about:
      "Thirunelli Temple is an ancient temple dedicated to Lord Vishnu, perched in the Brahmagiri hills of Wayanad. It is known for its spiritual significance and traditional Kerala architecture framed by dense forests. :contentReference[oaicite:7]{index=7}",
        aboutImage:"https://temple.yatradham.org/public/Product/temple/temple_q5KPYu0i_202409161806520.jpg",
      images: [
      "https://temple.yatradham.org/public/Product/temple/temple_q5KPYu0i_202409161806520.jpg?auto=format&fit=crop&w=900&q=80",
      "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/08/View-of-a-temple-840x425.jpg?auto=format&fit=crop&w=900&q=80",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/32/a0/a9/temple-courtyard.jpg?auto=format&fit=crop&w=900&q=80"
    ],
    facts: [
      "Thirunelli Temple is dedicated to Lord Maha Vishnu on the Brahmagiri hill.",
      "Pilgrims perform ancestral rites along the Papanasini river nearby.",
      "The temple’s architecture blends with its forested surroundings beautifully."
    ],
     map: "https://www.google.com/maps?q=Thirunelli+Temple,+Wayanad&output=embed"
  },
  {
    id: "place3",
    name: "Wayanad Heritage Museum",
    about:
      "The Wayanad Heritage Museum at Ambalavayal showcases artifacts from tribal life, ancient tools, terracotta figures and historical relics that span centuries of regional culture. :contentReference[oaicite:11]{index=11}",
     aboutImage:"https://aftertherains.in/blog/wp-content/uploads/2024/02/A-Journey-Through-Wayanad-Heritage-Museum.jpg",
      images: [
      "https://grassrootswayanad.in/blog/wp-content/uploads/2021/07/2-Srishti-J-1-1024x614.jpeg",
      "https://i0.wp.com/travelshoebum.com/wp-content/uploads/2018/07/img_5005.jpg?auto=format&fit=crop&w=900&q=80",
      "https://www.joonsquare.com/usermanage/image/business/wayanad-heritage-museum-wayanad-58670/wayanad-heritage-museum-wayanad-wayanad-heritage-museum-04.jpg?auto=format&fit=crop&w=900&q=80"
    ],
    facts: [
      "The museum displays tribal artifacts from the Neolithic age to later centuries.",
      "It provides a cultural glimpse into the lifestyles of early Wayanad communities.",
      "Artifacts include ancient tools, terracotta figures, and ritual objects."
    ],
     map: "https://www.google.com/maps?q=Wayanad+Heritage+Museum+Ambalavayal&output=embed"
  }
];
