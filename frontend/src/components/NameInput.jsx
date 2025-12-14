import React, { useState, useEffect } from 'react'

function NameInput(props) {

    const [name, setName] = useState("");

    const checkPersonDetails = async () => {
        try {

            const arr = name.split(',').map(tem => tem.trim()).filter(temp => temp != "");
            if (arr.length === 0) {
                alert("Please enter name");
                return;
            }
            const response = await fetch(`http://localhost:5000/api/names`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(arr)
            })
            if(!response.ok){
                throw new Error(`something went wrong  ${response.status}`)
            }
            props.getPersonDetails();
            setName("");
        } catch (err) {
            console.error('please try again',err);
        }


    }

    return (
        <>
            <div>
                <h1 className='fw-bold text-info text-decoration-underline text-center m-4'>THE SMART LEAD AUTOMATION SYSTEM</h1>
                <h2 className='text-primary fw-bolder'>Enter first name of each person in the batch list seperated by comma:</h2>
                <div className='d-flex align-items-center w-100 m-4 '>
                    <textarea className='w-50 p-4 me-4 form-control rounded-3 shadow-sm"' type='text' placeholder='enter first name of batch list' onChange={(e) => setName(e.target.value)} value={name} />
                    <button className='btn btn-success btn-lg' onClick={checkPersonDetails}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default NameInput;