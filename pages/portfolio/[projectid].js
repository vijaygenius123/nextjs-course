import {useRouter} from "next/router";

function PortfolioProject(){

    const router = useRouter()

    console.log(router)

    return(
        <div>
            <h1>Portfolio Project Page</h1>
        </div>
    )
}

export default PortfolioProject
