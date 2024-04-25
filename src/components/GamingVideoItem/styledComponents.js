import styled from 'styled-components'

export const ShortList = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 20px 10px 10px 10px;
  list-style-type: none;
  border-radius: 10px;

  @media (max-width: 576px) {
    width: 45%;
    margin: 10px 5px 5px 5px;
  }
`
export const ThumbnailShort = styled.img`
  height: 200px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
`
export const ShortH1 = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${props => (props.isLight ? 'black' : 'white')};

  @media (max-width: 576px) {
    font-size: 15px;
  }
`
export const ShortPara = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #94a3b8;

  @media (max-width: 576px) {
    font-size: 10px;
  }
`
