import React, { useState } from 'react';
import  './LoginForm.css';
const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false);  

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openForm} className='buttonOpen'>Sign up / Log in</button>

      {isOpen && (
        <div className="form">
          <div className="form-content">
            <span className="close" onClick={closeForm}>&times;</span>
            <h2>Sign up / Log in</h2>
            <form>
              <div>
                <label htmlFor="email">e-mail</label>
                <input type="email" id="email" placeholder="הכנס אימייל" required />
              </div>
              <div>
                <label htmlFor="password">password</label>
                <input type="password" id="password" placeholder="הכנס סיסמה" required />
              </div>
              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
