import React, { useEffect, useState } from 'react'
import { useGetImigrantsQuery } from '../../App/slices/ImigrantSlice'

function Immigrants() {

  let { data, isLoading, refetch } = useGetImigrantsQuery()
  let [allData, setAllData] = useState([])
  useEffect(() => {
    if (!isLoading) {
      setAllData(data)
    }
  }, [data])

  function handleSearch(inpValue) {
    if (inpValue.trim().toLowerCase() == '') {
      setAllData(data)
    } else {
      let filter = allData.filter((item) => item.country.toLowerCase().startsWith(inpValue.trim().toLowerCase()))
      setAllData(filter)
    }
  }
  function handleSort(sortedValue) {
    let SortData = [...allData]
    switch (sortedValue) {
      case "az":
        SortData.sort((a, b) => a.country.localeCompare(b.country))
       
        break;
      case "za":
        SortData.sort((a, b) => b.country.localeCompare(a.country))
        break;
      default:
       SortData = [...data]
        break;
    }
    setAllData(SortData)
  }

  return (
    <div className='Immigrant'>
      <div className="container">
        <div className="text">
          <h2>Requirements to be Immigrants</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
        <div className="sort-search">
          <div className="search">
            <input type="text" placeholder='Search...'
              onChange={(e) => handleSearch(e.target.value)} />
          </div>
          <div className="sort" onClick={(e) => handleSort(e.target.value)}>
            <select>
              <option value="">Default</option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
          </div>
        </div>
        <div className="card-wrapper">
          {
            isLoading ? (
              <h1>...Loading</h1>
            ) : (

              allData.map(item => (
                <div className="card" key={item._id}>
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <button>{item.country}</button>
                  <h2>{item.title}</h2>
                  <span>{item.desc}</span>
                </div>
              ))

            )
          }
        </div>
      </div>
    </div>
  )
}

export default Immigrants
