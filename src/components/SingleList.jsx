import { styled } from "styled-components";

const SingleList = ({ data }) => {
  const { title, container } = data;

  return (
    <Wrapper>
      <div className='heading'>
        <h5>{title}</h5>
      </div>
      <table className='table'>
        <tbody>
          <tr>
            <th>{title}</th>
            <th>Link</th>
          </tr>
          {container.map((item, index) => {
            const { name, link } = item;
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>
                  <a href={link} target='_blank'>
                    {name}
                  </a>
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
  .table {
    margin: auto;
    width: 70%;
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
    color: blueviolet;
  }
`;
export default SingleList;
