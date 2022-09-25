import { Tag } from '@markdoc/markdoc'
import { Footer } from '../components/Footer'
import { List } from '../components/List'
import { Image } from '../components/image'

export { comment } from '@markdoc/next.js/tags'

export const footer = {
  render: Footer,
  attributes: {},
}

export const list = {
  render: List,
  attributes: {
    max: { type: Number },
  },
  transform(node, config) {
    const children = node.transformChildren(config)
    return new Tag(this.render, node.transformAttributes(config), children[0].children)
  },
}

export const image = {
  render: Image,
  attributes: {
    src: { type: String },
    className: { type: String },
    alt: { required: true, type: String },
    width: { required: true, type: Number },
    height: { required: true, type: Number },
  },
}
