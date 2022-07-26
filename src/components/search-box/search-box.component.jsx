const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <input
      // className='search-box' 
      type='search'
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler} />
  )
}

export default SearchBox;