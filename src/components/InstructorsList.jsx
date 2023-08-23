import { styled } from "styled-components";

const InstructorsList = ({ data }) => {
  return (
    <Wrapper>
      <div className='heading'>
        <h5>Professors</h5>
      </div>
      <div className='mobile'>
        {data.map((item, index) => {
          const { name, email, link, image } = item;
          return (
            <div key={index} className='prof-content'>
              <img src={image} alt={name} />
              <div className='prof-info'>
                <h4>Dr. {name}</h4>
                <div>Contact : {email}</div>
                <div>
                  <a href={link} target='_blank'>
                    More Information
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <table className='table'>
        <tbody>
          <tr>
            <th>Professor</th>
            <th>Contact</th>
            <th>More Information</th>
            <th>Image</th>
          </tr>
          {data.map((item, index) => {
            const { name, email, link, image } = item;
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <a href={link} target='_blank'>
                    More Information
                  </a>
                </td>
                <td>
                  <img src={image} alt={name} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin-bottom: 2rem;
  .heading {
    width: 15rem;
    margin: auto;
    text-align: center;
    border-bottom: 2px solid black;
  }
  .mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .prof-content {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
  .prof-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #002d72;
    width: 17.5rem;
    min-width: 80%;
    max-width: 100%;
    height: auto;
    margin: auto;
    padding: 0.5rem;
    color: white;
  }
  .table {
    display: none;
    margin: auto;
    width: 95%;
    border-collapse: collapse;
    border: 2px solid black;
    margin-top: 1rem;
    text-align: center;
  }
  .table tr,
  th,
  td {
    border: 2px solid black;
  }
  .table tr {
    min-width: 30rem;
  }

  a {
    color: yellow;
    border-bottom: 1px solid yellow;
  }
  img {
    width: 17.5rem;
    min-width: 80%;
    max-width: 100%;
    height: auto;
    margin: auto;
    padding: 0.5rem;
  }
  .mobile img {
    margin-top: 1rem;
    padding: 0;
  }
  @media (min-width: 726px) {
    .table {
      display: none;
    }
    .mobile {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 80vw;
      margin: auto;
      gap: 3rem;
    }
    .prof-content {
      display: grid;
      grid-template-columns: 1fr;
      align-items: start;
    }
    .prof-info {
      display: flex;
      gap: 0.5rem;
      height: 100%;
      width: 100%;
    }
    img {
      width: 100%;
      height: auto;
      margin: auto;
      align-self: flex-start;
    }
  }
  @media (min-width: 900px) {
    .mobile {
      width: 80vw;
    }
  }
`;
export default InstructorsList;
