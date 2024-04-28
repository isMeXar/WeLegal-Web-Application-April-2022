import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './lawyer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import will from './img/will-bio-new.png';
import will_hover from './img/Fatneek-hover.jpg';
import lisa from './img/leena-bio-4-new.png';
import lisa_hover from './img/leena-hover.jpg';
import teach from './img/abib-bio-new.png';
import teach_hover from './img/teach-hover.jpg';

const Lawyer = () => {
  const [isShown1, setShowTeach] = useState(false)
  const MouseEnter1 = e => {
    setShowTeach(true)
  }
  const MouseLeave1 = e => {
    setShowTeach(false)
  }

  const [isShown2, setShowLisa] = useState(false)
  const MouseEnter2 = e => {
    setShowLisa(true)
  }
  const MouseLeave2 = e => {
    setShowLisa(false)
  }

  const [isShown3, setShowWill] = useState(false)
  const MouseEnter3 = e => {
    setShowWill(true)
  }
  const MouseLeave3 = e => {
    setShowWill(false)
  }

  return (
    <div id="OurLawyers">

      <div className="lawyer-images">
        <Link to="/Will" exact>
          <img className="imgpng" id="r3" src={will} alt="Fatneek Jr Will" onMouseEnter={MouseEnter3} onMouseLeave={MouseLeave3} />
        </Link>
        <Link to='/Lisa' exact>
          <img className="imgpng" id="r2" src={lisa} alt="Lisa Isaribi" onMouseEnter={MouseEnter2} onMouseLeave={MouseLeave2} />
        </Link>
        <Link to='/Teach' exact>
          <img className="imgpng" id="r1" src={teach} alt="Marshall D Teach" onMouseEnter={MouseEnter1} onMouseLeave={MouseLeave1} />
        </Link>
      </div>

      {isShown3 && (
        <div id="lawyer3" className="introduction" onMouseEnter={MouseEnter3} onMouseLeave={MouseLeave3}>
          <div className="name">
            <img src={will_hover} alt="Fatneek Jr Will" />
            <div className="role">
              <h1 className="ln">Fatneek Jr Will</h1>
              <h2 className="lp">Business LAWYER | Senior Partner</h2>
              <div className="phone-email">
                <p className="cnt"><FontAwesomeIcon className="fa-solid" icon={faPhone} />604-974-9529</p>
                <p className="cnt"><FontAwesomeIcon className="fa-solid" icon={faEnvelope} />will@welegal.ma</p>
              </div>
            </div>
          </div>
          <div className="ftext">
            Fatneek Jr Will wears many hats including being a father, a husband, an accredited mediator and an experienced family law lawyer. He is calming, confident and compassionate towards all his clients.
            <br/><br/>
            He often deals with high-conflict cases, including parenting issues in which he has been successful counsel numerous times. But he finds real gratification when his clients find ways to resolve their disputes outside of court, with more control and satisfaction.
            <br/><br/>
            William mediates all types of family law issues as an accredited mediator. However, if court or litigation are the only way to go, he is not afraid of taking the bull by its horns. William has had numerous reported and unreported successes in all types of family law cases including parenting, asset division, support, etc. But what really sets him apart is his attitude, his calm demeanor, the way he gets along with just about anyone, including his own clients, opposing counsel, judges, etc.
          </div>
          
        </div>
      )}

      {isShown2 && (
        <div id="lawyer2" className="introduction" onMouseEnter={MouseEnter2} onMouseLeave={MouseLeave2}>
          <div className="name">

            <img src={lisa_hover} alt="Lisa Isaribi" />
            <div className="role">
              <h1 className="ln">Lisa Isaribi</h1>
              <h2 className="lp">FOUNDER | FAMILY LAWYER | MEDIATOR - Agadir</h2>
              <div className="phone-email">
                <p className="cnt"><FontAwesomeIcon className="fa-solid" icon={faPhone} />604-974-9529</p>
                <p className="cnt"><FontAwesomeIcon className="fa-solid" icon={faEnvelope} />lisa@welegal.ma</p>
              </div>
            </div>
          </div>
          <div className="ftext">Lisa Isaribi is a multi award winning family lawyer, accredited mediator
            and the founder of WeLegaL, the fastest growing female-led law firm in Western Canada.
            <br /><br />
            She has been chosen as one of the Top 25 Most Influential Lawyers in Canada, one
            of  Business in Vancouve's Top 40 under 40, and voted as the #1 top-rated Vancouver
            Divorce Lawyer in BC*. She has won over 90% of her family law cases from 2013 to
            present*.
            <br /><br />
            In 2020, she was named by Lexpert as the only family lawyer in Canada to become
            the Rising Star of the legal profession. In 2021, she was chosen as one of the Top 75
            Immigrants in Canada by the Canadian Immigrant organization.
          </div>
        </div>
      )}

      {isShown1 && (
        <div id="lawyer1" className="introduction" onMouseEnter={MouseEnter1} onMouseLeave={MouseLeave1}>
          <div className="name">
            <img src={teach_hover} alt="Marshall D Teach" />
            <div className="role">
              <h1 className="ln lnm" >Marshall D Teach</h1>
              <h2 className="lp">Agadir FAMILY & DIVORCE LAWYER</h2>
              <div className="phone-email">
                <p className="cnt"><FontAwesomeIcon className="fa-solid" icon={faPhone} />604-974-9529</p>
                <p className="cnt"><FontAwesomeIcon className="fa-solid" icon={faEnvelope} />teach@welegal.ma</p>
              </div>
            </div>
          </div>
          <div className="ftext">
            Confidence, is the first impression you will have of Marshall D Teach, our Agadir Family & Divorce Lawyer.
            Confidence is one of the most important qualities a family lawyer can have to win at negotiations,
            settlements and most importantly the Court. This quality in Teach shines through the moment you meet him and
            carries itself in to the Court room which Abib has been to hundreds of time, and which he wins in, over and over again.
            <br /><br />
            Teach is experienced in various areas of law ranging from family, to criminal, to civil litigation, and to wills & estates.
            All of these issues can be a part of family law so having knowledge in their legalities is a major asset. While Abib brings
            a breadth of creative and fresh experience to the YLaw team, the primary focus of his practice, as well as his strengths and
            interest, fall right in the area of BC Family Law.
          </div>
        </div>
      )}

    </div >
  );
}

export default Lawyer;
