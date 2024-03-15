import STATICS from "../enums";

import chevronDown from "../assets/icons/chevron-down.svg";
import chevronDownActive from "../assets/icons/chevron-down-active.svg";


export const navbarLinksData = [
  {
    id: STATICS.HOME,
    label: STATICS.HOME,
    link: "#",
    onTop: true,
    isSelected: false,
  },
  {
    id: STATICS.ELECTRONICS,
    label: STATICS.ELECTRONICS,
    link: "#",
    onTop: true,
    isSelected: false,
  },
  {
    id: STATICS.BOOKS,
    label: STATICS.BOOKS,
    link: "#",
    onTop: true,
    isSelected: false,
  },
  {
    id: STATICS.MUSIC,
    label: STATICS.MUSIC,
    link: "#",
    onTop: true,
    isSelected: false,
  },
  {
    id: STATICS.MOVIES,
    label: STATICS.MOVIES,
    link: "#",
    onTop: true,
    isSelected: false,
  },
  {
    id: STATICS.CLOTHING,
    label: STATICS.CLOTHING,
    link: "#",
    onTop: true,
    isSelected: false,
  },
  {
    id: STATICS.GAMES,
    label: STATICS.GAMES,
    link: "#",
    onTop: true,
    isSelected: false,
  },
];

export const moreButtonData = {
  label: STATICS.MORE,
  iconSrc: chevronDown,
  selectedIconSrc: chevronDownActive,
};

export const moreOptionsData = [
  {
    id: STATICS.FURNITURE,
    label: STATICS.FURNITURE,
    link: "#",
    isSelected: false,
  },
  {
    id: STATICS.ELECTRONIC,
    label: STATICS.ELECTRONIC,
    link: "#",
    isSelected: false,
  },
  {
    id: STATICS.TRAVEL,
    label: STATICS.TRAVEL,
    link: "#",
    isSelected: false,
  },
  {
    id: STATICS.BOTANICAL,
    label: STATICS.BOTANICAL,
    link: "#",
    isSelected: false,
  },
  {
    id: STATICS.CATEGORY_NAME,
    label: STATICS.CATEGORY_NAME,
    link: "#",
    isSelected: false,
  },
];

export const carousalData = [
  {
    id: STATICS.FOOTWEAR,
    label: `${STATICS.FOOTWEAR}`,
    // imgSrc: modernUtensils,
    imgSrc: "https://shabiba.eu-central-1.linodeobjects.com/2023/07/1689062249-1689062249-x0sc7fiygqvs-700x400.PNG",
  },
  {
    id: STATICS.EARPHONES,
    label: `${STATICS.EARPHONES}`,
    // imgSrc: stylishProps,
    imgSrc: "https://wallpapercave.com/dwp1x/wp5288528.jpg",
  },
  {
    id: STATICS.CAMERA,
    label: `${STATICS.CAMERA}`,
    // imgSrc: modernDecor,
    imgSrc: "https://img.pikbest.com/origin/10/04/50/94ApIkbEsTaE7.jpg!w700wp",
  },
  {
    id: STATICS.AROMA,
    label: `${STATICS.AROMA}`,
    // imgSrc: modernVase,
    imgSrc: "https://w0.peakpx.com/wallpaper/133/372/HD-wallpaper-aroma-sticks-and-stones-aroma-stones-luxury-bath.jpg",
  },
  {
    id: STATICS.LAMP,
    label: `${STATICS.LAMP}`,
    // imgSrc: fragranceFlowers,
    imgSrc: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGUlMjBsYW1wfGVufDB8fDB8fHww",
  },
];
