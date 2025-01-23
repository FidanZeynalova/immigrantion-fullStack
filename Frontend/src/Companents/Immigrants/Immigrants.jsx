import React from 'react'
import { useGetImigrantsQuery } from '../../App/slices/ImigrantSlice'

function Immigrants() {

  let { data, isLoading, refetch } = useGetImigrantsQuery()
  console.log(data);
  return (
    <div className='Immigrant'>
      <div className="container">
        <div className="text">
          <h2>Requirements to be Immigrants</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        </div>
        <div className="sort-search">
          <div className="search">
            <input type="text" placeholder='Search...'/>
          </div>
          <div className="sort">
            <select>
              <option value="">A-Z</option>
              <option value="">Z-A</option>
            </select>
          </div>
        </div>
        <div className="card-wrapper">

          {
           isLoading ? (
            <h1>...Loading</h1>
           ) :(
            
              data.map(item => (
                <div className="card">
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
