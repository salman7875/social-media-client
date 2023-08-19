import SearchUser from '../../layout/SearchUser/SearchUser'
import './search.scss'

const Search = () => {
  return (
    <div className='search'>
      <div className='search-container'>
        <input type='text' placeholder='Search' />
        <button>Cancel</button>
      </div>
      <hr />
      <SearchUser />
      <SearchUser />
      <SearchUser />
    </div>
  )
}

export default Search
