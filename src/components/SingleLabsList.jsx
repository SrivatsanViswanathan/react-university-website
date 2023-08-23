import { styled } from "styled-components";

const SingleLabsList = ({ data }) => {
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
            <th style={{ display: container[0].faq ? "" : "none" }}>
              {container[0].faq ? "FAQ" : null}
            </th>
          </tr>
          {container.map((item, index) => {
            const { name, link, faq } = item;
            return (
              <tr key={index}>
                {Array.isArray(name) ? (
                  <td>
                    {name.map((item) => {
                      return (
                        <div key={item}>
                          {item} <br />
                        </div>
                      );
                    })}
                  </td>
                ) : (
                  <td>{name}</td>
                )}
                {Array.isArray(link) ? (
                  <td>
                    {link.map((item, index) => {
                      return (
                        <div key={index}>
                          <a href={link[index]} target='_blank'>
                            {name[index]}
                          </a>
                          <br />
                        </div>
                      );
                    })}
                  </td>
                ) : (
                  <td>
                    <a href={link} target='_blank'>
                      {name}
                    </a>
                  </td>
                )}

                {faq ? (
                  faq === "-----" ? (
                    <td>-----</td>
                  ) : (
                    <td>
                      <a href={faq} target='_blank'>
                        FAQ
                      </a>
                    </td>
                  )
                ) : (
                  ""
                )}
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
export default SingleLabsList;
