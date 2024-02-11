import React, { useState } from 'react';
import './style/style.css'


const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState('');

  const generatePassword = () => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      generatedPassword += allCharacters.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  };

  return (
    <div class='box' >
      <h2>Pass Generator</h2>
      <div>
       
        <input  class='inp'
          type="text"
          value={passwordLength}
          placeholder='uzunlugunu reqemle yaz'
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>
      <button class='btn' onClick={generatePassword}>Generate</button>
      {password && (
        <div>
          <p><b>Kopya ele :</b></p> {password}
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
