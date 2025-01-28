import { AsideSectionWrapper } from "@/components/Layout/Wrappers/AsideSectionWrapper";
import NewsIcon from "@/assets/icons/news.svg";
import { NoItems } from "@/components/Basic/NoItems";
import { NewsItem } from "./NewsItem";
import { News } from "@/api/news/types";

export interface Props {
  news: News[];
}

const AsideNews = ({ news }: Props) => {
  return (
    <AsideSectionWrapper
      icon={<NewsIcon className="w-8 stroke-primary" />}
      title="News from StoneBlock"
      className="border-b-0"
    >
      {news.length ? (
        news.map((item, ix) => {
          return (
            <NewsItem
              key={ix}
              imageSrc={item.imageSrc}
              title={item.title}
              link={item.link}
            />
          );
        })
      ) : (
        <NoItems text="No items to display" className="mt-0 font-normal" />
      )}
    </AsideSectionWrapper>
  );
};

export default AsideNews;
