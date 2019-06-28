import React from "react"
import { graphql, Link } from "gatsby"
import '../style/index.scss';

export default function IndexPage({data}) {
  console.log(data)
  return (
    <div className="container">
      <h1>Hello</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD YYYY")
            title
          }
          html
          fields {
            slug
          }
        }
      }
    }
  }
`
