import React, { useState } from 'react'

import "./area.css";
import perso_img1 from './img/personal_sign.png'
import perso_img2 from './img/family_sign.png'
import perso_img3 from './img/criminal_sign.png'


function Area() {
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
    <div id="Area">

      <div className="AreaIntro">
        <h1 className="area_title">Practice Area</h1>
      </div>
      <div id="area_main">

        <div id="area_diff">
          <button className='area_b area_b1' onClick={clickPersonalArea} >PERSONAL INJURY</button>
          <button className='area_b area_b2' onClick={clickFamilyArea}>FAMILY LAW</button>
          <button className='area_b area_b3' onClick={clickCriminalArea}>Criminal Defense</button>
        </div>
        {isShown1 && (
          <div id="personal_bio">
            <div className='bio_1'>
              <p>
                After an accident, the pain and uncertainty can be overwhelming. Speaking with a skilled personal injury lawyer may be the first step towards a solution. If you've been seriously injured in Agadir City or the surrounding areas, let WeLegaL Law Group put our decades of collective legal experience to work for you.
                <br /><br />
                Accidents happen at the most unexpected moments and can change your life completely. An unexpected incident may result in serious injuries and significant recovery time. You don't have to face the situation alone. Our Agadir City personal injury lawyers can help you.
              </p>
              <img src={perso_img1} className="perso_img" />
            </div>

            <div className='bio_2'>
              <h2 className='perso_bt'>Important Issues in Agadir Personal Injury Cases</h2>
              <h4 className='perso_sp'>The thought of making a personal injury claim can be stressful. The process is long and complex and often involves other parties who are familiar with the civil court system. You may have numerous questions regarding how to proceed. WeLegaL Law Group can answer your questions, including:</h4>
              <div className='perso_grid'>
                <p className='left_bio'>
                  <span>What qualifies as a personal injury?</span> - A personal injury is defined as harm to your body or mind due to someone else's negligence or wrongdoing. An injury might include brain and spinal cord damage, broken limbs, wrongful death, workplace injuries, product liabilities, and defective prescriptions. Personal injuries most commonly occur from car, truck, motorcycle, and bike accidents, but can include any event that results in your personal injury.
                  <br /><br /><span>When should I contact a personal injury lawyer?</span> - As soon as you can to determine if you have a case and what it could be worth. The statute of limitations (the time period for legal action) depends on the case and may begin immediately after the injury has occurred. Talking with an experienced lawyer ensures that you aren't missing any compensation for your injury. A lawyer also makes the process easier and less stressful, especially as you're confronted with adjusters and lawyers from the person's whose negligence or wrongdoing caused your injury.
                  <br /><br /><span>What are contingent fee cases?</span> - A contingent fee case means that, even if you don't have the money to pay an attorney, you only have to pay the law firm if you settle or win the case. If you do settle or win, a percentage of the settlement will be given to the lawyer (i.e. payment is contingent on the success of the case). This means that you aren't required to pay out of pocket. Most personal injury cases are contingent fee.
                  <br /><br /><span>How long does a personal injury case take?</span> - The time period varies as each case is different. If you have multiple or substantial injuries and are due significant compensation, the lawsuit will take longer. However, most settlements are reached within one to two years.
                  <br /><br /><span>Will my case go to trial?</span> - More than likely not. The majority of cases end in a settlement before a divorce case every goes to trial. Disputable facts or contestable legal issues could lead to your case going to court, but if your lawyer helps you build a strong case, you shouldn't have to visit the courtroom.
                  <br /><br /><span>What should I do after my personal injury accident?</span> - Seek medical attention as quickly as possible at the nearest hospital or doctor's office. Take photos of your injuries. Also write down details about the accident (e.g. when it happened and where), as well as witnesses of the event and their contact information. File a claim as soon as you can while the event is still fresh on your mind. Also involve an attorney to help you receive maximum compensation for your injury.
                  <br /><br /><span>How much is my personal injury case worth?</span> - The value depends on your specific case, but settlements and court awards can range anywhere from $3,000 to $75,000. While you can't determine the exact amount that your case is worth, you can follow specific steps to get an estimate. Start by calculating the monetary losses you've experienced from your injuries (e.g. medical bills, lost earnings from work, future expenses). Also tally up the value of general damages such as pain and suffering, disabilities, and loss of enjoyment in life. Bring this information to your lawyer so they can conduct a thorough investigation and give you a range of values for your personal injury case. Contact us at Bhatt Law Group so we can evaluate what your case may be worth.
                  <br /><br /><span>How long do I have to file my claim?</span> - This depends on the statute of limitations in your state. Most states require that you file a claim within two years of your personal injury (usually beginning on the day that your personal injury occurred).
                  <br /><br /><span>How much does a personal injury lawyer cost?</span> - You typically don't have to pay money up front for a personal injury lawyer. Instead, the lawyer will receive a percentage of your final compensation amount. This percentage also includes costs that the lawyer's office pays on your behalf such as conducting settlement negotiations.
                  {/* <br/><br/><span>What happens during a personal injury lawsuit?</span> - A personal injury lawsuit begins when a victim files a complaint against the defense. Both victim and defendant then build their cases against each other, pulling in evidence from the accident or event. If they are unable to reach a settlement through negotiations or mediations, the lawsuit goes to court in front of a jury.
                <br/><br/><span>Does personal injury compensation include medical bills?</span> - Yes, you will receive compensation for payment of future medical bills or you will be reimbursed for medical bills already paid. You will be compensated for any medical treatment associated with your personal injury. */}
                </p>
                <p className='right_bio'>
                  <span>What if I've already started the claims process myself?</span> - Although many people might begin the initial claims process themselves, they often become overwhelmed and stressed, especially if they're struggling to cover medical treatment for their injuries. If you become a client at Bhatt Law Group, we'll take the work that you've begun and also serve as the primary contact with insurance carriers. Our aim is to reduce your stress and give you the necessary support to recover from your personal injury.
                  <br /><br /><span>Is my case big enough for a personal injury lawyer?</span> - At Bhatt Law Group, we handle a variety of different sized cases. We offer a free consultation if you would like to schedule an appointment. We can then review your potential claim and provide the support that you need.
                  <br /><br /><span>What should I bring to the first meeting with my personal injury lawyer?</span> - Bring all materials related to your personal injury - from photographs of your injuries to copies of medical records or a police report related to the incident. Copies will be made of these documents at our office for our records to help build your case.
                  <br /><br /><span>Do I have to pay for the initial meeting with Bhatt Law Group?</span> - No, the initial consultation with us about your potential claim is absolutely free. You can contact us at (201) 798-8000 for a free consultation.
                  <br /><br /><span>Will the person who injured me be held accountable?</span> - The person responsible for your injury typically won't receive jail time or criminal fines as personal injury cases count as civil actions and not criminal sentences. However, the responsible party likely will be held liable for the cost of your injuries, paid out by their insurance company, if their negligence or misconduct can be proven.
                  <br /><br /><span>What if my insurance company says I don't need a lawyer?</span> - There are some circumstances where a lawyer won't be necessary. However, if you have been in a serious accident, legal representation helps ensure that you receive fair compensation. While your insurance company might advise against a lawyer, remember that they want to spend as little money as possible on insurance claims. Talk with a lawyer through our free consultation to ensure that you're not leaving any money on the table.
                  <br /><br /><span>Does your firm cover the costs of the case?</span> - A contingency fee agreement means that we'll cover the costs of the case until a settlement is reached. We'll then receive a percentage of the settlement to cover our services and any case-related expenses. During your initial appointment, we'll discuss attorney fees and case costs so you know how much money will come out of your settlement upfront.
                  <br /><br /><span>Will the information I share with the lawyer remain private?</span> - Yes, communications between lawyer and client remain strictly confidential. Any oral or written statements given by you to your lawyer cannot be shared with anyone (including family members) without your consent.
                  <br /><br /><span>What if no one was responsible for my injury?</span> - While sometimes no one will be at fault for a personal injury, this often isn't the case. Even for a “slip and fall” injury, proper safety protocols might not have been adhered to by a business manager. Discuss the details of your case with a lawyer to determine if someone was at fault and if they can be legally charged.
                </p>

              </div>
            </div>
          </div>)}

        {isShown2 && (
          <div id="personal_bio">
            <div className='bio_1'>
              <p>
                Every family experiences hardships that can create a lot of stress, financial worry, and even heartache. If you are trying to find the best course of action for you and your loved ones, trust the skilled and compassionate Agadir City family lawyers at WeLegaL Law Group.
                <br /><br />
                Whether you are facing the difficult decision to end your marriage, challenge a custody or support agreement, or defend yourself against devastating accusations after a DYFS/DCPP investigation, an experienced family lawyer who understands these sensitive matters can help you through trying times. An effective Agadir City attorney can also be a useful resource when planning for your future with prenuptial agreements, estate planning, and completing your family with an adoption.
                <br /><br />
                WeLegaL Law Group has more than 10 years of experience working with families to achieve an array of outcomes. We understand the emotional situations that families encounter. Let us help you navigate the legal system to obtain a beneficial outcome for everyone in your family.
              </p>
              <img src={perso_img2} className="perso_img" />
            </div>

            <div className='bio_2'>
              <h2 className='perso_bt'>Important Issues in Agadir Personal Injury Cases</h2>
              <h4 className='perso_sp'>Navigating through the family law process in Agadir can be complex and confusing. Below are frequently asked questions:</h4>
              <div className='perso_grid'>
                <p className='left_bio'>
                  <span>Do I need a lawyer if I'm getting a divorce?</span> - Not necessarily. You may be able to go through the divorce process on your own, especially if you don't have children or marital assets. However, a lawyer is highly recommended if you do have children or assets that you want divided between you and your spouse. A lawyer serves as an advocate for you throughout the legal process, ensuring that you don't lose your rights as a parent and that your assets aren't taken away.
                  <br /><br /><span>How long do divorce proceedings take?</span> - The length of the divorce process varies case by case, but typically depends on whether the divorce is contested or uncontested. An uncontested divorce, one where both parties agree about the terms of the divorce, can be approved by a judge in a matter of weeks or months. A contested divorce, one where you and your ex-spouse don't agree on all areas of the settlement, will take at least a year. Other factors that impact the length are the state you live in, the court itself, and the type of divorce you choose. An experienced lawyer can help you navigate through a complicated divorce and resolve issues as quickly as possible.
                  <br /><br /><span>Do I have to go to court for my divorce?</span> - If your divorce is uncontested, you may not have to go to court. The court will likely sign off on your divorce if terms are reasonable (although you may still have to appear for an informal or formal hearing). However, for a contested divorce, you probably will have to appear in court to receive the judge's ruling on your divorce. For either type, uncontested or contested, an experienced lawyer can guide you through stressful proceedings.
                  <br /><br /><span>What is legal separation vs divorce?</span> - A legal separation means that you go through a process similar to a divorce, including negotiating child custody and division of property. However, unlike a divorce, a legal separation means that you are still legally married, but living separately from your spouse. In a divorce, your marriage is legally dissolved. Both options can become complicated depending on the state you live in. A lawyer can expertly guide you through either process.
                  <br /><br /><span>Will my case go to trial?</span> - More than likely not. The majority of cases end in a settlement before a divorce case every goes to trial. Disputable facts or contestable legal issues could lead to your case going to court, but if your lawyer helps you build a strong case, you shouldn't have to visit the courtroom.
                  <br /><br /><span>How will my property be split up after a divorce?</span> - Marital property includes all property (e.g. a home) acquired and shared by both spouses between the date of marriage through the date of the divorce decree. After a divorce is granted by the court, property is divided between the two ex-spouses. This division is not always equal, however. It's determined under the Equitable Distribution Law which states that property must be divided as fairly as the court thinks is possible.
                  <br /><br /><span>How does a court determine who gets child custody?</span> - If two ex-spouses can't reach an out-of-court agreement on child custody and visitation rights, the decision will be made in court by a judge. The child's “best interests” are the most important factor in this decision. The court will take into consideration who has served as the child's “primary caretaker” (i.e. which parent has been primarily responsible for meal planning and preparation, healthcare, etc.). Other factors also come into play such as the child's age, the relationship with either parent, prior negative acts of the parents, and the living environment. Custody is traditionally awarded to the parent who can best meet the needs of the child.
                  <br /><br /><span>What is joint legal custody vs sole legal custody?</span> - Traditionally, joint legal custody says that both parents have an equal say in all important decisions when it comes to the child's upbringing (e.g. education, medical care). However, this does not always mean that the parents get awarded an equal amount of time with the child. Different parenting schedules might still be determined in joint legal custody. On the other hand, sole legal custody dictates that all childcare rights are awarded to one parent (although the other parent will still be responsible for child support).
                </p>
                <p className='right_bio'>
                  <span>What if I don't receive court-ordered child support from my ex-spouse?</span> - Failure to pay child support is a serious offense and can result in legal consequences such as driver's license revocation, passport denial, and income withholding. An experienced lawyer can carefully evaluate your situation and ensure that your ex-spouse is held accountable for their non-compliance.
                  <br /><br /><span>What is an uncontested divorce?</span> - An uncontested divorce is typically an easier form of divorce to finalize. Both spouses are in agreement that the marriage should end. They also agree how certain issues should be resolved (e.g. agreement on property division). However, most divorces are contested which can quickly become messy for both spouses.
                  <br /><br /><span>What is a contested divorce?</span> - In a contested divorce, your spouse may disagree with ending your marriage or they may contest certain issues such as child support or property division. It typically takes longer to resolve a contested divorce over an uncontested one.
                  <br /><br /><span>Can I move out of state with my child?</span> - New Jersey allows a custodial parent to relocate out of state with a child if the noncustodial parent gives permission. A new parenting time agreement can then be created. However, if the noncustodial parent objects, the custodial parent can take the matter to the court. The request might be approved if the parent can prove that the move will not harm the child's best interests.
                  <br /><br /><span>What is “legal” child custody vs “physical” child custody?</span> - Legal custody refers to the authority to make major decisions regarding a child's health, education, safety, and welfare. Physical custody means that a child lives with the custodial parent the majority of the time. The non-custodial parent may have visitation rights.
                  <br /><br /><span>How much does a family law attorney cost?</span> - The cost depends on different factors such as the experience of the lawyer, the geographical region, etc. However, at Bhatt Law Group, initial consultations are free so you can evaluate your options with no financial risk.
                  <br /><br /><span>What information should I bring to my consultation appointment for a divorce?</span> - If you schedule a free consultation with Bhatt Law Group, prepare for your appointment by bringing a list of questions for the attorney, tax returns, pay stubs, legal documents such as prenuptial agreements, and any evidence for divorce. Our lawyers will review your case and provide advice on how to proceed.
                  <br /><br /><span>How can a Bhatt Law Group lawyer help with my divorce?</span> - You may think involving a divorce attorney will make things more contentious. However, the opposite is usually true. A Jersey City divorce lawyer from Bhatt Law Group is here to help you through this difficult time. Your lawyer will always explain your rights and options, guiding you through the legal process with both knowledge and compassion.
                  <br /><br /><span>What is a prenuptial agreement?</span> - Prenuptial agreements outline what will happen to you and your spouse's assets and income in the case of a divorce, separation, or death. The agreement is designed to protect the rights of both spouses and actually helps strengthen a marriage as it ensures both spouses are on the same page in terms of financial obligations. A prenuptial agreement does take time to create, however. A Bhatt Law Group lawyer can help create a prenup that clearly outlines what is and what is not marital property so you and your future spouse have clarity and peace of mind.
                  <br /><br /><span>How can I defend myself against accusations after a DYFS/DCPP investigation?</span> - A DYFS/DCPP investigation can be a terrifying experience for any parent, especially considering the possibility that their child could be taken away. To protect yourself and your child during an investigation, contact a lawyer who understands the family court system and has years of experience in the field. They'll support you during this frightening time and ensure that you aren't implicated for a wrongdoing you didn't commit.
                </p>

              </div>
            </div>
          </div>
        )}
        {isShown3 && (
          <div id="personal_bio">
            <div className='bio_1'>
              <p>
                Facing criminal charges can wreak havoc on your life. Protect yourself and your rights with a team of passionate and highly skilled criminal defense attorneys. If you find yourself in a situation involving criminal accusations in Jersey City or surrounding areas, let Bhatt Law Group fight for you.
                <br /><br />
                When you're charged with a crime, you face a long road ahead. The criminal justice system can be complex and often requires special knowledge to navigate. You don't have to deal with your situation alone.
              </p>
              <img src={perso_img3} className="perso_img" />
            </div>

            <div className='bio_2'>
              <h2 className='perso_bt'>What You Need to Know About the Criminal Justice Process</h2>
              <h4 className='perso_sp'>If you are arrested for a crime, you will be suddenly thrown into the complex criminal justice system. You will face interrogations and an in-depth investigation. Law enforcement authorities may claim to be on your side; however, their questions are targeted and often confusing. They want to find someone guilty and hope that person is you.<br /><br />IF YOU'VE BEEN ARRESTED, YOU NEED TO KNOW ABOUT THE FOLLOWING:</h4>
              <div className='perso_grid'>
                <p className='left_bio'>
                  <span>Your Rights in a Criminal Investigation</span> - Don't let investigators scare you. You have rights throughout the criminal investigation process. A knowledgeable criminal defense attorney will protect your rights and make sure they are respected from the beginning.
                  <br /><br /><span>New Jersey Criminal Court Process</span> - Once charges are made, you will face the criminal court process in New Jersey. You need an experienced criminal defense attorney to fight for you against charges made by prosecutors. Bhatt Law Group will make sure your side of the story is heard by the judge and jury.
                  <br /><br /><span>Do I need to hire an attorney if I decide to plead guilty?</span> - For many minor crimes, defendants tend to plead guilty, rather than trying to convince the court of their innocence. The process is over much faster as result. However, if you do plan on pleading guilty, be aware that are several compelling reasons to still hire an attorney. An experienced criminal defense attorney can help you negotiate a guilty plea agreement with better terms and conditions. You can also better understand the implications of pleading guilty and if it's the best option for you. Most importantly, a criminal defense attorney might be able to get your charges dismissed and help you avoid a conviction altogether.
                  <br /><br /><span>Should I speak to a police officer after I'm arrested?</span> - If you've been arrested, the Fifth Amendment protects your rights to not offer a statement or confession to a police officer. You have the right to remain silent if under questioning. You also have the right to a lawyer. Ask to speak to one and wait until you can receive legal consultation. Avoid saying anything, even if the police officer presses you for information. Your word could eventually be used against you in court.
                  <br /><br /><span>Will my case go to trial?</span> - The answer depends on your case and attorney. However, if a verdict cannot be reached based on the criminal charges, your case will go to court. An attorney can help by convincing the prosecution that your case isn't worth pursuing or by proving that the charges were not filed legally. If this happens, your case might be dismissed.
                  <br /><br /><span>What is a restraining order?</span> - A restraining order is a court order issued to protect a person who has experienced harm from an intimate partner. An individual can succeed in obtaining a restraining order if he or she has been the victim of repeated abusive behavior. The person accused of the abuse normally cannot contact the victim, may be required to move out of their home, or lose joint-custody of their children.
                  <br /><br /><span>What do I do if I've been arrested?</span> - If you've been arrested, do not use force (you normally don't have the right to resist arrest even if the arrest is illegal). After an arrest has been made, you will be searched at the scene or in the prison. You will also be photographed and fingerprinted. The record of your arrest will go on file. During this time, invoke your rights which states that you can remain silent and have access to an attorney. Avoid saying anything that could be incriminating. Instead, contact an experienced criminal defense attorney to discuss your case and navigate through the challenging criminal justice system.
                  <br /><br /><span>What is an arraignment?</span> - An arraignment is your first appearance in court after you've been charged with a crime. The court will formally inform you of the charge. You must be present for this hearing. An arraignment is also public so victims and their families might attend. The prosecutor will use this time to determine whether to continue with the charges or drop them. A Bhatt Law Group attorney can help you prepare for your arraignment and ensure that you don't say anything that could be used against you.
                  <br /><br /><span>What is bail?</span> - Bail is a specific amount of money that must be paid to the court to release you from jail. This release is conditional as you must promise to appear in court when required. Bail amounts will depend on certain factors such as the type of crime, your age, criminal record, and other court history. The defendant may post his or her own bail or ask someone else.
                  <br /><br /><span>Can I be released without bail?</span> - In some cases, yes. You can request to be released on an O.R. release (i.e. a release on your own recognizance). You promise the court that you will appear for all court proceedings. The court will look at your past criminal record, severity of the crime, and if your release will endanger public safety. Based on this information, you may be granted an O.R. release that comes with certain conditions.
                  <br /><br /><span>How can I bail someone out?</span> - You can pay bail (either post a bond, pay in cash, or sign over rights to a property) to the court that issued the order. This can normally be done during regular business hours at the office of the court. You'll get your money back once the court has issued a judgment for the case (although if you use a bail bond, 10% of the value is typically not refundable).
                </p>
                <p className='right_bio'>
                  <span>Hiring a Criminal Defense Attorney</span> - The criminal justice system caters to attorneys. It can be difficult to navigate the process without one. You need to file specific paperwork and meet important deadlines. Let us handle those details.
                  <br/><br/><span>Expungements</span> - After a conviction, you will want to move forward with life as quickly as possible. Bhatt Law Group can help you obtain an expungement so that your criminal record is clean.
                  <br/><br/><span>What should I do if I'm falsely accused of a crime?</span> - Being falsely accused of a crime that you didn't commit can be a horrifying experience, especially if the initial charges aren't dropped immediately. There is also the possibility that the court might find you guilty. This is where having an experienced lawyer can be vital in helping you prove that there are no legal grounds for the accusations and get the charges dropped or dismissed.
                  <br/><br/><span>How long does a criminal case take?</span> - The length depends on the complexity of the case. For example, a felony case might take months or a year. A misdemeanor case could take weeks or a few months. Having a lawyer assist you with a reasonable plea offer early on in the case can speed up the process significantly.
                  <br/><br/><span>What penalties will I face if convicted?</span> - The penalty depends on the crime committed. If you are convicted for a misdemeanor, you might face fines, driver's license suspension, probation, and up to a year in prison. A felony can result in time in prison (a year or more), higher fines, community service and stricter probation. Both types of crimes will also go on your permanent record.
                  <br/><br/><span>What is a dismissal vs expungement?</span> - A dismissal refers to when a court drops the defendant's case because they determine that it's not worth prosecuting or that the evidence isn't strong enough against the defendant. An expungement refers to the process of clearing a person's record, including criminal charges and arrests (although it does not apply if one has been convicted of a crime). This process is extremely important as it's difficult for a person who's been arrested or charged to find a job, buy a home, and more. An expungement ensures that criminal history is erased or eliminated. An expungement can be difficult to obtain which is why it's important to have an experienced lawyer to fight for you.
                  <br/><br/><span>Can a plea bargain be made in a DUI case?</span> - Yes, a plea bargain can be made with a DUI case which means you won't have to go to trial. You also will know exactly how long your sentence will be. However, be aware that a plea bargain also means that you will have a DUI charge on your record and will also have to serve the sentence. If you decide that a plea bargain is the best direction to take, work with a lawyer to get the best offer possible.
                  <br/><br/><span>What do I do if my license was suspended?</span> - Your license can be suspended for a number of reasons. Perhaps you were convicted of a DUI, failed to pay fines or court fees, or refused to take a breathalyzer test. Whatever the case, facing the loss of your driving privileges can be painfully difficult, especially if you can't get to and from work. Let us know at Bhatt Law Group if you have received a notice of proposed suspension from the state. We'll serve as your advocate in helping restore your driving privileges and/or avoid permanent loss of your license.
                  <br/><br/><span>What is the implied consent statute in New Jersey?</span> - This statute states that any driver in New Jersey consents to a breath, blood, or urine sample if arrested for drunk driving. If you refuse this test, you can be subjected to mandatory penalties. The first offense includes, but not limited to, driver's license suspension of 7 to 12 months and significant monetary fines. The second offense results in a mandatory driver's license suspension of 2 years, as well as fines and other requirements. The third offense and any following offenses result in a mandatory 10-year driver's license suspension, fines and requirements. Just know that police officers are required to inform you of all penalties you could face if you refuse. If they don't, you may have defenses to the refusal charge. A blood or urine sample also requires a warrant and if this isn't obtained, you may also have defenses to the refusal charge. Talk with your lawyer about your course of action in either situation.
                  <br/><br/><span>What are possession charges in New Jersey?</span> - Common possession charges in New Jersey result from the possession of CDS. This includes the possession of less than 50 grams of marijuana which can result in 6 months of incarceration, a fine not exceeding $1,000, and driver's license suspension of up to 6 months. Possession of more than 50 grams of marijuana or possession of non-marijuana related CDS can result in potential incarceration of up to 5 years and fines not exceeding $35,000. Possession of drug paraphernalia can result in penalties similar to the possession of a small amount of marijuana.
                  <br/><br/><span>What are manufacturing and distribution charges in New Jersey?</span> - Manufacturing, distribution, or possession with intent to distribute CDS are viewed as serious drug offenses in New Jersey and usually considered indictable offenses with greater penalties. The type of substance and the amount, as well as the location of the arrest, determine the severity of the penalties.
                  <br/><br/><span>What are my rights in a criminal investigation?</span> - No matter what crime you've been charged with, you still have rights as represented in the Amendments to the U.S. Constitution. This includes your Fourth Amendment rights which protect you from unreasonable searches and seizures. Your Fifth Amendment rights mean that you are not required to provide evidence or act as a witness against yourself in a criminal case (as stated in the Miranda warning). The Sixth Amendment gives you the right to an attorney during interrogation, trial, sentencing, and the initial appeal of a conviction, as well as the right to a jury and witnesses. Hiring a lawyer can help ensure that your Fourth, Fifth, and Sixth Amendment rights are all protected.
                  <br/><br/><span>How does the points system work in New Jersey?</span> - In New Jersey, your traffic violations and penalties are tracked according to the points system. If you are found guilty for certain offenses or do not contest charges, points are added to your license. If you receive six or more points within three years, you will be charged with a fine. However, if you receive twelve or more points during that time period, your driver's license will get suspended. Points are difficult to remove so fighting your tickets can ensure that points aren't added to your record.
                </p>

              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default Area;
