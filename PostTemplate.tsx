import React from "react"
import Layout from "./src/components/layout"
import Utterances from "./Utterances"

const PostTemplate: React.FC = React.memo(props => {
  // console.log("props", props)
  const { title, date, html } = props.pageContext
  // console.log("props", title, date, html)
  return (
    <Layout>
      <h2>{title}</h2>
      <h4>{date}</h4>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Utterances repo="garahad/gatsby-blog" />
      {/* 블로그가 private이면 안되고, public이여야 되네  */}
    </Layout>
  )
})

PostTemplate.displayName = "PostTemplate"

export default PostTemplate
