
import fileIcon from "./file.png";
import swatch from "./swatch.png";
import logoShirt from "./logo-tshirt.png";
import stylishShirt from "./stylish-tshirt.png";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    tip: "use to change shirt color"
  },
  {
    name: "filepicker",
    icon: fileIcon,
    tip:"use to upload images for the shirt logo and style"
  },
  
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
    tip:"show/hide the shirt logo"
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
    tip: "show/hide the full shirt style"
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
