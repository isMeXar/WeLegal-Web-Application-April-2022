import React from 'react'
import './about.css'

import { GiEagleEmblem, GiMapleLeaf, GiHumanPyramid } from 'react-icons/gi'
import { BsTelephoneFill, BsPatchCheck } from 'react-icons/bs'
import { FaRegCreditCard, FaUserTie } from 'react-icons/fa'
import { RiFolderShield2Fill, RiMailSendFill } from 'react-icons/ri'
import { MdOutlinePhoneIphone, MdEmail } from 'react-icons/md'
import { HiUserGroup } from 'react-icons/hi'


const About = () => {
    return (
        <div id="about">
            <div className='about_intro'>
                <h1 className='about_t'>About Us</h1>
            </div>

            <div id='who_rwe'>
                <h2>This is where your life gets better.</h2>
                <p>Our attorneys at WeLegaL Law Group have more than 10 years of
                    combined experience<br /> practicing in Agadir City and
                    neighboring communities.
                    We know the law and we know the
                    courts.<br /><br />
                    Our team includes a former prosecutor who can provide
                    an advantageous perspective on your criminal or traffic defense,
                    as well as a certified defensive driving instructor with a unique
                    understanding of how negligent driving causes accidents
                    and injuries.<br /><br />
                    We are team of dedicated and devoted lawyers and advisors who understand people, business and society.<br /><br />
                    But above all that we understand the law in all its infinite depth and width. Therefore it is the Steiniger law firm, which is able to determine trends and change the unchangeable.
                </p>
                <h4>We measure our success on your success:</h4>
                <p>When we meet your economic and emotional needs, we know that we have achieved far more
                    than awards or advanced degrees and licenses - although w've got those too.</p>
            </div>

            <div id="our_path">
                <div id='path_container'>
                    <div className='philosophy'>
                        <div className='inner_phil'>
                            < h3>OUR<br /> PHILOSOPHY</h3>
                            <p className='phil_p'>We listen to what you need -
                                your priorities, intentions, goals
                                and concerns.
                                <br /><br />
                                We use our expertise, passion,
                                outside-the-box problem solving
                                thinking to craft a legal strategy
                                that will get you where you need
                                to go.
                                <br /><br />
                                Whether you want full
                                representation or a little help
                                along the way, we vow to truly
                                hear you and give you the no-
                                nonsense legal advise that you
                                deserve.</p>
                        </div>
                    </div>
                    <div className='manifesto'>
                        <div className='manif_t'>
                            <GiEagleEmblem className='eagle_icon' />
                            <h3>OUR MANIFESTO</h3>
                        </div>
                        <p className='manif_p'>
                            We recognize your matter is a personal investment - with
                            results that can have serious and long lasting implications.
                            We are humbled by your story.<br /><br />
                            We measure our success by your outcome.<br /><br />
                            We define family in broad and inclusive terms.<br /><br />
                            We are passionate about new and complex challenges.<br /><br />
                            We love efficiency.<br /><br />
                            We respect the legal system but trust there are sometimes
                            better ways to resolve domestic issues.<br /><br />
                            We care about our reputation in the community.<br /><br />
                            We are team players.<br /><br />
                            We aim to change the way you think about lawyers.<br /><br />
                        </p>
                    </div>
                </div>
                <h1 className='path_b'>WE PROUDLY SERVE MOST CITIES ALL AROUND THE COUNTRY .</h1>
            </div>

            <div id="hire">
                <h2 className='hire_t'>Why hire Us</h2>
                <div className='hire_grid'>
                    <div className='hire_item'>
                        <BsPatchCheck className='hire_icon' />
                        <p className='hire_p'>Our firm has over 100+ five-star Google reviews across Morocco.</p>
                    </div>
                    <div className='hire_item'>
                        <GiMapleLeaf className='hire_icon' />
                        <p className='hire_p'>We are one of the largest criminal defence teams in Morocco.</p>
                    </div>
                    <div className='hire_item'>
                        <HiUserGroup className='hire_icon' />
                        <p className='hire_p'>Our lawyers have over 10 years of combined legal experience.</p>
                    </div>
                    <div className='hire_item'>
                        <RiFolderShield2Fill className='hire_icon' />
                        <p className='hire_p'>We have defended clients in over 120 criminal cases.</p>
                    </div>
                    <div className='hire_item'>
                        <FaRegCreditCard className='hire_icon' />
                        <p className='hire_p'>We offer flexible payment structures and fee plans.</p>
                    </div>
                    <div className='hire_item'>
                        <BsTelephoneFill className='hire_icon' />
                        <p className='hire_p'>Our team is available 24/7 to provide help and support.</p>
                    </div>
                </div>
            </div>

            <div id="what_expect">
                <div id="what_col1">
                    <h2 className='what_t'>What To Expect</h2>
                    <p className='what_p'>
                        Many of our clients have never dealt with family law
                        or other legal issues. Understandably, they can be
                        confused and lost when they first contact us. Here are
                        the steps we generally follow from the moment you call
                        and until the end of your legal representation:
                        <br /><br />
                        <span>Step 1: Initial Phone Call or Email</span><br />
                        Our lovely receptionist will:
                        <br /><br />
                        Greet you and ask what your matter is about.
                        Ask whether you have a specific lawyer in mind to
                        talk to, if not, she will let you know which lawyers
                        are available to take on your case.
                        Advise you of the Law Society Rules which require
                        us to first to a Conflict of Interest Check before having
                        you speak with a lawyer.
                        Advise you of the initial consultation fees.
                        Book a consultation on a date and time that is
                        mutually agreeable.
                        Will follow up confirming your appointment via email.
                        Will ask that if you need to cancel, you need to
                        provide us with at least 24 hour's notice.
                        Will provide you with a letter that lays out how the
                        initial consultation will proceed.
                        <br /><br />
                        <span>Step 2: Your Initial Consultation</span><br />
                        For your initial consultation:
                        <br /><br />
                        You can choose to meet in person, via phone or a
                        Zoom call;
                        You will be greeted by our receptionist and asked
                        whether you would like coffee, tea, water or snacks!
                        You will sit in our beautiful waiting area until the
                        lawyer comes out to greet you.
                        You and the lawyer will sit in his/her office.
                        The lawyer will inform you that all communication
                        is confidential and what he/she can help you with.
                        The lawyer will first listen to everything you have
                        to say, will ask for clarification questions and then
                        will provide you with legal advice.
                        The lawyer will generally provide you with a roadmap
                        of the steps ahead, your chances of success with
                        your case and the options you have.
                        The lawyer will advise you of how much we need
                        as retainer and whether you would like to retain us.
                        If you decide to retain the lawyer's services, our
                        office will provide you with a retainer agreement
                        which you will need to sign before representation
                        will begin.
                        <br /><br />
                        <span>Step 3: Your Representation</span><br />
                        Depending on the type of case you have, these are
                        the general events that may or may not occur on
                        your file:
                        <br /><br />
                        The lawyer will do an in-depth review of your file,
                        the documents you have, etc;
                        The lawyer will write to you and confirm the steps
                        ahead, and ask for your agreement to same;
                        The lawyer generally will start communicating with
                        the other side via a letter or a phone call. He or she
                        will relay your position to the other side and ask for
                        their response.
                        If your case is already in litigation, the lawyer may
                        start preparing litigation papers to protect you, or
                        suggest mediation, negotiation or other ways of
                        resolving your file;
                        You and your lawyer will continue to communicate,
                        consult with one another and move your file ahead.
                        Every steps taken on your file will be confirmed with
                        you. Most times every letter that goes out will first be
                        confirmed with you.
                        The lawyer will continue to advise you regarding your
                        best course of action as your file proceeds.
                        <br /><br />
                        <span>Step 4: Conclusion of Your File</span><br />
                        Most cases end either through mutual settlement or
                        consent, or by going to trial.
                        Once your case is settled either through mediation,
                        negotiation or trial, your lawyer will generally ask
                        whether you would like to close your file with us.
                        If the answer is yes, we close your file, return you
                        all the documents you have given us and refund any
                        remaining retainer you have with us.
                        We keep important documents on your file for at least
                        10 years.
                        We hug goodbye!
                        <br /><br />
                        Please note: in some situations, you may wish to switch
                        lawyers, not have lawyers represent you or self-represent.
                        If that is the case, you will inform us of your decision
                        and we will close your file and return your file
                        contents/retainer as long as you do not have any
                        outstanding accounts with us.
                        <br /><br />
                        We hope the above provides some clarify on the
                        ever confusing legal world we live in.
                    </p>
                </div>
                <div id="what_col2">
                    <h3>Feel Free To</h3>
                    <h2 className='col2_t'>Contact Us</h2>
                    <div className='gather_ctn'>
                        <div className='ctn_item'>
                            <MdOutlinePhoneIphone className='ctn_icon' />
                            <p>(+212) 610-28533782</p>
                        </div>
                        <div className='ctn_item'>
                            <MdEmail className='ctn_icon' />
                            <p>contact@welegal.ma</p>
                        </div>
                        <div className='input_div'>
                            <input placeholder="Last Name" type="text" id="inp" className='ctn_input' />
                            <input placeholder="First Name" type="text" id="inp" className='ctn_input' />
                            <input placeholder="Phone" type="text" id="inp" className='ctn_input' />
                            <input placeholder="City" type="text" id="inp" className='ctn_input' />
                            <input placeholder="Email" type="text" id="inp" className='ctn_input' />
                            <textarea placeholder="Message" type="text" id="inp" className='ctn_input' />
                        </div>
                        <button className='btn_ctn submit_btn'>
                            <p>Submit message</p>
                            <RiMailSendFill className='submit_icon'/>
                        </button>
                        <p className='or'>Or</p>
                        <button className=' btn_ctn client_btn'>
                            <p>Become a client</p>
                            <FaUserTie className='client_icon'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;