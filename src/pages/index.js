import React from "react"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div className="container">
      <h1>Hello</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.tittle} </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default IndexPage

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
