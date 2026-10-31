export interface CorporateWorkImage {
  id: string;
  src: string;
  title: string;
  subsidiary: string;
  category: string;
}

export const WORK_IMAGES: CorporateWorkImage[] = [
  {
    id: "IMG-20261031-WA0012",
    src: "/assets/aistudio/IMG-20261031-WA0012_e6ac512f.jpg",
    title: "RON Dispatch & Express Delivery Fleet",
    subsidiary: "RON Transport & Logistics Ltd",
    category: "Logistics"
  },
  {
    id: "IMG-20261031-WA0018",
    src: "/assets/aistudio/IMG-20261031-WA0018_78a0de22.jpg",
    title: "Corporate Facility Janitorial & Sanitization",
    subsidiary: "RON Cleaning Services",
    category: "Facility Cleaning"
  },
  {
    id: "IMG-20261031-WA0031",
    src: "/assets/aistudio/IMG-20261031-WA0031_640b5e59.jpg",
    title: "Commercial Poultry Farming Operations",
    subsidiary: "RON Unity Farms",
    category: "Agribusiness"
  },
  {
    id: "IMG-20261031-WA0032",
    src: "/assets/aistudio/IMG-20261031-WA0032_8232d319.jpg",
    title: "Petroleum Lubricants & Bulk Distribution",
    subsidiary: "RON Petroleum Services",
    category: "Energy"
  },
  {
    id: "IMG-20261031-WA0011",
    src: "/assets/aistudio/IMG-20261031-WA0011_f3370f8b.jpg",
    title: "Executive Intercity Transport Fleet",
    subsidiary: "RON Transport & Logistics",
    category: "Transportation"
  },
  {
    id: "IMG-20261031-WA0021",
    src: "/assets/aistudio/IMG-20261031-WA0021_d002fa41.jpg",
    title: "Solid Mineral Processing & Site Operations",
    subsidiary: "RON Mineral Explorers Limited",
    category: "Mining"
  }
];

export const SERVICE_MEDIA = {
  transportFleet: "/assets/aistudio/IMG-20261031-WA0011_f3370f8b.jpg",
  transportDispatch: "/assets/aistudio/IMG-20261031-WA0012_e6ac512f.jpg",
  transportTricycle: "/assets/aistudio/IMG-20261031-WA0013_c5a6ae01.jpg",
  petroleumStation: "/assets/aistudio/IMG-20261031-WA0030_6fcb4df5.jpg",
  petroleumBulk: "/assets/aistudio/IMG-20261031-WA0032_8232d319.jpg",
  petroleumNight: "/assets/aistudio/IMG-20261031-WA0028_2fdf9f3f.jpg",
  poultryFarm: "/assets/aistudio/IMG-20261031-WA0031_640b5e59.jpg",
  mineralMining: "/assets/aistudio/IMG-20261031-WA0021_d002fa41.jpg",
  mineralSluice: "/assets/aistudio/IMG-20261031-WA0023_bd8648e5.jpg",
  cleaningCrew: "/assets/aistudio/IMG-20261031-WA0018_78a0de22.jpg"
};
