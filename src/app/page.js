import classes from './home.module.css'
export default async function Home() {
  return (
    <div>
   <header className={classes.ss_header_sec}>
    <div class="container">
      <div className={classes.ss_row}>
    <div class="col-lg-2">
    <div className={classes.ss_logo_sec}>
      <a href="#"><img src="../../img/logo.png" /></a>
    </div>
    </div>
    <div class="col-lg-10">
    <div className={classes.ss_home_hed_rit_menu}>
      <ul>
        <li><a href="#">About Flocus</a></li>
        <li><a href="#">Applications</a></li>
        <li><a href="#">Kapok Impact</a></li>
        <li><a href="#">Kapok Knowledge Hub</a></li>
        <li className={classes.ss_hed_btn_1}><a href="#">Contact Us</a></li>
        <li className={classes.ss_hed_btn_2}><a href="#">Get in touch</a></li>

      </ul>
    </div>
    </div>
      </div>
    </div>
   </header>


    <section className={classes.ss_banner_main_sec}>

        <div className={classes.ss_banner_img}>
          <img src="../../img/banner-image.jpg" />
        </div>
        <div className={classes.ss_banner_text} >
        <h2>Flocus: Pioneering Sustainabl <span>Kapok Solutions</span></h2>
        </div>

    </section>


    {/* what is kapak */}

    <section className={classes.ss_full_banner_text_left}>
   <div>
   <img src="../../img/whatis-kapak-image.jpg" />
   </div>
    
        <div className={classes.ss_text_left_box}>
          <h4>What is Kapok?:</h4>
          <a href="#">Find out all of its properties</a>
        </div>
       
  
    </section>



    <section className={classes.ss_full_banner_text}>
   <div>
   <img src="../../img/flocus-tm-bg-image.jpg" />
   </div>
    
        <div className={classes.ss_full_text_box}>
          <h2>Flocus™:</h2>
          <h4>Pioneering Ethical Kapok Fiber Industrialization</h4>
          <a href="#">Do you know how kapok is processed ?</a>
        </div>
       
  
    </section>


    <section className={classes.ss_full_banner_text_left}>
   <div>
   <img src="../../img/Applications-image.jpg" />
   </div>
    
        <div className={classes.ss_text_left_box}>
          <h4>Applications</h4>
          <a href="#">Practical Solutions for Your Products with Flocus™</a>
        </div>
       
  
    </section>


    <section className={classes.ss_full_banner_text}>
   <div>
   <img src="../../img/Impact-image.jpg" />
   </div>
    
        <div className={classes.ss_full_text_box}>
          <h4>The Impact of Choosing Flocus™ Kapok</h4>
          <a href="#">Flocus™: Driving Reforestation and Carbon
          Sequestration through Kapok Demand</a>
        </div>
       
  
    </section>


    </div>
  );
}
