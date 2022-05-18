import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ButtonBack, Container, ContainerLanguage, ContainerTagsImperative, ListTypes } from "./styled"
import { FaArrowLeft } from "react-icons/fa";

const LanguagePage = () => {
  const { id } = useParams()
  const [language, setLanguage] = useState({})

  const getLanguages = async () => {
    await axios.get('dataset.json')
      .then(res => {
        const foundLanguage = res.data.find(data => data["Language"] === Number(id))
        if (!foundLanguage) navigate("/")
        setLanguage(foundLanguage)
      })
      .catch(console.log)
  }

  useEffect(() => {
    getLanguages()
  }, [])

  const navigate = useNavigate()

  return (
    <Container>
      <ContainerLanguage>
        <ButtonBack onClick={() => navigate("/")}>
          <FaArrowLeft />
        </ButtonBack>
        <h2>{language["Intended use"]}</h2>
        <img src={language["ImageUrl"]} alt="logo da linguagem" />
        <ContainerTagsImperative>
          <p>Imperative use of language: </p>
          {language["Imperative"]?.split(",").map(item => (<span key={item}>{item.trim()}</span>))}
        </ContainerTagsImperative>
        <ListTypes>
          {language["Object-oriented"] === "Yes" && (
            <li>Object oriented</li>
          )}
          {language["Functional"] === "Yes" && (
            <li>Functional</li>
          )}
          {language["Procedural"] === "Yes" && (
            <li>Procedural</li>
          )}
        </ListTypes>
      </ContainerLanguage>
    </Container>
  )
}

export default LanguagePage