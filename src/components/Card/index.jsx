import React from "react"
import styled from 'styled-components'

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  h4 {
    font-size: 1.1rem;
    color: #000;
    font-weight: bold;
    margin-bottom: 5px;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
`

const Card = ({ item }) => {
  return (
    <ContainerCard>
      <h4>{item["Intended use"]}</h4>
      <img src={item["ImageUrl"]} alt="" />
    </ContainerCard>
  )
}

export default Card