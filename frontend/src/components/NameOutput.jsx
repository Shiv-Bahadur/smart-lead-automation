import React, { useState, useEffect } from 'react'


function NameOutput({ data }) {

    const [personDetails, setPersonDetails] = useState([]);
    const [allPerson, setAllPerson] = useState([]);


    const filterStatus = (status) => {
        if (status == "All") {
            setAllPerson(personDetails);
        } else if (status == "Verified") {
            let filtered = personDetails.filter(val => val.status != "To Check")
            setAllPerson(filtered);
        } else {
            let filtered = personDetails.filter(val => val.status != "Verified")
            setAllPerson(filtered);
        }
    }

    const handleChange = (e) => {
        let status = e.target.value;
        filterStatus(status);
    }
    useEffect(() => {
        setAllPerson(data);
        setPersonDetails(data)
    }, [data])

    return (
        <>
            <div>
                <table className="table table-striped table-hover w-100 text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Predicated Country</th>
                            <th>Confidence Score</th>
                            <th>Status filter:<select onChange={handleChange}>
                                <option value="All">All</option>
                                <option value="Verified">Verified</option>
                                <option value="To Check">To Check</option>
                            </select></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPerson.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center text-muted">
                                    No person found
                                </td>
                            </tr>
                        ) : (

                            allPerson.map((person) => (
                                <tr key={person._id}>
                                    <td>{person.firstName}</td>
                                    <td>{person.country}</td>
                                    <td>{person.probability}</td>
                                    <td>{person.status}</td>
                                </tr>
                            )))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default NameOutput;