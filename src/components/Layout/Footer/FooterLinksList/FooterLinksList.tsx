import Link from "next/link";

export interface FooterLinkItem {
  text: string;
  link: string;
}

export interface Props {
  title: string;
  items: FooterLinkItem[];
  isLinkExternal?: boolean;
}

const FooterLinksList = ({ title, items, isLinkExternal }: Props) => {
  return (
    <div className="flex flex-col text-white">
      <span className="mb-4 text-xl font-bold">{title}</span>
      <div className="flex flex-col gap-y-3">
        {items.map((item) => {
          return (
            <span className="text-sm" key={item.text}>
              {isLinkExternal ? (
                <a href={item.link}>{item.text}</a>
              ) : (
                <Link href={item.link}>{item.text}</Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default FooterLinksList;
