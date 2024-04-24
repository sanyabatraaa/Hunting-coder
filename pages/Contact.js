import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, phone, desc, email);
    const data = {
      name: name,
      phone: phone,
      email: email,
      description: desc
    };
    fetch("http://localhost:3000/api/postcontact/",{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data=>{
      console.log("success")
      alert("thanks for connecting wth us");
      setDesc('');
      setEmail('');
      setName('');
      setPhone('');
    })
    .catch((err)=>{
      console.log(err)
    })


  }
  const handleChange = (e) => {
  console.log(e.target.name)
  console.log(e.target.value)

    if (e.target.name === 'phone') {
      setPhone(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'desc') {
      setDesc(e.target.value);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <br />
        <br />
        <h1>Contact Us</h1>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formLabel}>
              Email address
            </label>
            <input
              type="text"
              value={email}
              onChange={handleChange}
              className={styles.formcontrol}
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={handleChange}
              className={styles.formcontrol}
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              name="name"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="Phone" className={styles.formLabel}>
              Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={handleChange}
              className={styles.formcontrol}
              id="Phone"
              placeholder="Phone"
              name="phone"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="desc" className={styles.formLabel}>
              Elaborate your concern
            </label>
            <textarea
              value={desc}
              onChange={handleChange}
              className={styles.formcontrol}
              placeholder="Write your concern here"
              id="desc"
              name="desc"
            ></textarea>
          </div>
          <button type="submit" className={styles.btnprimary}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
