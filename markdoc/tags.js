import { link as linkNode } from "@markdoc/next.js/tags";

import { Tag } from "@markdoc/markdoc";
import { Figure } from "../components/Figure";
import { Footer } from "../components/Footer";
import { Link } from "../components/Link";
import { List } from "../components/List";
import { Image } from "../components/Image";
import { ImageGrid } from "../components/ImageGrid";
import { Video } from "../components/Video";
export { comment } from "@markdoc/next.js/tags";

function findFigure(n) {
  return n.name === "Image" || n.name === "Video";
}

export const figure = {
  render: Figure,
  attributes: {},
  transform(node, config) {
    let children = node.transformChildren(config);

    const image = children.find(findFigure);
    children = children.filter((c) => !findFigure(c));

    return new Tag(this.render, { image }, children);
  },
};

export const footer = {
  render: Footer,
  attributes: {},
};

export const link = {
  ...linkNode,
  render: Link,
};

export const list = {
  render: List,
  attributes: {
    max: { type: Number },
  },
  transform(node, config) {
    const children = node.transformChildren(config);
    return new Tag(
      this.render,
      node.transformAttributes(config),
      children[0].children
    );
  },
};

export const image = {
  render: Image,
  attributes: {
    src: { type: String },
    className: { type: String },
    alt: { required: true, type: String },
    width: { required: true, type: Number },
    height: { required: true, type: Number },
    action: { type: String },
    caption: { type: String },
  },
};

export const imageGrid = {
  render: ImageGrid,
  attributes: {},
};

export const video = {
  render: Video,
  attributes: {
    src: { type: String },
    className: { type: String },
    height: { type: String },
  },
};
