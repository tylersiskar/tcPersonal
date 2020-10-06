import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'c7u3lavwvjo5';
const API_TOKEN = '15q_wxYNzThOyULP_RCbmVB59s-A5k8yzVqj6H-jsyg';
export function fetchPosts() {

  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/environments/master/entries/5XI88vxDZcXcpASi6SFKcW?access_token=${API_TOKEN}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
