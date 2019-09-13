import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SinglePage = props => {
  const {
    pageContext: { id, postId, title, content, excerpt, featuredImage, pageFields },
  } = props

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <article
        data-id={id}
        id={`post-${postId}`}
        className={`post-${postId} page type-page status-publish hentry entry`}
      >
        <header className="entry-header">
          <h1 className="entry-title">{title}</h1>
          <div className="entry-meta">
          <h2>Adresse de Sébastien : {pageFields.adresse}</h2>
          </div>
          {/* .meta-info */}
          <img src={featuredImage.sourceUrl}/>
        </header>

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {/* .entry-content */}

        <footer className="entry-footer" />
      </article>
      {/* #post-${ID} */}
    </Layout>
  )
}

export default SinglePage
