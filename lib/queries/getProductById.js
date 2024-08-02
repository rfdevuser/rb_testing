import gql from "graphql-tag";

const GET_ALL_PRODUCTS = gql`

  {
  products(first: 100, where: { supportedTypesOnly: true}) {
    edges {
      cursor
      node {
        id
        name
       
        ... on SimpleProduct {
         
          image {
            sourceUrl
          }
          price
        }
        ... on VariableProduct {
          
          image {
            sourceUrl
          }
          price
        }
      }
    }
  }
}`

const GET_PRODUCTS = gql`

  query gps($cat: String!){
  products(first: 100, where: { supportedTypesOnly: true,category: $cat }) {
    edges {
      cursor
      node {
        id
        name
       
        ... on SimpleProduct {
         
          image {
            sourceUrl
          }
          price
        }
        ... on VariableProduct {
          
          image {
            sourceUrl
          }
          price
        }
      }
    }
  }
}`



export default {GET_PRODUCTS, GET_ALL_PRODUCTS}
