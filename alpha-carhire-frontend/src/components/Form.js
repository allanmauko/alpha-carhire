import React, { useState } from 'react'

function Form() {
    const [client, setClient] = useState({
        model: "",
        rate: '',
        contacts: '',
        name: ''
    })

    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://alpha-car-backend.herokuapp.com/clients", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: client.model,
            rate: client.rate,
            contacts: client.contacts,
            name: client.name,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => console.log(data));
        setClient({
          model: "",
          rate: "",
          contacts: "",
          name: "",
        });
    }
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input onChange={handleChange}  type="text" value={client.name} id="name" />
          <label className="form-label" htmlFor="name">
            Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input onChange={handleChange} type="text" value={client.contacts} id="contacts" />
          <label className="form-label" htmlFor="contacts">
            Contacts
          </label>
          <input onChange={handleChange} type="text" value={client.model} id="model" />
          <label className="form-label" htmlFor="model">
            Model
          </label>
          <input onChange={handleChange} type="text" value={client.daily_rate} id="rate" />
          <label className="form-label" htmlFor="rate">
            Rate
          </label>
          <input type="submit" id="submit" />
          {/* <label className="form-label" for="form7Example2">Submit</label> */}
        </div>
      </form>
    );
}

export default Form