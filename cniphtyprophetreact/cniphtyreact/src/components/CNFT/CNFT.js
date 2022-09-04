import './CNFT.css';
import cnftArray from '../CNFTProjectData';
import CNFTCard from './CNFTCard';

function CNFT() {

    console.log(cnftArray[4].policyID)

    return (
        <section>
            <div>
                <h1>CNFT Data</h1>
            </div>
            <CNFTCard />
        </section>
    )
}

export default CNFT