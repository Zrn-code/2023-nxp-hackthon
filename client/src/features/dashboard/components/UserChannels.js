import TitleCard from "../../../components/Cards/TitleCard"

const userSourceData = [
    {
        "source": "Acetaminophen",
        "count": "150",
        "tags": ["Headache", "Fever"]
    },
    {
        "source": "Penicillin",
        "count": "100",
        "tags": ["Infections"]
    },
    {
        "source": "Erythromycin",
        "count": "80",
        "tags": ["Infections"]
    },
    {
        "source": "Ibuprofen",
        "count": "60",
        "tags": ["Pain", "Inflammation"]
    },
    {
        "source": "Aspirin",
        "count": "50",
        "tags": ["Headache", "Fever", "Heart Health"]
    },
    {
        "source": "Prednisone",
        "count": "20",
        "tags": ["Inflammation", "Allergies"]
    },
    {
        "source": "Ciprofloxacin",
        "count": "15",
        "tags": ["Infections"]
    },
    {
        "source": "Morphine",
        "count": "10",
        "tags": ["Pain"]
    },

]


function UserChannels(){
    return(
        <TitleCard title={"Most Used Medicine"}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th className="normal-case">Rank</th>
                        <th className="normal-case">Medicine</th>
                        <th className="normal-case">Amount</th>
                        <th className="normal-case">Tags</th>

                    </tr>
                    </thead>
                    <tbody>
                        {
                            userSourceData.map((u, k) => {
                                return(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <td>{u.source}</td>
                                        <td>{u.count}</td>
                                        <td>
                                        {u.tags.map((tag, index) => (
                                        
                                        <div key={index} className="badge badge-neutral">
                                            {tag}
                                        </div>
                ))}
            </td>
                                       
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </TitleCard>
    )
}

export default UserChannels