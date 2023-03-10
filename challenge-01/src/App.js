
import './App.css';
import styled from 'styled-components';


let Text_Array = [
  {
    image: "image1.png",
    title: "The Virtual Event Production Kit",
    description: "Want templates built by event leaders for event leaders? In this kit, you’ll get seven templates and a glossary of terms"
  },
  {
    image: "image2.png",
    title: "The Virtual Event Sponsorship Guide + Wor...",
    description: "It’s challenging to prove ROI and value for virtual event sponsorships. Get tools, inspiration, and exercises to help"
  },
  {
    image: "image3.png",
    title: "The Event Budgeting Guide",
    description: "Budgeting can be challenging for the most seasoned of event professionals. In this guide, you’ll get everything you"
  }
]

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;

  @media (max-width:950px){
    display: flex;
    flex-direction: column;  
    padding-top: 20px;
  }
  @media (max-width:1200px){
    /* padding-top: 50px; */
    display: flex;
    flex-direction: column; 
    padding-top: 20px; 
  }
`

const Card = styled.div`
  background-color: #C9BDB9;
  border-radius: 25px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 350px;
  height: 480px;

  img {
    height: 200px;
    object-fit: cover;
    width: 100%;
  }

  .content {
    padding: 16px;
  }
  

  h2 {
    font-size: 28px;
    margin: 0 0 15px;
    font-weight: 100;
    /* white-space: nowrap;  */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; 
 
  }

  p {
    font-size: 18px;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; 
  }

  @media (max-width:950px){
    margin-top: 50px;
  }

  @media (max-width:1200px){
    margin-top: 50px;
  }

  @media (max-width:385px){
    width: auto;
  height: auto;
  margin: 10px;
  }


`;

const LearnMore = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  img{
    width: 40px;
    height: 40px;
  }
  div{
    margin:5px 0 0 15px ;
    font-size: 18px;
  }
`


function App() {
  return (
    <div >

      {/* <Cards >
        <CardImage />
      </Cards> */}
      <CardList>
        {Text_Array.map((cardData) => {
          return (
            <Card>
              <img src={cardData.image} alt="Card image" />
              <div className="content">
                <h2>{cardData.title}</h2>
                <p>{cardData.description}</p>
                <LearnMore>
                  <img src="arrow.png" alt="Card image" />
                  <div>Learn More</div>
                </LearnMore>
              </div>
            </Card>
          )
        })}


      </CardList>

    </div>
  );
}

export default App;
