import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Link
} from 'react-router-dom';
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Contact from '../../Contact/Contact';

import img_1 from '../img/will-bio-new.png';
import img_2 from '../img/willAppraoch.png';

const Will = () => {
  return (
    <div id="member">
      
      <div id="Attorney">
        <div id="content-bio1">
          <img class="lawyer1" src={img_1} alt="Fatneek Jr Will" />
          <div class="content1">
            <h1 class="ln">Fatneek Jr Will</h1>
            <h2 class="lp"> FAMILY LAWYER | MEDIATOR - AGADIR</h2>
            <div class="phone-email">
              <p class="cnt"><FontAwesomeIcon className="fa-solid" icon={faPhone} />604-974-9529</p>
              <p class="cnt"><FontAwesomeIcon className="fa-solid" icon={faEnvelope} />fatneek@welegal.ma</p>
            </div>
            <p class="ftext">Will wears many hats including being a father, a husband, an accredited mediator and an experienced family law lawyer. He is calming, confident and compassionate towards all his clients.
              <br /><br />
              He often deals with high-conflict cases, including parenting issues in which he has been successful counsel numerous times. But he finds real gratification when his clients find ways to resolve their disputes outside of court, with more control and satisfaction.
              <br /><br />
              Will mediates all types of family law issues as an accredited mediator. However, if court or litigation are the only way to go, he is not afraid of taking the bull by its horns. Will has had numerous reported and unreported successes in all types of family law cases including parenting, asset division, support, etc. But what really sets him apart is his attitude, his calm demeanor, the way he gets along with just about anyone, including his own clients, opposing counsel, judges, etc.
              <br /><br />
              It is his peaceful and confident energy that lends itself to amicable settlements and calm resilience and persistence at negotiations and mediations. Family law is full of emotions such as anxiety, stress, sadness and fear. Will helps to deal with and reduce these negative emotions and leads his clients towards peaceful outcomes.
              <br /><br />
              Will also practices in the areas of criminal law, civil litigation, and estate planning.
              <br /><br />
            </p>
          </div>
        </div>
      </div>

      <div id="Approach">
        <h1 class="bt">APPROACH</h1>
        <div id="content-bio2">
          <p class="atext">
            William's goal is to make things easier for you, not harder.
            <br/><br/>
            William's approach to family law includes:
            <br/><br/>
            <ul>
            <li>Looking out for your long term interest, whether that is settling outside of the court or litigating on your behalf.</li>
            <li>Recognizing that the adversarial litigation is not always well suited for family law matters but is not afraid of fully protecting his clients in court if necessary.</li>
            <li>Believing in collaborative problem solving. This includes mediation, negotiation and collaborative law.</li>
            <li>Being responsive to his clients concerns, and recognizes that it's important to keep his clients fully informed.</li>
            <li>Providing realistic expectations for his clients and at the same time empowering them to make the right decisions.</li>
            </ul>
            <br/><br/>
            William takes a child centric approach to family law dispute involving children. As a parent and family dispute resolution professional, William is aware of the effects contentious litigation can have on children. William has worked on many high-conflict parenting cases, including alienation and estrangement cases.
          </p>
          <img class="lawyer1-1" src={img_2} alt="fatneek Appraoch" />
        </div>
      </div>

      <div id="PersonalInfo2">
        <div class="grid1">
          <div class="grid-item1">
            <h1 class="title"><FontAwesomeIcon icon={faGraduationCap} className="fa-solid" />Education</h1>
            <div class="per-content">
              <p class="lightP">
              Graduated from law school on Dean's List<br/><br/>
              Inducted Golden Key International Honors Society during undergraduate studies for academic excellence
              </p>
              <h3 class="darkST">Leena sits on the following boards in the legal community:</h3>
              <p class="lightP">Canadian Bar Association - Family Law Section;<br /><br />
                The National Legal Aid Liaison Committee;<br /><br />
              </p>
              <h3 class="darkST">She is a member of:</h3>
              <p class="lightP">Greater Vancouver Board of Trade BC Chamber of Commerce Trial Lawyers Association of the British Columbia.</p>
            </div>
          </div>
          <div class="grid-item2">
            <h1 class="title"><FontAwesomeIcon icon={faMedal} className="fa-solid" />Achievements</h1>
            <div class="per-content">
              <p class="lightP">
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />William was the successful counsel on the precedent-setting case of <span>B. v. M.P.</span>, where he argued that it was not in the children's best interest to be ordered to return to Canada during COVID-19.<br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />William specializes, and has been successful in many relocation cases which are some of the most complicated parenting cases in British Columbia. One of his reported cases is <span>W. v. L.V.</span><br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />In one of William's first cases, he successfully argued that it was in the best interest of the child for primary residency to be transferred from the mother to the father, despite the fact that in the Views of the Child report the child expressed a preference to stay with his mother: M<span>.J. v. D.C.G.</span> <br /><br />
              </p>
            </div>
          </div>
          <div class="grid-item3">
            <h1 class="title"><FontAwesomeIcon icon={faEarth} className="fa-solid" />Language</h1>
            <div class="per-content">
              <p class="lightP">
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />French<br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />English<br /><br />
              </p>
            </div>
          </div>
          <div class="grid-item4">
            <h1 class="title"><FontAwesomeIcon icon={faTrophy} className="fa-solid" />Vectories</h1>
            <div class="per-content">
              <div class="vect">
                <p class="lightP">
                  <span>S.C. v. H.S.</span> - precedent setting case on international child abduction featured in the media;
                </p>
                <Link to="/Result" exact><FontAwesomeIcon icon={faPlus} className="fa-solid fa-plus" /></Link>
              </div>
              <div class="vect">
                <p class="lightP">
                  <span>Storey v. Terry</span> - precedent setting case for BC on unequal division of debts;
                </p>
                <Link to="/Result" exact><FontAwesomeIcon icon={faPlus} className="fa-solid fa-plus" /></Link>
              </div>
              <Link to="/Result" exact class="victory">
                See more victories<FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Contact />

    </div>


  );
}
export default Will;