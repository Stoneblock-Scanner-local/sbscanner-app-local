import { Rating } from "@/components/Basic/Rating";
import { twMerge } from "tailwind-merge";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { StarType } from "@/shared/types";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export interface Props {
  title: string;
  description: any;
  rating: number;
  titleClassName?: string;
}

const ProjectAuditSection = ({
  title,
  description,
  rating,
  titleClassName,
}: Props) => {
  // TODO: move this config somewhere else
  interface RenderOptions {
    renderText: (text: string) => React.ReactNode[];
  }

  interface Options {
    renderText: RenderOptions["renderText"];
    renderNode: {
      "embedded-asset-block": (node: any) => React.ReactNode;
      [INLINES.HYPERLINK]: (
        node: any,
        children: React.ReactNode,
      ) => React.ReactNode;
      [BLOCKS.HEADING_4]: (
        node: any,
        children: React.ReactNode,
      ) => React.ReactNode;
    };
  }
  const options: Options = {
    renderText: (text: string) => {
      // break the string apart and inject <br> elements
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, [] as React.ReactNode[]);
    },
    renderNode: {
      ["embedded-asset-block"]: (node) => {
        return (
          <Image
            className="img-fluid"
            src={"https:" + node.data.target.fields.file.url}
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
            alt="Embedded Asset"
          />
        );
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-grey-100"
          >
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        return <h4 className="text-xl dark:text-grey-100">{children}</h4>;
      },
    },
  };

  return (
    <div className="flex flex-col items-start gap-y-5">
      <h3 className={twMerge("text-2xl font-bold", titleClassName)}>{title}</h3>
      <div className="prose max-w-none dark:text-grey-100">
        {documentToReactComponents(description, options)}
      </div>
      <Rating rating={rating} starType={StarType.BLUE} locked />
    </div>
  );
};

export default ProjectAuditSection;
