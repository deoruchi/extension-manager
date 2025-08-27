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
    img: "src/assets/images/logo-devlens.svg",
    enabled: false,
  },
  {
    title: "StyleSpy",
    des: "Instantly analyze and copy CSS from any webpage element.",
    img: "src/assets/images/logo-style-spy.svg",
    enabled: false,
  },
  {
    title: "SpeedBoost",
    des: "Optimizes browser resource usage to accelerate page loading.",
    img: "src/assets/images/logo-speed-boost.svg",
    enabled: false,
  },
  {
    title: "JSONWizard",
    des: "Formats, validates, and prettifies JSON responses in-browser.",
    img: "src/assets/images/logo-json-wizard.svg",
    enabled: false,
  },
  {
    title: "TabMaster Pro",
    des: "Organizes browser tabs into groups and sessions.",
    img: "src/assets/images/logo-tab-master-pro.svg",
    enabled: false,
  },
  {
    title: "ViewportBuddy",
    des: "Simulates various screen resolutions directly within the browser.",
    img: "src/assets/images/logo-viewport-buddy.svg",
    enabled: false,
  },
  {
    title: "Markup Notes",
    des: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    img: "src/assets/images/logo-markup-notes.svg",
    enabled: true,
  },
  {
    title: "GridGuides",
    des: "Overlay customizable grids and alignment guides on any webpage.",
    img: "src/assets/images/logo-grid-guides.svg",
    enabled: false,
  },
  {
    title: "Palette Picker",
    des: "Instantly extracts color palettes from any webpage.",
    img: "src/assets/images/logo-palette-picker.svg",
    enabled: false,
  },
  {
    title: "LinkChecker",
    des: "Scans and highlights broken links on any page.",
    img: "src/assets/images/logo-link-checker.svg",
    enabled: false,
  },
  {
    title: "DOM Snapshot",
    des: "Capture and export DOM structures quickly.",
    img: "src/assets/images/logo-dom-snapshot.svg",
    enabled: false,
  },
  {
    title: "ConsolePlus",
    des: "Enhanced developer console with advanced filtering and logging.",
    img: "src/assets/images/logo-console-plus.svg",
    enabled: false,
  },
];
