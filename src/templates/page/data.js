const PageTemplateFragment = `
    fragment PageTemplateFragment on WPGraphQL_Page { 
      id
      pageId
      title
      content
      featuredImage {
        sourceUrl        
      }
      pageFields {
      adresse
    }
    }
`

module.exports.PageTemplateFragment = PageTemplateFragment
