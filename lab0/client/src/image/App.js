import React, { useState } from 'react';

function PhoneBookForm({ onSubmit }) {
  const [firstName, setFirstName] = useState('Coder');
  const [lastName, setLastName] = useState('Byte');
  const [phone, setPhone] = useState('8885559999');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ firstName, lastName, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First name:</label>
      <br />
      <input 
        name='userFirstname' 
        type='text'
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        name='userLastname' 
        type='text' 
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        name='userPhone' 
        type='text'
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <br/>
      <input 
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({ entries }) {
  const sortedEntries = entries.sort((a, b) => a.lastName.localeCompare(b.lastName));
  return (
    <table className='informationTable'>
      <thead> 
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Phone</th>
        </tr>
      </thead> 
      <tbody>
        {sortedEntries.map((entry, index) => (
          <tr key={index}>
            <td>{entry.firstName}</td>
            <td>{entry.lastName}</td>
            <td>{entry.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function PhoneBook() {
  const [entries, setEntries] = useState([{ firstName: 'Coder', lastName: 'Byte', phone: '8885559999' }]);

  const addEntryToPhoneBook = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <section>
        <PhoneBookForm onSubmit={addEntryToPhoneBook} />
        <InformationTable entries={entries} />
    </section>
  );
}