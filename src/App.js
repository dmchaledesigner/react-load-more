
import styled from 'styled-components/macro';
import Heading from './Heading';
import PostsBlock from './PostsBlock';


function App() {
  return (
    <AppStyled className="container-fluid">
      <Heading />
      <PostsBlock />
    </AppStyled>
  );
}


const AppStyled = styled.div`
  padding: 4rem 0rem;
  background-color: #f8f8f8;
`

export default App;
