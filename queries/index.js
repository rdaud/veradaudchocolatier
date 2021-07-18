module.exports = `
  {
    categorias: allContentfulCategoria {
      edges {
        node {
          slug
        }
      }
    }
    produtos: allContentfulProduto {
      edges {
        node {
          categoria {
            slug
          }
          slug
        }
      }
    }
  } 
`
