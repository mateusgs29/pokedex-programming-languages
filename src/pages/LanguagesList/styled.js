import styled from "styled-components"

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 50px;
  padding: 0 20px;
  h1 {
    margin: 30px 0;
    color: #f5f5f5;
    text-align: center;
  }
`

export const ContainerLanguages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  margin-bottom: 30px;
  border-radius: 5px;
  position: relative;


  input {
    background-color: transparent;
    border: none;
    font-size: 1.1rem;
    padding: 10px;
  }
  svg {
    position: absolute;
    right: 10px;
  }
`