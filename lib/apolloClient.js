import { ApolloClient, ApolloLink, createHttpLink, HttpLink, InMemoryCache } from "@apollo/client";
import getConfig from "next/config";
import { setContext } from '@apollo/client/link/context';
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { sha256 } from 'crypto-hash';

const { publicRuntimeConfig } = getConfig();

const getNewToken = () => {
  return ApolloClient.query({ query: GET_TOKEN_QUERY }).then((response) => {
    // extract your accessToken from your response data and return it
    const { accessToken } = response.data;
    return accessToken;
  });
};


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token = ''
  
  if (process.browser){
    
    token = localStorage.getItem('token');
    
  }else{
    token = ""
  }

  // return the headers to the context so httpLink can read them
  return {
    headers: {
     ...headers,
     authorization: token ? `Bearer ${token}` : '',
    
     
   },
    
  }
 
});



function createApolloClient() {
// createPersistedQueryLink({ sha256,
//   useGETForHashedQueries:true })

const slink = authLink.concat(new HttpLink({
  uri: "https://www.onatiglobal.com?graphql=true",
  
   // e.g. https://www.myapi.com/api/v2
}))
return new ApolloClient({
  
  // link: authLink.concat(new HttpLink({
    link: slink,
  credentials:'include',
  cache: new InMemoryCache(),
  

});

}

export default createApolloClient;
