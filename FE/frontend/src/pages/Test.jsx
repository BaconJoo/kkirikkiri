import { useRef } from 'react';
import FlipPage from 'react-pageflip';
import styled from 'styled-components';
import bookcover from '../assets/book/bookcover.png'
import bookcover2 from '../assets/book/bookcover2.png'
import bookData from '../../public/dummydata/book.json';

const Container = styled.div`
  position: fixed;
  top: 8rem;
  width: 100vw;
`;

const PageCoverStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  background-image: url(${bookcover});
  background-size: 100% 100%;;
  border: 0.1rem solid #6d6d6d;
  border-radius: 0.6rem;
  box-shadow:
    inset 0 0 100px 30px rgba(0, 0, 0, 0.4),
    0 0 50px 10px rgba(0, 0, 0, 0.3);
  font-size: large;
  color: black;
  flex-direction: column;
`;

const LastPageCoverStyle = styled(PageCoverStyle)`
  background-image: url(${bookcover2});  
`;

const BookContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  /* top: -5rem; */
`;

const Page = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0.3rem;
  font-size: 20px;
  width: 100%;
  height: 100%;
  background-color: rgb(236, 235, 228);
  border: 0.1rem solid #6d6d6d;
  box-shadow: inset 0 0 50px 10px rgba(0, 0, 0, 0.5);
  font-size: large;
  color: black;
  position: relative;
  background-image: url(${props => props.image});
  background-size: cover;
  flex-direction: column;

`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageButton = styled.button`
  width: 2rem;
  height: 3rem;
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:hover {
    background-color: #e7e7e7;
  }
`;
const BookTitle = styled.span`
  font-size: 2.3rem;
`;  
const BookAuthor = styled.span`
  font-size: 1.7rem;
`;  
const BookContent = styled.span`
  margin: 2rem;
  font-size: 1.5rem;
`;  
const BookImage = styled.img`
  width: 20rem;
`;  
const Test = () => {
  const bookRef = useRef(null);

  const goToPage = (pageNumber) => {
    bookRef.current.pageFlip().flip(pageNumber - 1);
  };

  return (
    <Container>
      <BookContainer>
        <FlipPage 
          width={450} height={600} ref={bookRef} showCover={true}>
          <div data-density='hard'>
            <PageCoverStyle>
              <BookTitle>{bookData.title}</BookTitle>
              <BookAuthor>{bookData.author} 작가님</BookAuthor>
            </PageCoverStyle>
          </div>
          {bookData.pages.map((page, index) => (
            <div key={index}>
              <Page>
                <BookImage src={`/dummydata/${page.image}`} alt={`Page ${index + 1}`}/>
                <BookContent>{page.content}</BookContent>
              </Page>
            </div>
          ))}
          <div data-density='hard'>
            <LastPageCoverStyle/>
          </div>
        </FlipPage>

        <ButtonContainer>
          {[...Array(10).keys()].map((number) => (
            <PageButton key={number} onClick={() => goToPage(number+2)}>
              {number+1}
            </PageButton>
          ))}
        </ButtonContainer>
      </BookContainer>
    </Container>
    
  );
};

export default Test;