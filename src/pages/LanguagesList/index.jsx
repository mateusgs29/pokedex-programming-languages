import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Card from "../../components/Card"
import { ContainerInput, ContainerLanguages, ContainerList } from "./styled"
import { FaSearch } from "react-icons/fa"

const LanguagesList = () => {
  const [languages, setLanguages] = useState([])
  const [languageSearch, setLanguageSearch] = useState("")
  const [filteredLanguages, setFilteredLanguages] = useState([])

  const getLanguages = async () => {
    await axios.get('dataset.json')
      .then(res => {
        setLanguages(res.data)
        setFilteredLanguages(res.data)
      })
      .catch(console.log)
  }

  const filterLanguages = (event) => {
    setLanguageSearch(event.target.value)

    const filtered = languages.filter(language => 
      language["Intended use"].toUpperCase().indexOf(event.target.value.toUpperCase()) > -1
    )
    
    setFilteredLanguages(filtered)
  }

  useEffect(() => {
    getLanguages()
  }, [])

  return (
    <ContainerList>
      <h1>Pokedex programming languages</h1>
      <ContainerInput>
        <input 
          type="text" 
          placeholder="Search..." 
          value={languageSearch}
          onChange={filterLanguages}
        />
        <FaSearch />
      </ContainerInput>
      <ContainerLanguages>
        {filteredLanguages.map(l => (
          <Link to={`/${l["Language"]}`} key={l["Language"]}>
            <Card item={l} />
          </Link>
        ))}
      </ContainerLanguages>
    </ContainerList>
  )
}

export default LanguagesList