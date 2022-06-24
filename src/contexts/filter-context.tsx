import { createContext, useContext } from "react";
import {FilterContextData } from "../types/filter";


export const FilterContext = createContext<FilterContextData>({} as FilterContextData);

interface filterProps {
    filterOption: string;
    optionActive: string;
    optionDeactive: string;
}



export function TestContext({
    filterOption,
    optionActive,
    optionDeactive
}: filterProps){
    

   const {CurrentFilter,setCurrentFilter,filters} = useFilterContext()
  
    return(
      <>
        
  
        {
          filters.map(filter=>(
            <div className={`${filterOption} ${filter.name===CurrentFilter.name?optionActive:optionDeactive}`} 
                onClick={()=>{setCurrentFilter(filter)}}>
              <h5>{filter.name}</h5>
            </div>
          ))
        }
        
    
      </>
    )
  }

export const useFilterContext = () => useContext(FilterContext);