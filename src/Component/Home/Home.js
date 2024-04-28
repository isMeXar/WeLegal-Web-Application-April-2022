import React, { useState } from 'react'
import $ from 'jquery'

import './home.css'
import Contact from '../Contact/Contact'

import will_hover from './img/Fatneek-hover.jpg'
import lisa_hover from './img/leena-hover.jpg'
import teach_hover from './img/teach-hover.jpg'
import strategic_img from './img/strategic_img.jpg'
import country_img from './img/country.png'
import arrow from './img/arrow.png'


import { MdFamilyRestroom, MdPersonalInjury } from 'react-icons/md';
import { GiPoliceOfficerHead, GiInjustice, GiGavel, GiCrossMark, GiFullFolder } from 'react-icons/gi';
import { BsArrowRightCircle, BsArrowRightShort } from 'react-icons/bs';
import { TiLightbulb } from 'react-icons/ti'
import { IoIosChatbubbles } from 'react-icons/io'
import { AiOutlineTrophy } from 'react-icons/ai'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { FaRegHandshake, FaMedal } from 'react-icons/fa'

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


function Home() {
  //translation
  const { t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  const [isShown1, setShowPersonal] = useState(false)
  const clickPersonalArea = e => {
    setShowPersonal(true)
    setShowFamily(false)
    setShowCriminal(false)
  }

  const [isShown2, setShowFamily] = useState(true)
  const clickFamilyArea = e => {
    setShowPersonal(false)
    setShowFamily(true)
    setShowCriminal(false)
  }

  const [isShown3, setShowCriminal] = useState(false)
  const clickCriminalArea = e => {
    setShowPersonal(false)
    setShowFamily(false)
    setShowCriminal(true)
  }

  return (
    <div id="home">
      <div id="section_1">
        <a href="#contact">
          <button className="consult">
            <h2>{t("consult_btn")}</h2>
            <HiOutlineArrowRight className="angle" />
          </button>
        </a>

        <div id="area">
          <div id="butt_area">
            <button className='area_btn area_btn1' onClick={clickPersonalArea}>{t("area_btn1")}</button>
            <button className='area_btn area_btn2' onClick={clickFamilyArea}>{t("area_btn2")}</button>
            <button className='area_btn area_btn3' onClick={clickCriminalArea}>{t("area_btn3")}</button>
          </div>
          <div id="info_area">
            {isShown1 && (
              <div id="area_1" className='p_area'>
                <div className='col_1'>
                  <h2>{t("area1_col_1_h2")}</h2>
                  <p>{t("area1_col_1_p")}</p>
                  <button className="more_btn more_btn1">{t("more_btn ")}<span></span><span></span><span></span><span></span></button>
                </div>
                <div className='col_2'>
                  <h2>{t("area1_col_2_h2")}</h2>
                  <div className="imgs_h">
                    <img className="l_img" src={will_hover} alt='Fatneek.D.Will' />
                    <img className="l_img" src={teach_hover} alt='Marchell.D.Teach' />
                  </div>
                </div>
              </div>)}
            {isShown2 && (
              <div id="area_2" className='p_area'>
                <div className='col_1'>
                  <h2>{t("area2_col_1_h2")}</h2>
                  <p>{t("area2_col_1_p")}</p>
                  <button className="more_btn more_btn2">{t("more_btn ")}<span></span><span></span><span></span><span></span></button>
                </div>
                <div className='col_2'>
                  <h2>{t("area2_col_2_h2")}</h2>
                  <div className="imgs_h">
                    <img className="l_img" src={will_hover} alt='Fatneek Jr Will' />
                    <img className="l_img" src={lisa_hover} alt='Lisa Isaribi' />
                    <img className="l_img" src={teach_hover} alt='Marshall D Teach' />
                  </div>
                </div>
              </div>)}
            {isShown3 && (
              <div id="area_3" className='p_area'>
                <div className='col_1'>
                  <h2>{t("area3_col_1_h2")}</h2>
                  <p>{t("area3_col_1_p")}</p>
                  <button className="more_btn more_btn3">{t("more_btn ")}<span></span><span></span><span></span><span></span></button>
                </div>
                <div className='col_2'>
                  <h2>{t("area3_col_2_h2")}</h2>
                  <div className="imgs_h">
                    <img className="l_img" src={will_hover} alt='Fatneek Jr Will' />
                    <img className="l_img" src={lisa_hover} alt='Lisa Isaribi' />
                    <img className="l_img" src={teach_hover} alt='Marshall D Teach' />
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>

      <div id='section_2'>
        <div className='statistics'>
          <h3 className='stc_num'>350+</h3>
          <p className='stc_name'>{t("stc_name_1")}</p>
        </div>
        <div className='statistics'>
          <h3 className='stc_num'>1 000 000DH</h3>
          <p className='stc_name'>{t("stc_name_2")}</p>
        </div>
        <div className='statistics'>
          <h3 className='stc_num'>93%</h3>
          <p className='stc_name'>{t("stc_name_3")}</p>
        </div>
        <div className='statistics'>
          <h3 className='stc_num'>2300+</h3>
          <p className='stc_name'>{t("stc_name_4")}</p>
        </div>
      </div>

      <div id='child_container'>
        <div id="section_3">
          <div className='practice'>
            <MdFamilyRestroom className="area_icon" />
            <h3 className='categorie'>{t("categorie1")}</h3>
            <p className='practice_info'>{t("practice_info1")}</p>
            <div className='more_link'><h4>{t("more_link")} </h4><BsArrowRightCircle className="more_icon" /></div>
          </div>

          <div className='practice'>
            <MdPersonalInjury className="area_icon" />
            <h3 className='categorie'>{t("categorie2")}</h3>
            <p className='practice_info'>{t("practice_info2")}</p>
            <div className='more_link'><h4>{t("more_link")}</h4><BsArrowRightCircle className="more_icon" /></div>
          </div>

          <div className='practice'>
            <GiPoliceOfficerHead className="area_icon" />
            <h3 className='categorie categ'>{t("categorie3")}</h3>
            <p className='practice_info'>{t("practice_info3")}</p>
            <div className='more_link'><h4>{t("more_link")} </h4><BsArrowRightCircle className="more_icon" /></div>
          </div>
        </div>

        <div id="section_4">
          <h1 className="stg_t">STRATEGIC</h1>
          <div className='stg_content'>
            <img src={strategic_img} className="stg_img" alt='Strategic image' />
            <div className='stg_info'>
              <p className="stg_sous_t">{t("stg_sous_title")}</p>
              <div className='stg_grid'>
                <div className='stg_item'>
                  <TiLightbulb className='stg_icon' />
                  <p className='stg_describe'>{t("stg_item1")}</p>
                </div>
                <div className='stg_item'>
                  <FaRegHandshake className='stg_icon' />
                  <p className='stg_describe'>{t("stg_item2")}</p>
                </div>
                <div className='stg_item'>
                  <FaMedal className='stg_icon' />
                  <p className='stg_describe'>{t("stg_item3")}</p>
                </div>
                <div className='stg_item'>
                  <AiOutlineTrophy className='stg_icon' />
                  <p className='stg_describe'>{t("stg_item4")}</p>
                </div>
                <div className='stg_item'>
                  <GiInjustice className='stg_icon' />
                  <p className='stg_describe'>{t("stg_item5")}</p>
                </div>
                <div className='stg_item'>
                  <GiGavel className='stg_icon' />
                  <p className='stg_describe'>{t("stg_item6")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="section_5">
          <h1 className='location_t'>{t("location_title")}</h1>
          <div className='loct_content'>
            <img src={country_img} className='country_img' alt='Morocco Map' />
            <div className='loct_info'>
              <p>
                {t("loct_info_p1")}
                <br /><br />
                {t("loct_info_p2")}
              </p>
              <div className='loct_flex'>
                <div>
                  <div className='city'><GiCrossMark className='city_icon' /><p>Agadir</p></div>
                  <div className='city'><GiCrossMark className='city_icon' /><p>Tangier</p></div>
                  <div className='city'><GiCrossMark className='city_icon' /><p>Taroudant</p></div>
                </div>
                <div>
                  <div className='city'><GiCrossMark className='city_icon' /><p>Marrakesh</p></div>
                  <div className='city'><GiCrossMark className='city_icon' /><p>Geullmim</p></div>
                  <div className='city'><GiCrossMark className='city_icon' /><p>Casablanca</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div id="section_6">
        <h1 className='connection_t'>Your Connection to Your Case</h1>
        <div className='conn_content'>
          <p className='conn_p'>{t("conn_p1")}<br />
            {t("conn_p2")}<br />
            {t("conn_p3")}<br />
            {t("conn_p4")}
          </p>
          <h4 className='conn_st'>{t("conn_st")}</h4>
          <div className='conn_info'>
            <div className='conn_item'>
              <IoIosChatbubbles className='conn_icon' />
              <p className='conn_sp'>{t("conn_sp1")}</p>
            </div>
            <img src={arrow} className='arrow' />
            <div className='conn_item'>
              <GiFullFolder className='conn_icon' />
              <p className='conn_sp'>{t("conn_sp2")}</p>
            </div>
            <img src={arrow} className='arrow' />
            <div className='conn_item'>
              <FaRegHandshake className='conn_icon' />
              <p className='conn_sp'>{t("conn_sp3")}</p>
            </div>
          </div>
        </div>
      </div>

      <div id='faq'>
        <h1 className='faq_t'>{t("faq_title")}</h1>
        <p className='faq_p'>{t("faq_p")}</p>
        <div className='faq_grid'>
          <div className='faq_item'>
            <p className='faq_q'>Q.</p>
            <div className='faq_info'>
              <h3 className='question'>{t("question1")}</h3>
              <p className='answer'>{t("answer1")}</p>
            </div>
          </div>

          <div className='faq_item'>
            <p className='faq_q'>Q.</p>
            <div className='faq_info'>
              <h3 className='question'>{t("question2")}</h3>
              <p className='answer'>{t("answer2")}</p>
            </div>
          </div>

          <div className='faq_item'>
            <p className='faq_q'>Q.</p>
            <div className='faq_info'>
              <h3 className='question'>{t("question3")}</h3>
              <p className='answer'>{t("answer3")}</p>
            </div>
          </div>

          <div className='faq_item'>
            <p className='faq_q'>Q.</p>
            <div className='faq_info'>
              <h3 className='question'>{t("question4")} </h3>
              <p className='answer'>{t("answer4")}</p>
            </div>
          </div>

          <div className='faq_item'>
            <p className='faq_q'>Q.</p>
            <div className='faq_info'>
              <h3 className='question'>{t("question5")}</h3>
              <p className='answer'>{t("answer5")}</p>
            </div>
          </div>

          <div className='faq_item'>
            <p className='faq_q'>Q.</p>
            <div className='faq_info'>
              <h3 className='question'>{t("question6")}</h3>
              <p className='answer'>{t("answer6")}
              </p>
            </div>
          </div>

          <div className='faq_item'>
            <p className='faq_q'>Q.</p>
            <div className='faq_info'>
              <h3 className='question'>{t("question7")}</h3>
              <p className='answer'>{t("answer7")}
              </p>
            </div>
          </div>

          <div className='faq_item'>
            <p className='faq_q'>Q.</p>
            <div className='faq_info'>
              <h3 className='question'>{t("question8")}</h3>
              <p className='answer'>{t("answer8")}
              </p>
            </div>
          </div>

        </div>
      </div>

      <Contact />

    </div>
  )
}
export default Home;