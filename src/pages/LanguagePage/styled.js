import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerLanguage = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  max-width: 450px;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }

  img {
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 5px;
  }
`

export const ContainerTagsImperative = styled.div`
  margin: 15px 0px;
  display: flex;
  flex-wrap: wrap;
  p {
    margin-bottom: 5px;
    font-size: 1.1rem;
    width: 100%;
  }

  span {
    border-radius: 50px;
    padding: 5px 10px;
    margin: 5px;
    background-color: #ccc;
  }
`

export const ListTypes = styled.ul`
  margin-left: 10px;
  li {
    font-size: 1.1rem;
  }
`

export const ButtonBack = styled.button`
  align-self: flex-start;
  font-size: 15px;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
`