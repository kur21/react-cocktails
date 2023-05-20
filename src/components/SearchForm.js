import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

export default function SearchForm() {
	const { setSearchTerm } = useGlobalContext()
	const searchValue = useRef('')

	const searchCocktail = () => {
    let debounce = setTimeout(() => {
      setSearchTerm(searchValue.current.value)
      if(debounce) clearTimeout(debounce)
    }, 800);
	}

  const handleSubmit = (e) => {
    e.preventDefault()
  }

	useEffect(() => {
		searchValue.current.focus()
	}, [])

	return (
		<section className="section search">
			<form className="search-form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">Search your favorite cocktail</label>
					<input type="text" id="name" ref={searchValue} onChange={searchCocktail} />
				</div>
			</form>
		</section>
	)
}
