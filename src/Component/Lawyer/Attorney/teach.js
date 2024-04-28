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

import img_1 from '../img/abib-bio-new.png';
import img_2 from '../img/teachAppraoch.png';

const Teach = () => {
  return (
    <div id="member">
      <div id="Attorney">
        <div id="content-bio1">
          <img class="lawyer1" src={img_1} alt="LEENA R. YOUSEFI" />
          <div class="content1">
            <h1 class="ln"></h1>
            <h2 class="lp">FOUNDER | FAMILY LAWYER | MEDIATOR - AGADIR</h2>
            <div class="phone-email">
              <p class="cnt"><FontAwesomeIcon className="fa-solid" icon={faPhone} />604-974-9529</p>
              <p class="cnt"><FontAwesomeIcon className="fa-solid" icon={faEnvelope} />teach@fojitura.ma</p>
            </div>
            <p class="ftext">Leena (Ronak) Yousefi is a multi award winning family lawyer, accredited mediator
              and the founder of YLaw, the fastest growing female-led law firm in Western Canada.
              <br /><br />
              She has been chosen as one of the Top 25 Most Influential Lawyers in Canada, one
              of  Business in Vancouve's Top 40 under 40, and voted as the #1 top-rated Vancouver
              Divorce Lawyer in BC*. She has won over 90% of her family law cases from 2013 to
              present*.
              <br /><br />
              In 2020, she was named by Lexpert as the only family lawyer in Canada to become
              the Rising Star of the legal profession. In 2021, she was chosen as one of the Top 75
              Immigrants in Canada by the Canadian Immigrant organization.
              <br /><br />
              A week in her life was recently featured on BBC.
              <br /><br />
              <span class="st">Precedent Setting Success</span><br /><br />
              Leena has been the successful counsel on several ground breaking cases in British
              Columbia featured in media through both the Supreme Court and the Court of
              Appeal of BC. She has been successful on numerous precedent setting cases
              including those on child abduction, property division, spousal support, child custody,
              child alienation and child support in BC.

              Provincial and Supreme Court Judges have commended Leena on her outstanding and clear representation in
              court, with one commenting on her submissions as "thorough and clear" and another, thanking her for her
              "professionalism", "able submissions" and the way she conducted herself at acrimonious and tenacious trials.
              <br /><br />
              Leena is the only lawyer in the history of British Columbia to have her law firm ranked in the Top 400 Fastest Growing
              Companies in Canada by the Globe and Mail, and in the Top 500 Companies by the Canadian Business. Leena's
              success both as a lawyer and a businesswoman has been comprehensively profiled through multiple prestigious
              and national publications, including the Canadian Business and the Globe and Mail.
              <br /><br />
            </p>
          </div>
        </div>
      </div>

      <div id="Approach">
        <h1 class="bt">APPROACH</h1>
        <div id="content-bio2">
          <p class="atext"><p class="atext">
            Teach is an ambitious lawyer with an insatiable thirst for success and client satisfaction. He is curious about his cases and that makes him think constantly about how to best protect his clients. Equally, he is a laid back, peaceful guy who will quickly get along with opposing lawyers and those around him, and will ease the tension in your family law case.
            <br/><br/>
            Teach is experienced in various areas of law ranging from family, to criminal, to civil litigation, and to wills & estates. All of these issues can be a part of family law so having knowledge in their legalities is a major asset. While Abib brings a breadth of creative and fresh experience to the YLaw team, the primary focus of his practice, as well as his strengths and interest, fall right in the area of BC Family Law.
            <br/><br/>
            Teach is completely unafraid of taking on highly complex or contentious family law cases. He thrives under pressure and takes on any type of case with enthusiasm and curiosity. So, if you are dealing with an acrimonious case, Abib will not be afraid to take it on.
            <br/><br/>
            Teach loves resolving and settling cases. A lot of Teach's successes happen outside of the courtroom. Being able to negotiate and settle matters for his clients, in a quick and non-confrontational manner, is what he strives to do. He has been able to settle many issues for client's without requiring to go through the Court process, which is why many of his clients have been extremely happy with his services.
          </p>
          </p>
          <img class="lawyer1-1" src={img_2} alt="leena Appraoch" />
        </div>
      </div>

      <div id="PersonalInfo2">
        <div class="grid1">
          <div class="grid-item1">
            <h1 class="title"><FontAwesomeIcon icon={faGraduationCap} className="fa-solid" />Education</h1>
            <div class="per-content">
              <p class="lightP">Bachelor of Arts with focus on Sociology with
                Distinction - University of Victoria;<br /><br />
                Juris Doctor, University of Victoria;<br /><br />
                Accredited Mediator through the Law Society of BC;<br /><br />
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
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />One of the youngest and top 25 most influential lawyers in Canada in 2018 by the <span>Canadian Lawyer Organization.</span><br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />Rising Star by <span>Lexpert.</span> <br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />Top 75 Immigrants in Canada in 2021, by the <span>Canadian Immigrant</span>. <br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />Chosen as a <span>Resident Leader</span> through the Leadership Circle of Canadian Business. <br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />Top 29 Canadian Changemakers of 2020 by <span>Refinery29.</span> <br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />Top 40 under 40 in 2019 by Business in Vancouver.<br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />Top 400 Fastest Growing Companies by <span>the Globe and Mail</span>;<br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />Top 500 Growth by <span>MacLean's and Canadian Business</span>;<br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />#1 Top Divorce Lawyer in BC by <span>Lawyerratingz.com</span>.<br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />Best Family Law Firm of Vancouver in 2015 by <span>Top Choice Awards</span>;<br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />Best in Class by <span>Lawyerist.</span><br /><br />
              </p>
            </div>
          </div>
          <div class="grid-item3">
            <h1 class="title"><FontAwesomeIcon icon={faEarth} className="fa-solid" />Language</h1>
            <div class="per-content">
              <p class="lightP">
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />French<br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />English<br /><br />
                <FontAwesomeIcon className="fa fa-solid" icon={faAngleRight} />Spanish<br /><br />
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
export default Teach;