/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/**
 * Import
 */
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Local import
 */
// Composants
import MuseoLogoBW from 'src/styles/images/logo_museo_couleur.png';
import Background from 'src/styles/images/BG-Login-Signin.png';
// Styles et assets
import './signin.scss';

/**
 * Code
 */
const Signin = () => {

  // Je récupère le focus d'un input
  const handleFocus = (e) => {
    // J'ajoute la classe focus à l'élément focus, ce qui passe sa bordure en violet.
    console.log(e.target.previousSibling);
    e.target.previousSibling.classList.add('open', 'focus');
    e.target.classList.add('focus');
  };

  // Je récupère le blur d'un input
  const handleBlur = (e) => {
    // Je remove la classe focus, ce qui redonnera à l'élément la bordure de base
    e.target.previousSibling.classList.remove('focus');
    e.target.classList.remove('focus');
  };

  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
    <div className="signin">
      <div className="signin-container">


        <h1><img src={MuseoLogoBW} alt="Museo" /></h1>
        <p className="login-container_subtitle">Application cartographique pour vos monuments et musées favoris </p>


        <form action="">
          <div className="signin-container_names">
            <div>
              <label htmlFor="last-name">Nom</label>
              <input type="text" id="last-name" name="last-name" placeholder="Nom" onClick={handleFocus} onBlur={handleBlur} />
            </div>

            <div>
              <label htmlFor="first-name">Prénom</label>
              <input type="text" id="first-name" name="first-name" placeholder="Prénom" onClick={handleFocus} onBlur={handleBlur} />
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" onClick={handleFocus} onBlur={handleBlur} />
          </div>

          <div>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" placeholder="Mot de passe" onClick={handleFocus} onBlur={handleBlur} />
          </div>

          <div>
            <label htmlFor="password-confirm">Confirmer votre mot de passe</label>
            <input type="password" id="password-confirm" name="password-confirm" placeholder="Confirmer votre mot de passe" onClick={handleFocus} onBlur={handleBlur} />
          </div>

          <button type="submit">M'inscrire</button>

          <p className="map-link"><Link to="/login">J'ai déjà mes identifiants</Link></p>
        </form>

      </div>
    </div>
</div>
  );
};

/**
 * Export
 */
export default Signin;
