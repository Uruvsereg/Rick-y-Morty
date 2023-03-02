import SearchBar from '../SearchBar.jsx';

const NAV=({onSearch})=>{
    return(
        <nav>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}
export default NAV;