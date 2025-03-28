'use client'
import React, { useState } from 'react'
import classes from '../home.module.css';

const ContactUs = () => {
  const [selectedRole, setSelectedRole] = useState("consumer");
  return (
    <div>
      <section className={classes.ss_cnt_pg_man_sec}>
        <div className="container">
          <div className="row">
            {/* Left side contact info */}
            <div class="col-lg-6">
          <div className={classes.ss_cont_pg_lft_bx}>
            <h2>We are at:</h2>

            <div className={classes.ss_contact_loca_div}>
              <div className={classes.ss_cnt_loca_img_div}>
                <img src="./img/nl.svg" />
              </div>
              <div className={classes.ss_cnt_loca_text_div}>
              <h4>Netherlands (HeadQuarters)</h4>
              <p>Enschede
<span>Netherlands</span>
<span>Chamber of Commerce registration No: 72370343</span></p>
              </div>
            </div>

            {/* flag with address */}

            <div className={classes.ss_contact_loca_div}>
              <div className={classes.ss_cnt_loca_img_div}>
                <img src="./img/cn.svg" />
              </div>
              <div className={classes.ss_cnt_loca_text_div}>
              <h4>ChinA</h4>
              <p>Shaoxing Keqiao Flocus I/E Co. Ltd 
          <span>No. 399 Qiantao Rd, Rm 402 </span>
<span>Xinfeng business building, Keqiao</span>
<span>Shaoxing, 312000</span>
China</p>
<a href="tel:+86 575 84560697">Tel: +86 575 84560697</a>
<div className={classes.ss_cntpg_address_div_two}>
  <p>中国办公室
‍<span>绍兴柯桥芙络珂进出口有限公司</span>
地址: 浙江省绍兴市柯桥区钱陶公路399号兴丰电子商务楼402室</p>
<a href="tel:+86 575 84560697">电话: +86 575 84560697</a>
</div>
              </div>
            </div>


             {/* flag with address */}

             <div className={classes.ss_contact_loca_div}>
              <div className={classes.ss_cnt_loca_img_div}>
                <img src="./img/it.svg" />
              </div>
              <div className={classes.ss_cnt_loca_text_div}>
              <h4>Italy</h4>
              <p>Via Gandhi 28 B
<span>47121 Forli (FC)</span>
<span>taly</span></p>
<a href="tel:+39 05438 06415">Tel: +39 05438 06415</a>
              </div>
            </div>


          </div>
          </div>

            {/* Right side form */}
            <div className="col-lg-6">
              <div className={classes.ss_cnt_form_rit_div}>
                <h2>General Enquiries</h2>
                <p>Please use the contact form below.</p>
                <form>
                  <div className={classes.ss_cnt_form_data_div}>
                    <input type="text" name="fullName" placeholder="Enter your full name" />
                    <input type="email" name="email" placeholder="Your email address" />
                    <input type="tel" name="phone" placeholder="Your phone number" />

                    <h5>Are you:</h5>
                    <div className={classes.ss_cnt_tab_div}>
                      {['consumer', 'In the textile industry', 'press', 'other'].map((role) => (
                        <label key={role} className={selectedRole === role ? classes.ss_cnt_active : ""}>
                          <input
                            type="radio"
                            name="role"
                            value={role}
                            checked={selectedRole === role}
                            onChange={() => setSelectedRole(role)}
                          />
                          {role.charAt(0).toUpperCase() + role.slice(1)}
                        </label>
                      ))}
                    </div>

                    {/* Conditional content based on selection */}
                    <div className={classes.ss_tab__mn_content_div}>
                      {selectedRole === "consumer" && (
                        <div className={classes.ss_consumer_div}>
                          <div className={classes.ss_tab_check}>
                            <input type="checkbox" id="where-can-i" name="Where can I" value="Where can I" />
                            <label htmlFor="where-can-i"> Where can I buy products using Flocus?</label>
                          </div>

                          <div className={classes.ss_tab_check}>
                            <input type="checkbox" id="How does" name="Where can I" value="Where can I" />
                            <label htmlFor="How does"> How does using Flocus help the environment?</label>
                          </div>

                          <div className={classes.ss_tab_check}>
                            <input type="checkbox" id="I am interested" name="Where can I" value="Where can I" />
                            <label htmlFor="I am interested"> I am interested in planting trees with Flocus. Please send me details of how to be involved</label>
                          </div>

                          <div className={classes.ss_tab_textarea_div}>
                          <label>We've given you some insight about how Flocus is helping the people, helping the planet.</label>
                          <textarea type="message" placeholder="Now please tell us about yourself and how we can help you?"></textarea>
                            </div>

                        </div>
                      )}
                      {selectedRole === "In the textile industry" && <p>You selected Textile Industry.</p>}
                      {selectedRole === "press" && <p>You selected Press.</p>}
                      {selectedRole === "other" && <p>You selected Other.</p>}

                      <button type="submit">Submit Your Query</button>

                    </div>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs