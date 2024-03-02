

function Home({handleSearch,searchQuery }:any) {
  return (
   <>
     <form onSubmit={handleSearch}>
        <input 
          type="search" 
          name='search' 
          id='search' 
          ref={searchQuery}  
        />

      </form>
   </>
  )
}

export default Home