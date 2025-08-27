import devLens from "../assets/images/logo-devlens.svg";
import styleSpy from "../assets/images/logo-style-spy.svg";
import speedBoost from "../assets/images/logo-speed-boost.svg";
import jsonWizard from "../assets/images/logo-json-wizard.svg";
import tabMasterPro from "../assets/images/logo-tab-master-pro.svg";
import viewportBuddy from "../assets/images/logo-viewport-buddy.svg";
import markupNotes from "../assets/images/logo-markup-notes.svg";
import gridGuides from "../assets/images/logo-grid-guides.svg";
import palettePicker from "../assets/images/logo-palette-picker.svg";
import linkChecker from "../assets/images/logo-link-checker.svg";
import domSnapshot from "../assets/images/logo-dom-snapshot.svg";
import consolePlus from "../assets/images/logo-console-plus.svg";

export interface CardProps {
  title: string;
  des: string;
  img: string;
  enabled: boolean;
}

export const extensions: CardProps[] = [
  {
    title: "DevLens",
    des: "Quickly inspect page layouts and visualize element boundaries.",
    img: devLens,
    enabled: false,
  },
  {
    title: "StyleSpy",
    des: "Instantly analyze and copy CSS from any webpage element.",
    img: styleSpy,
    enabled: false,
  },
  {
    title: "SpeedBoost",
    des: "Optimizes browser resource usage to accelerate page loading.",
    img: speedBoost,
    enabled: false,
  },
  {
    title: "JSONWizard",
    des: "Formats, validates, and prettifies JSON responses in-browser.",
    img: jsonWizard,
    enabled: false,
  },
  {
    title: "TabMaster Pro",
    des: "Organizes browser tabs into groups and sessions.",
    img: tabMasterPro,
    enabled: false,
  },
  {
    title: "ViewportBuddy",
    des: "Simulates various screen resolutions directly within the browser.",
    img: viewportBuddy,
    enabled: false,
  },
  {
    title: "Markup Notes",
    des: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    img: markupNotes,
    enabled: true,
  },
  {
    title: "GridGuides",
    des: "Overlay customizable grids and alignment guides on any webpage.",
    img: gridGuides,
    enabled: false,
  },
  {
    title: "Palette Picker",
    des: "Instantly extracts color palettes from any webpage.",
    img: palettePicker,
    enabled: false,
  },
  {
    title: "LinkChecker",
    des: "Scans and highlights broken links on any page.",
    img: linkChecker,
    enabled: false,
  },
  {
    title: "DOM Snapshot",
    des: "Capture and export DOM structures quickly.",
    img: domSnapshot,
    enabled: false,
  },
  {
    title: "ConsolePlus",
    des: "Enhanced developer console with advanced filtering and logging.",
    img: consolePlus,
    enabled: false,
  },
];
