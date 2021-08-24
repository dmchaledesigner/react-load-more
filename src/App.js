
import styled from 'styled-components/macro';
import PostsBlock from './PostsBlock';


function App() {
  return (
    <AppStyled className="container-fluid">
      <PostsBlock />
    </AppStyled>
  );
}


const AppStyled = styled.div`
  padding: 4rem 0rem
`

export default App;
