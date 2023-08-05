import { RiPagesLine } from "react-icons/ri";
import { IoIosApps } from "react-icons/io";
import { AiOutlineCodeSandbox } from "react-icons/ai";

export const dashboardlink = [
  {
    path: "",
    text: "default",
  },
  {
    path: "",
    text: "automotive",
  },
  {
    path: "",
    text: "smart home",
  },
  {
    path: "",
    text: "virtual reality",
  },
  {
    path: "",
    text: "CRM",
  },
];

export const menuLinks = [
  {
    head: "pages",
    icon: <RiPagesLine />,
    submenu: [
      {
        path: "/",
        text: "stats",
      },
      {
        path: "/jobs",
        text: "jobs",
      },
      {
        path: "/profile",
        text: "profile",
      },
    ],
  },

  {
    head: "Ecommerce",
    icon: <AiOutlineCodeSandbox />,
    submenu: [
      {
        path: "/product_overview",
        text: "overview",
      },
    ],

    submenuChild: [
      {
        head: "product",
        children: [
          {
            path: "/productlist",
            text: "products list",
          },
          {
            path: "/new-product",
            text: "new product",
          },
          {
            path: "/editproduct",
            text: "edit product",
          },
        ],
      },
    ],
  },
];
