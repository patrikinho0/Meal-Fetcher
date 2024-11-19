import { useState } from "react"
import Motorcycle from "./Motorcycle"
import Loading from "./Loading/Loading"

function Motorcycles() {
    const [motorcycles, setMotorcycles] = useState([])
    const [searchedMake, setSearchedMake] = useState("")
    const [searchedModel, setSearchedModel] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/motorcycles?make=${searchedMake}&model=${searchedModel}`,
                {headers: {'X-Api-Key': 'e6xSyxoN0C0EGvljTxnuVA==TYVez0dtzgh4x8tV'}}
            )
            
            if(!response.ok)
                throw new Error("Failed to fetch data")

            const result = await response.json()
            console.log(result)
            setMotorcycles(result)
            setIsLoading(false)
        }
        catch(error) {
            console.log(error)
        }
    }

    const handleSearch = () => {
        fetchData()
    }

    return(
        <div>
            {isLoading && <Loading/>}
            <h1>Motorcycles</h1>
            <input type="text" value={searchedMake} onChange={(e) => setSearchedMake(e.target.value)}></input>
            <button onClick={handleSearch}>Search</button>
            {
                motorcycles.map((motorcycle, index) => 
                    <Motorcycle key={index} param={motorcycle}/>
                )
            }
        </div>
    )
}
export default Motorcycles