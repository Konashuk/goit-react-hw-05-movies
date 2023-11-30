import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
}

#root {
  margin: 20px;
}

h1, h2, h3, h4, h5, h6 {
  color: #333;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px;
}

p {
  margin-bottom: 10px;
}

img {
  max-width: 100%;
  height: auto;
  margin: 5px;
}`;
