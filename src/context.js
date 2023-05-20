import React, { createContext, useContext, useState, useEffect } from 'react'
import { useCallback } from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState('')
	const [cocktails, setCocktails] = useState([])

	const fetchDrinks = useCallback(async () => {
		setLoading(true)
		try {
			const res = await fetch(`${url}${searchTerm}`)
			const data = await res.json()
			if(data.drinks) {
        const newCocktails = data.drinks.map(item => {
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item
          return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}, [searchTerm])

	useEffect(() => {
		fetchDrinks()
	}, [searchTerm, fetchDrinks])

	return <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)
