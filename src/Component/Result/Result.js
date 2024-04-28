import React from 'react'
import './result.css'
import $ from 'jquery'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown  } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// function itemshow(n,e){ 
//   const idx = "num_"+n;
//   document.querySelector(".item_title").each(function(){
//       const idn = document.querySelector(this).nextElementSibling.attr("id");
//       if (idn == idx){
//           document.querySelector("#"+idn).toggle();
//       }else{
//           document.querySelector("#"+idn).hide();
//       }
//   });
// }

const Result = () => {
  return (
    <div id="result">
      <div id="intro">
          <h1 className="result_t">Successful Cases</h1>
      </div>
      <div id="victory">
        <div className="col1">
          <h2 id="dui-offences">DUI Offences</h2>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Failure to Provide a Breath Sample Charge Stayed</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_1">
              <br /><br /><br />
              <span className="italic-text">Case Number: 75790038 </span>
              <br /><br />
              Our client was arrested after someone called police to report a suspicious vehicle parked at a gas station. When officers arrived, they noticed that our client’s vehicle was parked, its left tires were ripped and deflated, and our client was sitting on the passenger side looking around for something. When officers approached our client, he immediately admitted to having a few drinks, which prompted the officer to demand a breath sample. Our client complied but was unable to provide an adequate sample. After several failed attempts, our client was arrested for failure to provide a sample.
              Upon being retained, we immediately requested disclosure and thoroughly reviewed the police body-worn camera footage of the arrest. In doing so, we noticed several violations of our client’s Charter rights and promptly filed a Charter application. As a result of our findings, the Crown Prosecutor stayed the charge and our client avoided a criminal record.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more"  >
              <h3 className="case_t">Refusal to Provide a Breath Sample Charge Withdrawn for Guilty Plea to Causing a Disturbance</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_2">
              <br /><br /><br />
              <span className="italic-text">Case Number: 55582522  </span>
              <br /><br />
              Our client was charged after a hotel clerk complained to police that he was intoxicated and causing a disturbance. When police arrived, one officer noticed that our client’s eyes were red and glassy, his breath smelled of alcohol and he was acting agitated. As a result of these observations and the complaint, our client was arrested for Causing a Disturbance. Once in the police vehicle, our client was instructed to provide a breath sample, which he refused. The officer then added a Refusal to Provide a Breath Sample charge against our client.
              <br /><br />
              Upon being retained, we immediately ordered disclosure and pointed out a Charter violation in the arrest process. We submitted a notice of this violation to the Crown Prosecutor and set the matter for trial. Based on the Charter notice and subsequent negotiations with the Crown, our client’s refusal charge was withdrawn in exchange for a guilty plea to causing a disturbance. As a result, our client paid a small fine and did not lose his Licence.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Refusal to Comply with Breath Demand Charge Withdrawn</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_3">
              <br /><br /><br />
              <span className="italic-text">Case Number: 55792555  </span>
              <br /><br />
              Our client was pulled over when a nearby police officer suspected that he was driving while impaired. The officer demanded a breath sample which our client did not refuse. However, his significant anxiety issues and resulting chest pains caused him to not be able to provide an adequate sample. As a result of this, our client was immediately arrested and charged with refusal to comply with a breath demand.
              <br /><br />
              Upon being retained, we ordered and reviewed disclosure and discovered several Charter violations over the course of the investigation. We filed a Charter Notice on our client’s behalf outlining these issues and illustrating the improper police investigation. As a result of this Charter Notice and the medical documentation, all charges were withdrawn.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal to Provide a Breath Sample Charges Withdrawn</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_4">
              <br /><br /><br />
              <span className="italic-text">Case Number: 75790088  </span>
              <br /><br />
              Our client was arrested after a witness noticed his car driving onto a curb and coming to a stop. When the witness approached our client’s vehicle, she noticed that he was intoxicated and that there was a young child in the vehicle with him. At that point, the witness contacted police. When police arrived, our client and the child were out of the car and the officer noted that our client was slow to respond, uneasy on his feet and that he smelled like alcohol. Our client was then arrested for impaired driving.
              <br /><br />
              Upon being retained, we immediately requested disclosure and noticed several inconsistencies within the police report. We raised these with the Crown Prosecutor and successfully persuaded the Crown to enter resolution discussions without proceeding to trial. As a result of these discussions, the Crown agreed to withdraw the charges against our client.
              <br /><br />
              <span className="bold-text">uccessful Result: Charges Withdrawn; No Criminal Record  </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal to Provide Breath Sample Charges Resolved with Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_5">
              <br /><br /><br />
              <span className="italic-text">Case Number: 35380224  </span>
              <br /><br />
              Our client was pulled over when nearby police officers observed him driving erratically. When the police approached his vehicle, they found him extremely intoxicated and holding a half-full bottle of vodka. He was immediately arrested and charged with impaired driving and brought to the police station. There, he refused the officer’s demand for a breath sample and was subsequently charged with refusal to provide a breath sample. Our client had recently returned to Alberta from Ontario to restart his life due to alcoholism and a criminal record would hinder his future employment and rehabilitation.
              <br /><br />
              Upon being retained we ordered disclosure and reviewed it with our client. Our client had been working on addressing his alcohol addiction by attending counselling and addiction services. We compiled a significant amount of information on the steps that he had taken to address the issue as well as the community support that he had and presented it to the Crown Prosecutor. As a result, the Crown agreed to join us in a joint submission for a curative discharge which the judge accepted. As a result, our client avoided a criminal record.<br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal Charges Result in a Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_6">
              <br /><br /><br />
              <span className="italic-text">Case Number: 53572270</span>
              <br /><br />
              Our client was arrested for impaired driving after two police officers saw her drive into another vehicle in a parking lot. After our client collided with the other vehicle, the police immediately initiated a traffic stop. Upon approaching the vehicle the police found that our client smelled strongly of alcohol, that she was unable to speak properly, and that she was unable to follow any of their directions. She was then placed under arrest for impaired driving and asked to exit the vehicle. The police reported that when she was taken out of her vehicle that she was extremely unstable on her feet. It was further reported that once she was placed in the police vehicle, she began screaming at the top of her lungs and began threatening the police officers.
              <br /><br />
              Upon being retained we immediately reviewed her disclosure and began preparing a Charter motion on her behalf. However, after further consultation with our client, she instructed us to assist her with a curative discharge application. We also obtained medical reports that confirmed that our client suffered from an alcohol addiction, and directed her to a treatment center with an excellent repute for addictions counselling. We presented proof of her progress in counselling to the court, and made effective and detailed submissions on her behalf. Due to our advocacy, we were able to successfully secure our client a 12 month curative discharge.
              <br /><br />
              <span className="bold-text">Successful Result: Curative Discharge, No Criminal Record</span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal to Provide Breath Sample Charges Resolved with Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_7">
              <br /><br /><br />
              <span className="italic-text">Case Number: 35380224  </span>
              <br /><br />
              Our client was pulled over when nearby police officers observed him driving erratically. When the police approached his vehicle, they found him extremely intoxicated and holding a half-full bottle of vodka. He was immediately arrested and charged with impaired driving and brought to the police station. There, he refused the officer’s demand for a breath sample and was subsequently charged with refusal to provide a breath sample. Our client had recently returned to Alberta from Ontario to restart his life due to alcoholism and a criminal record would hinder his future employment and rehabilitation.
              <br /><br />
              Upon being retained we ordered disclosure and reviewed it with our client. Our client had been working on addressing his alcohol addiction by attending counselling and addiction services. We compiled a significant amount of information on the steps that he had taken to address the issue as well as the community support that he had and presented it to the Crown Prosecutor. As a result, the Crown agreed to join us in a joint submission for a curative discharge which the judge accepted. As a result, our client avoided a criminal record.<br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal Charges Result in a Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_8">
              <br /><br /><br />
              <span className="italic-text">Case Number: 53572270</span>
              <br /><br />
              Our client was arrested for impaired driving after two police officers saw her drive into another vehicle in a parking lot. After our client collided with the other vehicle, the police immediately initiated a traffic stop. Upon approaching the vehicle the police found that our client smelled strongly of alcohol, that she was unable to speak properly, and that she was unable to follow any of their directions. She was then placed under arrest for impaired driving and asked to exit the vehicle. The police reported that when she was taken out of her vehicle that she was extremely unstable on her feet. It was further reported that once she was placed in the police vehicle, she began screaming at the top of her lungs and began threatening the police officers.
              <br /><br />
              Upon being retained we immediately reviewed her disclosure and began preparing a Charter motion on her behalf. However, after further consultation with our client, she instructed us to assist her with a curative discharge application. We also obtained medical reports that confirmed that our client suffered from an alcohol addiction, and directed her to a treatment center with an excellent repute for addictions counselling. We presented proof of her progress in counselling to the court, and made effective and detailed submissions on her behalf. Due to our advocacy, we were able to successfully secure our client a 12 month curative discharge.
              <br /><br />
              <span className="bold-text">Successful Result: Curative Discharge, No Criminal Record</span>
            </div>
          </div>

          <h2 id="drug-charges">Drug charges</h2>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Failure to Provide a Breath Sample Charge Stayed</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_9">
              <br /><br /><br />
              <span className="italic-text">Case Number: 75790038 </span>
              <br /><br />
              Our client was arrested after someone called police to report a suspicious vehicle parked at a gas station. When officers arrived, they noticed that our client’s vehicle was parked, its left tires were ripped and deflated, and our client was sitting on the passenger side looking around for something. When officers approached our client, he immediately admitted to having a few drinks, which prompted the officer to demand a breath sample. Our client complied but was unable to provide an adequate sample. After several failed attempts, our client was arrested for failure to provide a sample.
              Upon being retained, we immediately requested disclosure and thoroughly reviewed the police body-worn camera footage of the arrest. In doing so, we noticed several violations of our client’s Charter rights and promptly filed a Charter application. As a result of our findings, the Crown Prosecutor stayed the charge and our client avoided a criminal record.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Refusal to Provide a Breath Sample Charge Withdrawn for Guilty Plea to Causing a Disturbance</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_10">
              <br /><br /><br />
              <span className="italic-text">Case Number: 55582522  </span>
              <br /><br />
              Our client was charged after a hotel clerk complained to police that he was intoxicated and causing a disturbance. When police arrived, one officer noticed that our client’s eyes were red and glassy, his breath smelled of alcohol and he was acting agitated. As a result of these observations and the complaint, our client was arrested for Causing a Disturbance. Once in the police vehicle, our client was instructed to provide a breath sample, which he refused. The officer then added a Refusal to Provide a Breath Sample charge against our client.
              <br /><br />
              Upon being retained, we immediately ordered disclosure and pointed out a Charter violation in the arrest process. We submitted a notice of this violation to the Crown Prosecutor and set the matter for trial. Based on the Charter notice and subsequent negotiations with the Crown, our client’s refusal charge was withdrawn in exchange for a guilty plea to causing a disturbance. As a result, our client paid a small fine and did not lose his Licence.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Refusal to Comply with Breath Demand Charge Withdrawn</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_11">
              <br /><br /><br />
              <span className="italic-text">Case Number: 55792555  </span>
              <br /><br />
              Our client was pulled over when a nearby police officer suspected that he was driving while impaired. The officer demanded a breath sample which our client did not refuse. However, his significant anxiety issues and resulting chest pains caused him to not be able to provide an adequate sample. As a result of this, our client was immediately arrested and charged with refusal to comply with a breath demand.
              <br /><br />
              Upon being retained, we ordered and reviewed disclosure and discovered several Charter violations over the course of the investigation. We filed a Charter Notice on our client’s behalf outlining these issues and illustrating the improper police investigation. As a result of this Charter Notice and the medical documentation, all charges were withdrawn.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Impaired Driving and Refusal to Provide a Breath Sample Charges Withdrawn</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_12">
              <br /><br /><br />
              <span className="italic-text">Case Number: 75790088  </span>
              <br /><br />
              Our client was arrested after a witness noticed his car driving onto a curb and coming to a stop. When the witness approached our client’s vehicle, she noticed that he was intoxicated and that there was a young child in the vehicle with him. At that point, the witness contacted police. When police arrived, our client and the child were out of the car and the officer noted that our client was slow to respond, uneasy on his feet and that he smelled like alcohol. Our client was then arrested for impaired driving.
              <br /><br />
              Upon being retained, we immediately requested disclosure and noticed several inconsistencies within the police report. We raised these with the Crown Prosecutor and successfully persuaded the Crown to enter resolution discussions without proceeding to trial. As a result of these discussions, the Crown agreed to withdraw the charges against our client.
              <br /><br />
              <span className="bold-text">uccessful Result: Charges Withdrawn; No Criminal Record  </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal to Provide Breath Sample Charges Resolved with Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_13">
              <br /><br /><br />
              <span className="italic-text">Case Number: 35380224  </span>
              <br /><br />
              Our client was pulled over when nearby police officers observed him driving erratically. When the police approached his vehicle, they found him extremely intoxicated and holding a half-full bottle of vodka. He was immediately arrested and charged with impaired driving and brought to the police station. There, he refused the officer’s demand for a breath sample and was subsequently charged with refusal to provide a breath sample. Our client had recently returned to Alberta from Ontario to restart his life due to alcoholism and a criminal record would hinder his future employment and rehabilitation.
              <br /><br />
              Upon being retained we ordered disclosure and reviewed it with our client. Our client had been working on addressing his alcohol addiction by attending counselling and addiction services. We compiled a significant amount of information on the steps that he had taken to address the issue as well as the community support that he had and presented it to the Crown Prosecutor. As a result, the Crown agreed to join us in a joint submission for a curative discharge which the judge accepted. As a result, our client avoided a criminal record.<br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal Charges Result in a Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_14">
              <br /><br /><br />
              <span className="italic-text">Case Number: 53572270</span>
              <br /><br />
              Our client was arrested for impaired driving after two police officers saw her drive into another vehicle in a parking lot. After our client collided with the other vehicle, the police immediately initiated a traffic stop. Upon approaching the vehicle the police found that our client smelled strongly of alcohol, that she was unable to speak properly, and that she was unable to follow any of their directions. She was then placed under arrest for impaired driving and asked to exit the vehicle. The police reported that when she was taken out of her vehicle that she was extremely unstable on her feet. It was further reported that once she was placed in the police vehicle, she began screaming at the top of her lungs and began threatening the police officers.
              <br /><br />
              Upon being retained we immediately reviewed her disclosure and began preparing a Charter motion on her behalf. However, after further consultation with our client, she instructed us to assist her with a curative discharge application. We also obtained medical reports that confirmed that our client suffered from an alcohol addiction, and directed her to a treatment center with an excellent repute for addictions counselling. We presented proof of her progress in counselling to the court, and made effective and detailed submissions on her behalf. Due to our advocacy, we were able to successfully secure our client a 12 month curative discharge.
              <br /><br />
              <span className="bold-text">Successful Result: Curative Discharge, No Criminal Record</span>
            </div>
          </div>

          <h2 id="Assault">Assault</h2>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Impaired Driving and Refusal to Provide Breath Sample Charges Resolved with Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_15">
              <br /><br /><br />
              <span className="italic-text">Case Number: 35380224  </span>
              <br /><br />
              Our client was pulled over when nearby police officers observed him driving erratically. When the police approached his vehicle, they found him extremely intoxicated and holding a half-full bottle of vodka. He was immediately arrested and charged with impaired driving and brought to the police station. There, he refused the officer’s demand for a breath sample and was subsequently charged with refusal to provide a breath sample. Our client had recently returned to Alberta from Ontario to restart his life due to alcoholism and a criminal record would hinder his future employment and rehabilitation.
              <br /><br />
              Upon being retained we ordered disclosure and reviewed it with our client. Our client had been working on addressing his alcohol addiction by attending counselling and addiction services. We compiled a significant amount of information on the steps that he had taken to address the issue as well as the community support that he had and presented it to the Crown Prosecutor. As a result, the Crown agreed to join us in a joint submission for a curative discharge which the judge accepted. As a result, our client avoided a criminal record.<br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Impaired Driving and Refusal Charges Result in a Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_16">
              <br /><br /><br />
              <span className="italic-text">Case Number: 53572270</span>
              <br /><br />
              Our client was arrested for impaired driving after two police officers saw her drive into another vehicle in a parking lot. After our client collided with the other vehicle, the police immediately initiated a traffic stop. Upon approaching the vehicle the police found that our client smelled strongly of alcohol, that she was unable to speak properly, and that she was unable to follow any of their directions. She was then placed under arrest for impaired driving and asked to exit the vehicle. The police reported that when she was taken out of her vehicle that she was extremely unstable on her feet. It was further reported that once she was placed in the police vehicle, she began screaming at the top of her lungs and began threatening the police officers.
              <br /><br />
              Upon being retained we immediately reviewed her disclosure and began preparing a Charter motion on her behalf. However, after further consultation with our client, she instructed us to assist her with a curative discharge application. We also obtained medical reports that confirmed that our client suffered from an alcohol addiction, and directed her to a treatment center with an excellent repute for addictions counselling. We presented proof of her progress in counselling to the court, and made effective and detailed submissions on her behalf. Due to our advocacy, we were able to successfully secure our client a 12 month curative discharge.
              <br /><br />
              <span className="bold-text">Successful Result: Curative Discharge, No Criminal Record</span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Impaired Driving and Refusal to Provide Breath Sample Charges Resolved with Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_17">
              <br /><br /><br />
              <span className="italic-text">Case Number: 35380224  </span>
              <br /><br />
              Our client was pulled over when nearby police officers observed him driving erratically. When the police approached his vehicle, they found him extremely intoxicated and holding a half-full bottle of vodka. He was immediately arrested and charged with impaired driving and brought to the police station. There, he refused the officer’s demand for a breath sample and was subsequently charged with refusal to provide a breath sample. Our client had recently returned to Alberta from Ontario to restart his life due to alcoholism and a criminal record would hinder his future employment and rehabilitation.
              <br /><br />
              Upon being retained we ordered disclosure and reviewed it with our client. Our client had been working on addressing his alcohol addiction by attending counselling and addiction services. We compiled a significant amount of information on the steps that he had taken to address the issue as well as the community support that he had and presented it to the Crown Prosecutor. As a result, the Crown agreed to join us in a joint submission for a curative discharge which the judge accepted. As a result, our client avoided a criminal record.<br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Impaired Driving and Refusal Charges Result in a Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_18">
              <br /><br /><br />
              <span className="italic-text">Case Number: 53572270</span>
              <br /><br />
              Our client was arrested for impaired driving after two police officers saw her drive into another vehicle in a parking lot. After our client collided with the other vehicle, the police immediately initiated a traffic stop. Upon approaching the vehicle the police found that our client smelled strongly of alcohol, that she was unable to speak properly, and that she was unable to follow any of their directions. She was then placed under arrest for impaired driving and asked to exit the vehicle. The police reported that when she was taken out of her vehicle that she was extremely unstable on her feet. It was further reported that once she was placed in the police vehicle, she began screaming at the top of her lungs and began threatening the police officers.
              <br /><br />
              Upon being retained we immediately reviewed her disclosure and began preparing a Charter motion on her behalf. However, after further consultation with our client, she instructed us to assist her with a curative discharge application. We also obtained medical reports that confirmed that our client suffered from an alcohol addiction, and directed her to a treatment center with an excellent repute for addictions counselling. We presented proof of her progress in counselling to the court, and made effective and detailed submissions on her behalf. Due to our advocacy, we were able to successfully secure our client a 12 month curative discharge.
              <br /><br />
              <span className="bold-text">Successful Result: Curative Discharge, No Criminal Record</span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Failure to Provide a Breath Sample Charge Stayed</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_19">
              <br /><br /><br />
              <span className="italic-text">Case Number: 75790038 </span>
              <br /><br />
              Our client was arrested after someone called police to report a suspicious vehicle parked at a gas station. When officers arrived, they noticed that our client’s vehicle was parked, its left tires were ripped and deflated, and our client was sitting on the passenger side looking around for something. When officers approached our client, he immediately admitted to having a few drinks, which prompted the officer to demand a breath sample. Our client complied but was unable to provide an adequate sample. After several failed attempts, our client was arrested for failure to provide a sample.
              Upon being retained, we immediately requested disclosure and thoroughly reviewed the police body-worn camera footage of the arrest. In doing so, we noticed several violations of our client’s Charter rights and promptly filed a Charter application. As a result of our findings, the Crown Prosecutor stayed the charge and our client avoided a criminal record.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>

          <h2 id="Theft">Theft</h2>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Refusal to Provide a Breath Sample Charge Withdrawn for Guilty Plea to Causing a Disturbance</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_20">
              <br /><br /><br />
              <span className="italic-text">Case Number: 55582522  </span>
              <br /><br />
              Our client was charged after a hotel clerk complained to police that he was intoxicated and causing a disturbance. When police arrived, one officer noticed that our client’s eyes were red and glassy, his breath smelled of alcohol and he was acting agitated. As a result of these observations and the complaint, our client was arrested for Causing a Disturbance. Once in the police vehicle, our client was instructed to provide a breath sample, which he refused. The officer then added a Refusal to Provide a Breath Sample charge against our client.
              <br /><br />
              Upon being retained, we immediately ordered disclosure and pointed out a Charter violation in the arrest process. We submitted a notice of this violation to the Crown Prosecutor and set the matter for trial. Based on the Charter notice and subsequent negotiations with the Crown, our client’s refusal charge was withdrawn in exchange for a guilty plea to causing a disturbance. As a result, our client paid a small fine and did not lose his Licence.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Refusal to Comply with Breath Demand Charge Withdrawn</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_21">
              <br /><br /><br />
              <span className="italic-text">Case Number: 55792555  </span>
              <br /><br />
              Our client was pulled over when a nearby police officer suspected that he was driving while impaired. The officer demanded a breath sample which our client did not refuse. However, his significant anxiety issues and resulting chest pains caused him to not be able to provide an adequate sample. As a result of this, our client was immediately arrested and charged with refusal to comply with a breath demand.
              <br /><br />
              Upon being retained, we ordered and reviewed disclosure and discovered several Charter violations over the course of the investigation. We filed a Charter Notice on our client’s behalf outlining these issues and illustrating the improper police investigation. As a result of this Charter Notice and the medical documentation, all charges were withdrawn.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal to Provide a Breath Sample Charges Withdrawn</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_22">
              <br /><br /><br />
              <span className="italic-text">Case Number: 75790088  </span>
              <br /><br />
              Our client was arrested after a witness noticed his car driving onto a curb and coming to a stop. When the witness approached our client’s vehicle, she noticed that he was intoxicated and that there was a young child in the vehicle with him. At that point, the witness contacted police. When police arrived, our client and the child were out of the car and the officer noted that our client was slow to respond, uneasy on his feet and that he smelled like alcohol. Our client was then arrested for impaired driving.
              <br /><br />
              Upon being retained, we immediately requested disclosure and noticed several inconsistencies within the police report. We raised these with the Crown Prosecutor and successfully persuaded the Crown to enter resolution discussions without proceeding to trial. As a result of these discussions, the Crown agreed to withdraw the charges against our client.
              <br /><br />
              <span className="bold-text">uccessful Result: Charges Withdrawn; No Criminal Record  </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal to Provide Breath Sample Charges Resolved with Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_23">
              <br /><br /><br />
              <span className="italic-text">Case Number: 35380224  </span>
              <br /><br />
              Our client was pulled over when nearby police officers observed him driving erratically. When the police approached his vehicle, they found him extremely intoxicated and holding a half-full bottle of vodka. He was immediately arrested and charged with impaired driving and brought to the police station. There, he refused the officer’s demand for a breath sample and was subsequently charged with refusal to provide a breath sample. Our client had recently returned to Alberta from Ontario to restart his life due to alcoholism and a criminal record would hinder his future employment and rehabilitation.
              <br /><br />
              Upon being retained we ordered disclosure and reviewed it with our client. Our client had been working on addressing his alcohol addiction by attending counselling and addiction services. We compiled a significant amount of information on the steps that he had taken to address the issue as well as the community support that he had and presented it to the Crown Prosecutor. As a result, the Crown agreed to join us in a joint submission for a curative discharge which the judge accepted. As a result, our client avoided a criminal record.<br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Impaired Driving and Refusal Charges Result in a Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_24">
              <br /><br /><br />
              <span className="italic-text">Case Number: 53572270</span>
              <br /><br />
              Our client was arrested for impaired driving after two police officers saw her drive into another vehicle in a parking lot. After our client collided with the other vehicle, the police immediately initiated a traffic stop. Upon approaching the vehicle the police found that our client smelled strongly of alcohol, that she was unable to speak properly, and that she was unable to follow any of their directions. She was then placed under arrest for impaired driving and asked to exit the vehicle. The police reported that when she was taken out of her vehicle that she was extremely unstable on her feet. It was further reported that once she was placed in the police vehicle, she began screaming at the top of her lungs and began threatening the police officers.
              <br /><br />
              Upon being retained we immediately reviewed her disclosure and began preparing a Charter motion on her behalf. However, after further consultation with our client, she instructed us to assist her with a curative discharge application. We also obtained medical reports that confirmed that our client suffered from an alcohol addiction, and directed her to a treatment center with an excellent repute for addictions counselling. We presented proof of her progress in counselling to the court, and made effective and detailed submissions on her behalf. Due to our advocacy, we were able to successfully secure our client a 12 month curative discharge.
              <br /><br />
              <span className="bold-text">Successful Result: Curative Discharge, No Criminal Record</span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Impaired Driving and Refusal to Provide Breath Sample Charges Resolved with Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_25">
              <br /><br /><br />
              <span className="italic-text">Case Number: 35380224  </span>
              <br /><br />
              Our client was pulled over when nearby police officers observed him driving erratically. When the police approached his vehicle, they found him extremely intoxicated and holding a half-full bottle of vodka. He was immediately arrested and charged with impaired driving and brought to the police station. There, he refused the officer’s demand for a breath sample and was subsequently charged with refusal to provide a breath sample. Our client had recently returned to Alberta from Ontario to restart his life due to alcoholism and a criminal record would hinder his future employment and rehabilitation.
              <br /><br />
              Upon being retained we ordered disclosure and reviewed it with our client. Our client had been working on addressing his alcohol addiction by attending counselling and addiction services. We compiled a significant amount of information on the steps that he had taken to address the issue as well as the community support that he had and presented it to the Crown Prosecutor. As a result, the Crown agreed to join us in a joint submission for a curative discharge which the judge accepted. As a result, our client avoided a criminal record.<br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>

          <h2 id="Property-offences">Property offences</h2>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Impaired Driving and Refusal Charges Result in a Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_26">
              <br /><br /><br />
              <span className="italic-text">Case Number: 53572270</span>
              <br /><br />
              Our client was arrested for impaired driving after two police officers saw her drive into another vehicle in a parking lot. After our client collided with the other vehicle, the police immediately initiated a traffic stop. Upon approaching the vehicle the police found that our client smelled strongly of alcohol, that she was unable to speak properly, and that she was unable to follow any of their directions. She was then placed under arrest for impaired driving and asked to exit the vehicle. The police reported that when she was taken out of her vehicle that she was extremely unstable on her feet. It was further reported that once she was placed in the police vehicle, she began screaming at the top of her lungs and began threatening the police officers.
              <br /><br />
              Upon being retained we immediately reviewed her disclosure and began preparing a Charter motion on her behalf. However, after further consultation with our client, she instructed us to assist her with a curative discharge application. We also obtained medical reports that confirmed that our client suffered from an alcohol addiction, and directed her to a treatment center with an excellent repute for addictions counselling. We presented proof of her progress in counselling to the court, and made effective and detailed submissions on her behalf. Due to our advocacy, we were able to successfully secure our client a 12 month curative discharge.
              <br /><br />
              <span className="bold-text">Successful Result: Curative Discharge, No Criminal Record</span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Failure to Provide a Breath Sample Charge Stayed</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_27">
              <br /><br /><br />
              <span className="italic-text">Case Number: 75790038 </span>
              <br /><br />
              Our client was arrested after someone called police to report a suspicious vehicle parked at a gas station. When officers arrived, they noticed that our client’s vehicle was parked, its left tires were ripped and deflated, and our client was sitting on the passenger side looking around for something. When officers approached our client, he immediately admitted to having a few drinks, which prompted the officer to demand a breath sample. Our client complied but was unable to provide an adequate sample. After several failed attempts, our client was arrested for failure to provide a sample.
              Upon being retained, we immediately requested disclosure and thoroughly reviewed the police body-worn camera footage of the arrest. In doing so, we noticed several violations of our client’s Charter rights and promptly filed a Charter application. As a result of our findings, the Crown Prosecutor stayed the charge and our client avoided a criminal record.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Refusal to Provide a Breath Sample Charge Withdrawn for Guilty Plea to Causing a Disturbance</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_28">
              <br /><br /><br />
              <span className="italic-text">Case Number: 55582522  </span>
              <br /><br />
              Our client was charged after a hotel clerk complained to police that he was intoxicated and causing a disturbance. When police arrived, one officer noticed that our client’s eyes were red and glassy, his breath smelled of alcohol and he was acting agitated. As a result of these observations and the complaint, our client was arrested for Causing a Disturbance. Once in the police vehicle, our client was instructed to provide a breath sample, which he refused. The officer then added a Refusal to Provide a Breath Sample charge against our client.
              <br /><br />
              Upon being retained, we immediately ordered disclosure and pointed out a Charter violation in the arrest process. We submitted a notice of this violation to the Crown Prosecutor and set the matter for trial. Based on the Charter notice and subsequent negotiations with the Crown, our client’s refusal charge was withdrawn in exchange for a guilty plea to causing a disturbance. As a result, our client paid a small fine and did not lose his Licence.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Refusal to Comply with Breath Demand Charge Withdrawn</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_29">
              <br /><br /><br />
              <span className="italic-text">Case Number: 55792555  </span>
              <br /><br />
              Our client was pulled over when a nearby police officer suspected that he was driving while impaired. The officer demanded a breath sample which our client did not refuse. However, his significant anxiety issues and resulting chest pains caused him to not be able to provide an adequate sample. As a result of this, our client was immediately arrested and charged with refusal to comply with a breath demand.
              <br /><br />
              Upon being retained, we ordered and reviewed disclosure and discovered several Charter violations over the course of the investigation. We filed a Charter Notice on our client’s behalf outlining these issues and illustrating the improper police investigation. As a result of this Charter Notice and the medical documentation, all charges were withdrawn.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Impaired Driving and Refusal to Provide a Breath Sample Charges Withdrawn</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_30">
              <br /><br /><br />
              <span className="italic-text">Case Number: 75790088  </span>
              <br /><br />
              Our client was arrested after a witness noticed his car driving onto a curb and coming to a stop. When the witness approached our client’s vehicle, she noticed that he was intoxicated and that there was a young child in the vehicle with him. At that point, the witness contacted police. When police arrived, our client and the child were out of the car and the officer noted that our client was slow to respond, uneasy on his feet and that he smelled like alcohol. Our client was then arrested for impaired driving.
              <br /><br />
              Upon being retained, we immediately requested disclosure and noticed several inconsistencies within the police report. We raised these with the Crown Prosecutor and successfully persuaded the Crown to enter resolution discussions without proceeding to trial. As a result of these discussions, the Crown agreed to withdraw the charges against our client.
              <br /><br />
              <span className="bold-text">uccessful Result: Charges Withdrawn; No Criminal Record  </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal to Provide Breath Sample Charges Resolved with Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_31">
              <br /><br /><br />
              <span className="italic-text">Case Number: 35380224  </span>
              <br /><br />
              Our client was pulled over when nearby police officers observed him driving erratically. When the police approached his vehicle, they found him extremely intoxicated and holding a half-full bottle of vodka. He was immediately arrested and charged with impaired driving and brought to the police station. There, he refused the officer’s demand for a breath sample and was subsequently charged with refusal to provide a breath sample. Our client had recently returned to Alberta from Ontario to restart his life due to alcoholism and a criminal record would hinder his future employment and rehabilitation.
              <br /><br />
              Upon being retained we ordered disclosure and reviewed it with our client. Our client had been working on addressing his alcohol addiction by attending counselling and addiction services. We compiled a significant amount of information on the steps that he had taken to address the issue as well as the community support that he had and presented it to the Crown Prosecutor. As a result, the Crown agreed to join us in a joint submission for a curative discharge which the judge accepted. As a result, our client avoided a criminal record.<br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal Charges Result in a Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_32">
              <br /><br /><br />
              <span className="italic-text">Case Number: 53572270</span>
              <br /><br />
              Our client was arrested for impaired driving after two police officers saw her drive into another vehicle in a parking lot. After our client collided with the other vehicle, the police immediately initiated a traffic stop. Upon approaching the vehicle the police found that our client smelled strongly of alcohol, that she was unable to speak properly, and that she was unable to follow any of their directions. She was then placed under arrest for impaired driving and asked to exit the vehicle. The police reported that when she was taken out of her vehicle that she was extremely unstable on her feet. It was further reported that once she was placed in the police vehicle, she began screaming at the top of her lungs and began threatening the police officers.
              <br /><br />
              Upon being retained we immediately reviewed her disclosure and began preparing a Charter motion on her behalf. However, after further consultation with our client, she instructed us to assist her with a curative discharge application. We also obtained medical reports that confirmed that our client suffered from an alcohol addiction, and directed her to a treatment center with an excellent repute for addictions counselling. We presented proof of her progress in counselling to the court, and made effective and detailed submissions on her behalf. Due to our advocacy, we were able to successfully secure our client a 12 month curative discharge.
              <br /><br />
              <span className="bold-text">Successful Result: Curative Discharge, No Criminal Record</span>
            </div>
          </div>

          <h2 id="Warrant-ticket">Warrant ticket</h2>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal to Provide Breath Sample Charges Resolved with Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_33">
              <br /><br /><br />
              <span className="italic-text">Case Number: 35380224  </span>
              <br /><br />
              Our client was pulled over when nearby police officers observed him driving erratically. When the police approached his vehicle, they found him extremely intoxicated and holding a half-full bottle of vodka. He was immediately arrested and charged with impaired driving and brought to the police station. There, he refused the officer’s demand for a breath sample and was subsequently charged with refusal to provide a breath sample. Our client had recently returned to Alberta from Ontario to restart his life due to alcoholism and a criminal record would hinder his future employment and rehabilitation.
              <br /><br />
              Upon being retained we ordered disclosure and reviewed it with our client. Our client had been working on addressing his alcohol addiction by attending counselling and addiction services. We compiled a significant amount of information on the steps that he had taken to address the issue as well as the community support that he had and presented it to the Crown Prosecutor. As a result, the Crown agreed to join us in a joint submission for a curative discharge which the judge accepted. As a result, our client avoided a criminal record.<br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal Charges Result in a Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_34">
              <br /><br /><br />
              <span className="italic-text">Case Number: 53572270</span>
              <br /><br />
              Our client was arrested for impaired driving after two police officers saw her drive into another vehicle in a parking lot. After our client collided with the other vehicle, the police immediately initiated a traffic stop. Upon approaching the vehicle the police found that our client smelled strongly of alcohol, that she was unable to speak properly, and that she was unable to follow any of their directions. She was then placed under arrest for impaired driving and asked to exit the vehicle. The police reported that when she was taken out of her vehicle that she was extremely unstable on her feet. It was further reported that once she was placed in the police vehicle, she began screaming at the top of her lungs and began threatening the police officers.
              <br /><br />
              Upon being retained we immediately reviewed her disclosure and began preparing a Charter motion on her behalf. However, after further consultation with our client, she instructed us to assist her with a curative discharge application. We also obtained medical reports that confirmed that our client suffered from an alcohol addiction, and directed her to a treatment center with an excellent repute for addictions counselling. We presented proof of her progress in counselling to the court, and made effective and detailed submissions on her behalf. Due to our advocacy, we were able to successfully secure our client a 12 month curative discharge.
              <br /><br />
              <span className="bold-text">Successful Result: Curative Discharge, No Criminal Record</span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal to Provide Breath Sample Charges Resolved with Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_35">
              <br /><br /><br />
              <span className="italic-text">Case Number: 35380224  </span>
              <br /><br />
              Our client was pulled over when nearby police officers observed him driving erratically. When the police approached his vehicle, they found him extremely intoxicated and holding a half-full bottle of vodka. He was immediately arrested and charged with impaired driving and brought to the police station. There, he refused the officer’s demand for a breath sample and was subsequently charged with refusal to provide a breath sample. Our client had recently returned to Alberta from Ontario to restart his life due to alcoholism and a criminal record would hinder his future employment and rehabilitation.
              <br /><br />
              Upon being retained we ordered disclosure and reviewed it with our client. Our client had been working on addressing his alcohol addiction by attending counselling and addiction services. We compiled a significant amount of information on the steps that he had taken to address the issue as well as the community support that he had and presented it to the Crown Prosecutor. As a result, the Crown agreed to join us in a joint submission for a curative discharge which the judge accepted. As a result, our client avoided a criminal record.<br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal Charges Result in a Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_36">
              <br /><br /><br />
              <span className="italic-text">Case Number: 53572270</span>
              <br /><br />
              Our client was arrested for impaired driving after two police officers saw her drive into another vehicle in a parking lot. After our client collided with the other vehicle, the police immediately initiated a traffic stop. Upon approaching the vehicle the police found that our client smelled strongly of alcohol, that she was unable to speak properly, and that she was unable to follow any of their directions. She was then placed under arrest for impaired driving and asked to exit the vehicle. The police reported that when she was taken out of her vehicle that she was extremely unstable on her feet. It was further reported that once she was placed in the police vehicle, she began screaming at the top of her lungs and began threatening the police officers.
              <br /><br />
              Upon being retained we immediately reviewed her disclosure and began preparing a Charter motion on her behalf. However, after further consultation with our client, she instructed us to assist her with a curative discharge application. We also obtained medical reports that confirmed that our client suffered from an alcohol addiction, and directed her to a treatment center with an excellent repute for addictions counselling. We presented proof of her progress in counselling to the court, and made effective and detailed submissions on her behalf. Due to our advocacy, we were able to successfully secure our client a 12 month curative discharge.
              <br /><br />
              <span className="bold-text">Successful Result: Curative Discharge, No Criminal Record</span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Failure to Provide a Breath Sample Charge Stayed</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_37">
              <br /><br /><br />
              <span className="italic-text">Case Number: 75790038 </span>
              <br /><br />
              Our client was arrested after someone called police to report a suspicious vehicle parked at a gas station. When officers arrived, they noticed that our client’s vehicle was parked, its left tires were ripped and deflated, and our client was sitting on the passenger side looking around for something. When officers approached our client, he immediately admitted to having a few drinks, which prompted the officer to demand a breath sample. Our client complied but was unable to provide an adequate sample. After several failed attempts, our client was arrested for failure to provide a sample.
              Upon being retained, we immediately requested disclosure and thoroughly reviewed the police body-worn camera footage of the arrest. In doing so, we noticed several violations of our client’s Charter rights and promptly filed a Charter application. As a result of our findings, the Crown Prosecutor stayed the charge and our client avoided a criminal record.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>

          <h2 id="Weapons-offences">Weapons offences</h2>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Refusal to Provide a Breath Sample Charge Withdrawn for Guilty Plea to Causing a Disturbance</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_38">
              <br /><br /><br />
              <span className="italic-text">Case Number: 55582522  </span>
              <br /><br />
              Our client was charged after a hotel clerk complained to police that he was intoxicated and causing a disturbance. When police arrived, one officer noticed that our client’s eyes were red and glassy, his breath smelled of alcohol and he was acting agitated. As a result of these observations and the complaint, our client was arrested for Causing a Disturbance. Once in the police vehicle, our client was instructed to provide a breath sample, which he refused. The officer then added a Refusal to Provide a Breath Sample charge against our client.
              <br /><br />
              Upon being retained, we immediately ordered disclosure and pointed out a Charter violation in the arrest process. We submitted a notice of this violation to the Crown Prosecutor and set the matter for trial. Based on the Charter notice and subsequent negotiations with the Crown, our client’s refusal charge was withdrawn in exchange for a guilty plea to causing a disturbance. As a result, our client paid a small fine and did not lose his Licence.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Refusal to Comply with Breath Demand Charge Withdrawn</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_39">
              <br /><br /><br />
              <span className="italic-text">Case Number: 55792555  </span>
              <br /><br />
              Our client was pulled over when a nearby police officer suspected that he was driving while impaired. The officer demanded a breath sample which our client did not refuse. However, his significant anxiety issues and resulting chest pains caused him to not be able to provide an adequate sample. As a result of this, our client was immediately arrested and charged with refusal to comply with a breath demand.
              <br /><br />
              Upon being retained, we ordered and reviewed disclosure and discovered several Charter violations over the course of the investigation. We filed a Charter Notice on our client’s behalf outlining these issues and illustrating the improper police investigation. As a result of this Charter Notice and the medical documentation, all charges were withdrawn.
              <br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more" >
              <h3 className="case_t">Impaired Driving and Refusal to Provide a Breath Sample Charges Withdrawn</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_40">
              <br /><br /><br />
              <span className="italic-text">Case Number: 75790088  </span>
              <br /><br />
              Our client was arrested after a witness noticed his car driving onto a curb and coming to a stop. When the witness approached our client’s vehicle, she noticed that he was intoxicated and that there was a young child in the vehicle with him. At that point, the witness contacted police. When police arrived, our client and the child were out of the car and the officer noted that our client was slow to respond, uneasy on his feet and that he smelled like alcohol. Our client was then arrested for impaired driving.
              <br /><br />
              Upon being retained, we immediately requested disclosure and noticed several inconsistencies within the police report. We raised these with the Crown Prosecutor and successfully persuaded the Crown to enter resolution discussions without proceeding to trial. As a result of these discussions, the Crown agreed to withdraw the charges against our client.
              <br /><br />
              <span className="bold-text">uccessful Result: Charges Withdrawn; No Criminal Record  </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal to Provide Breath Sample Charges Resolved with Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_41">
              <br /><br /><br />
              <span className="italic-text">Case Number: 35380224  </span>
              <br /><br />
              Our client was pulled over when nearby police officers observed him driving erratically. When the police approached his vehicle, they found him extremely intoxicated and holding a half-full bottle of vodka. He was immediately arrested and charged with impaired driving and brought to the police station. There, he refused the officer’s demand for a breath sample and was subsequently charged with refusal to provide a breath sample. Our client had recently returned to Alberta from Ontario to restart his life due to alcoholism and a criminal record would hinder his future employment and rehabilitation.
              <br /><br />
              Upon being retained we ordered disclosure and reviewed it with our client. Our client had been working on addressing his alcohol addiction by attending counselling and addiction services. We compiled a significant amount of information on the steps that he had taken to address the issue as well as the community support that he had and presented it to the Crown Prosecutor. As a result, the Crown agreed to join us in a joint submission for a curative discharge which the judge accepted. As a result, our client avoided a criminal record.<br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal Charges Result in a Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_42">
              <br /><br /><br />
              <span className="italic-text">Case Number: 53572270</span>
              <br /><br />
              Our client was arrested for impaired driving after two police officers saw her drive into another vehicle in a parking lot. After our client collided with the other vehicle, the police immediately initiated a traffic stop. Upon approaching the vehicle the police found that our client smelled strongly of alcohol, that she was unable to speak properly, and that she was unable to follow any of their directions. She was then placed under arrest for impaired driving and asked to exit the vehicle. The police reported that when she was taken out of her vehicle that she was extremely unstable on her feet. It was further reported that once she was placed in the police vehicle, she began screaming at the top of her lungs and began threatening the police officers.
              <br /><br />
              Upon being retained we immediately reviewed her disclosure and began preparing a Charter motion on her behalf. However, after further consultation with our client, she instructed us to assist her with a curative discharge application. We also obtained medical reports that confirmed that our client suffered from an alcohol addiction, and directed her to a treatment center with an excellent repute for addictions counselling. We presented proof of her progress in counselling to the court, and made effective and detailed submissions on her behalf. Due to our advocacy, we were able to successfully secure our client a 12 month curative discharge.
              <br /><br />
              <span className="bold-text">Successful Result: Curative Discharge, No Criminal Record</span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal to Provide Breath Sample Charges Resolved with Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_43">
              <br /><br /><br />
              <span className="italic-text">Case Number: 35380224  </span>
              <br /><br />
              Our client was pulled over when nearby police officers observed him driving erratically. When the police approached his vehicle, they found him extremely intoxicated and holding a half-full bottle of vodka. He was immediately arrested and charged with impaired driving and brought to the police station. There, he refused the officer’s demand for a breath sample and was subsequently charged with refusal to provide a breath sample. Our client had recently returned to Alberta from Ontario to restart his life due to alcoholism and a criminal record would hinder his future employment and rehabilitation.
              <br /><br />
              Upon being retained we ordered disclosure and reviewed it with our client. Our client had been working on addressing his alcohol addiction by attending counselling and addiction services. We compiled a significant amount of information on the steps that he had taken to address the issue as well as the community support that he had and presented it to the Crown Prosecutor. As a result, the Crown agreed to join us in a joint submission for a curative discharge which the judge accepted. As a result, our client avoided a criminal record.<br /><br />
              <span className="bold-text">Successful Result: Charge Stayed; No Criminal Record </span>
            </div>
          </div>
          <div className="successful-case">
            <div className="item_title read-more">
              <h3 className="case_t">Impaired Driving and Refusal Charges Result in a Curative Discharge</h3>
              <FontAwesomeIcon icon={faAngleDown} className='fa-solid' />
            </div>
            <div className="item_desc" id="num_44">
              <br /><br /><br />
              <span className="italic-text">Case Number: 53572270</span>
              <br /><br />
              Our client was arrested for impaired driving after two police officers saw her drive into another vehicle in a parking lot. After our client collided with the other vehicle, the police immediately initiated a traffic stop. Upon approaching the vehicle the police found that our client smelled strongly of alcohol, that she was unable to speak properly, and that she was unable to follow any of their directions. She was then placed under arrest for impaired driving and asked to exit the vehicle. The police reported that when she was taken out of her vehicle that she was extremely unstable on her feet. It was further reported that once she was placed in the police vehicle, she began screaming at the top of her lungs and began threatening the police officers.
              <br /><br />
              Upon being retained we immediately reviewed her disclosure and began preparing a Charter motion on her behalf. However, after further consultation with our client, she instructed us to assist her with a curative discharge application. We also obtained medical reports that confirmed that our client suffered from an alcohol addiction, and directed her to a treatment center with an excellent repute for addictions counselling. We presented proof of her progress in counselling to the court, and made effective and detailed submissions on her behalf. Due to our advocacy, we were able to successfully secure our client a 12 month curative discharge.
              <br /><br />
              <span className="bold-text">Successful Result: Curative Discharge, No Criminal Record</span>
            </div>
          </div>

        </div>
        <div className="col2">
          <div className="Jump-to">
            <h2>Jump to :</h2>
            <ul>
              <li><a className="case" href=""><i className="fa-brands fa-jedi-order"></i>Criminal Defense
                <ul className="sous-case">
                  <li><a href="#dui-offences"><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />DUI offences</a></li>
                  <li><a href="#drug-charges"><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Drug charges</a></li>
                  <li><a href="#Assault"><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Assault</a></li>
                  <li><a href="#Theft"><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Theft</a></li>
                  <li><a href="#Property-offences"><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Property offences</a></li>
                  <li><a href="#Warrant-ticket"><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Warrant ticket</a></li>
                  <li><a href="#Weapons-offences"><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Weapons offences</a></li>
                </ul>
              </a></li>
              <li><a className="case" href=""><i className="fa-brands fa-jedi-order"></i>Personal Injury
                <ul className="sous-case">
                  <li><a href="#Vehicle-accidents"><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Vehicle accidents</a></li>
                  <li><a href="#Work-injury"><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Work injury</a></li>
                  <li><a href="#Wrongful-death"><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Wrongful death</a></li>
                </ul>
              </a></li>
              <li><a className="case" href=""><i className="fa-brands fa-jedi-order"></i>Family Law
                <ul className="sous-case">
                  <li><a href=""><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Divorce</a></li>
                  <li><a href=""><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Child custody</a></li>
                  <li><a href=""><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Adoption</a></li>
                  <li><a href=""><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Domestic violence</a></li>
                  <li><a href=""><FontAwesomeIcon icon={faAngleRight} className='fa-angle-right' />Name change application</a></li>
                </ul>
              </a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Result;