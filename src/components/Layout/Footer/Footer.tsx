import Image from "next/image";
import SBLogo from "@/assets/images/sb-logo.png";
import {
  FooterLinksList,
  Props as FooterLinksListProps,
} from "./FooterLinksList";
import TwitterLogoIcon from "@/assets/icons/twitter-logo.svg";
import FacebookLogoIcon from "@/assets/icons/facebook-logo.svg";
import LinkedinLogoIcon from "@/assets/icons/linkedin-logo.svg";
import { Categories } from "@/shared/constants";

const footerLinkLists: FooterLinksListProps[] = [
  {
    title: "Projects",
    items: [
      {
        text: "Rankings",
        link: "/projects/rankings",
      },
      {
        text: "Gaming",
        link: `/projects/rankings?category=${Categories.Gaming}`,
      },
      {
        text: "DeFi",
        link: `/projects/rankings?category=${Categories.Defi}`,
      },
      {
        text: "NFT",
        link: `/projects/rankings?category=${Categories.Nft}`,
      },
    ],
  },
  {
    title: "Our Projects",
    isLinkExternal: true,
    items: [
      {
        text: "Endemic",
        link: "https://endemic.app/",
      },
      {
        text: "Agroom",
        link: "https://www.agroom.world/",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        text: "About",
        link: "https://stoneblock.hr/about/",
      },
      {
        text: "Join us",
        link: "https://stoneblock.hr/contact/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full h-96 bg-secondary flex items-start justify-around pt-24">
      <div className="items-center hidden lg:flex">
        <Image src={SBLogo.src} alt="logo" width={52} height={52} />
        <span className="text-3xl text-white font-bold">SBScanner</span>
      </div>
      {footerLinkLists.map((list) => {
        return (
          <FooterLinksList
            key={list.title}
            title={list.title}
            items={list.items}
            isLinkExternal={list.isLinkExternal}
          ></FooterLinksList>
        );
      })}

      <div className="absolute right-16 lg:right-32 bottom-5 flex items-center gap-x-4">
        <a className="text-white text-sm underline" href="/disclaimer">
          Disclaimer
        </a>
        <a className="w-6" href="https://twitter.com/stoneblock_hr">
          <TwitterLogoIcon />
        </a>
        <a className="w-6" href="https://facebook.com/stoneblock.hr">
          <FacebookLogoIcon />
        </a>
        <a
          className="w-6"
          href="https://hr.linkedin.com/company/stone-block-blockchain-association"
        >
          <LinkedinLogoIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
