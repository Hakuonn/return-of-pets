export default class Content {
    index(){
        let a = ``
        a = a + this.header() ;a =a +this.nav();
        a = a + `
        <section class="hero-section" id="section_1">
        <div class="section-overlay"></div>

        <div class="container d-flex justify-content-center align-items-center">
            <div class="row">

                <div class="col-12 mt-auto mb-5 text-center">
                    <small>寵物歸來</small>

                    <h1 class="text-white mb-5">Return of Pets</h1>

                    <a class="btn custom-btn smoothscroll" href="./plan.html">Let's begin</a>
                </div>

                <div class="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
                    <div class="date-wrap">
                        <h5 class="text-white">
                            <i class="custom-icon bi-clock me-2"></i>
                            10 - 12<sup>th</sup>, Dec 2023
                        </h5>
                    </div>

                    <div class="location-wrap mx-auto py-3 py-lg-0">
                        <h5 class="text-white">
                            <i class="custom-icon bi-geo-alt me-2"></i>
                            高雄市大社區大吉路186巷19號
                        </h5>
                    </div>

                    <div class="social-share">
                        <ul class="social-icon d-flex align-items-center justify-content-center">
                            <span class="text-white me-3">Share:</span>

                            <li class="social-icon-item">
                                <a href="#" class="social-icon-link">
                                    <span class="bi-facebook"></span>
                                </a>
                            </li>

                            <li class="social-icon-item">
                                <a href="#" class="social-icon-link">
                                    <span class="bi-twitter"></span>
                                </a>
                            </li>

                            <li class="social-icon-item">
                                <a href="#" class="social-icon-link">
                                    <span class="bi-instagram"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="video-wrap">
            <video autoplay="" loop="" muted="" class="custom-video" poster="">
                <source src="video/Return_of_pets_index.mp4" type="video/mp4">
                <!-- Your browser does not support the video tag. -->
            </video>
            
        </div>
        </section>


        <section class="about-section section-padding" id="section_2">
        <div class="container">
            <div class="row">

                <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                    <div class="services-info">
                        <h2 class="text-white mb-4">關於我們</h2>

                        <p class="text-white">本社員工曾經幫助一名飼主埋葬他死掉的兔子，結果，埋完後，無論該飼主怎麼哭，都停止不了其崩潰的情緒，後來組員只好悻悻然離去。當時，並沒有舉辦任何弔唁儀式，只是將兔子埋葬在公園的樹下，本以為入土為安飼主會相對放心，結果，臨行前，該飼主仍然不斷抽泣，如此令人感慨的情況，也讓組員感到非常抱歉，且替她的寵物感到十分不捨。</p>

                        <h6 class="text-white mt-4">創建理念</h6>

                        <p class="text-white">實質上幫助到飼主伴隨其愛寵在逝世的這段期間及早走出傷痛，並且讓寵物能夠像人一樣走的體面。</p>

                        <h6 class="text-white mt-4">期望</h6>

                        <p class="text-white">探討寵物火化的發展現狀，消費者對於寵物遺體管理和處理，期許有助於實現對於寵物和其主人的情感關係的尊重和理解，促進產業的規範化和發展，也有助於提高人們對於生命價值和生命終結的尊重，以及對於生命經驗的反思和憑弔。</p>
                    </div>
                </div>

                <div class="col-lg-6 col-12">
                    <div class="about-text-wrap">
                        <img src="images/according.png" class="about-image img-fluid">


                    </div>
                </div>

            </div>
        </div>
        </section>


        <section class="artists-section section-padding" id="section_3">
        <div class="container">
            <div class="row justify-content-center">

                <div class="col-12 text-center">
                    <h2 class="mb-4">CEO</h1>
                </div>

                <div class="col-lg-5 col-12">
                    <div class="artists-thumb">
                        <div class="artists-image-wrap">
                            <img src="images/ceo.png"
                                class="artists-image img-fluid">
                        </div>

                        <div class="artists-hover">
                            <p>
                                <strong>Name:</strong>
                                楊兆彬
                            </p>

                            <p>
                                <strong>Birthdate:</strong>
                                June 25, 2003
                            </p>

                            <p>
                                <strong>Music:</strong>
                                K-POP
                            </p>

                            <hr>

                            <p class="mb-0">
                                <strong>Facebook Channel:</strong>
                                <a href="#">Yang Official</a>
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
        </section>



        <section class="contact-section section-padding" id="section_6">
        <div class="container">
            <div class="row">

                <div class="col-lg-8 col-12 mx-auto">
                    <h2 class="text-center mb-4">聯絡我們</h2>

                    <nav class="d-flex justify-content-center">
                        <div class="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab"
                            role="tablist">
                            <button class="nav-link active" id="nav-ContactForm-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-ContactForm" type="button" role="tab"
                                aria-controls="nav-ContactForm" aria-selected="false">
                                <h5>聯繫表單</h5>
                            </button>

                            <button class="nav-link" id="nav-ContactMap-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-ContactMap" type="button" role="tab"
                                aria-controls="nav-ContactMap" aria-selected="false">
                                <h5>Google Maps</h5>
                            </button>
                        </div>
                    </nav>

                    <div class="tab-content shadow-lg mt-5" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-ContactForm" role="tabpanel"
                            aria-labelledby="nav-ContactForm-tab">
                            <form class="custom-form contact-form mb-5 mb-lg-0" action="#" method="post"
                                role="form">
                                <div class="contact-form-body">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <input type="text" name="contact-name" id="contact-name"
                                                class="form-control" placeholder="Name" required>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-12">
                                            <input type="email" name="contact-email" id="contact-email"
                                                pattern="[^ @]*@[^ @]*" class="form-control"
                                                placeholder="Email" required>
                                        </div>
                                    </div>

                                    <input type="text" name="pet_name" id="pet_name"
                                        class="form-control" placeholder="pet's name" required>

                                    <textarea name="contact-message" rows="3" class="form-control"
                                        id="contact-message" placeholder="Message"></textarea>

                                    <div class="col-lg-4 col-md-10 col-8 mx-auto">
                                        <button type="submit" class="form-control">傳送訊息</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="tab-pane fade" id="nav-ContactMap" role="tabpanel"
                            aria-labelledby="nav-ContactMap-tab">
                            <iframe class="google-map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d409.7928314082709!2d120.35394330441902!3d22.735123948167946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1134bc6765f3%3A0x8642b0b9ff7c2bb8!2sReturn%20of%20Pets!5e0!3m2!1szh-TW!2stw!4v1685982544578!5m2!1szh-TW!2stw" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <!-- You can easily copy the embed code from Google Maps -> Share -> Embed a map // -->
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </section>
        `
        ; a =a + this.footer()
        return a 
    }

    login(){
        let a = ``
        a =a + this.header(); a =a +this.nav();
        a = a + `
        <section class="ticket-section section-padding">
            <div class="section-overlay"></div>

            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-10 mx-auto">
                        <div class="custom-form ticket-form mb-5 mb-lg-0" action="#" method="post">
                            <h2 class="text-center mb-4">登入</h2>

                            <div class="ticket-form-body">
                                <h6>帳號</h6>

  

                                <input type="account" class="form-control" name="ticket-form-email"
                                    placeholder="account"  required id ="account">

                                <h6>密碼</h6>



                                <input type="password" name="password" id="password"
                                    class="form-control" placeholder="password" required>

                                <div class="col-lg-4 col-md-10 col-8 mx-auto">
                                    <button type="submit" class="form-control" id="loginbtn">登入</button>
                                </div>

                                <div class="col-lg-2 col-md-5 col-6">
                                    <a href="signup.html" id="signupbtn">註冊</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        `
          a =a + this.footer()
        return a     
    }
    signup(){
        let a = ``
        a =a + this.header(); a =a +this.nav();
        a = a + `
        <section class="ticket-section section-padding">
            <div class="section-overlay"></div>

            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-10 mx-auto">
                        <form class="custom-form ticket-form mb-5 mb-lg-0" action="#" method="post" role="form">
                            <h2 class="text-center mb-4">註冊</h2>

                            <div class="ticket-form-body">
                                <h6>帳號</h6>
                                <input type="account" class="form-control" name="account" id="account"
                                    placeholder="Ex:binbin69(僅限英文跟數字)" pattern="[a-zA-Z0-9]{20}" required="">

                                <h6>密碼</h6>
                                <input type="password" name="password" id="password" pattern="[a-zA-Z0-9]{6,20}"
                                    class="form-control" placeholder="Ex:BINbin2003需要英文與數字且至少八位" required>

                                <h6>Email</h6>
                                <input type="email" class="form-control" name="ticket-form-email" id="email"
                                    placeholder="Ex:acb123@gmail.com" pattern="[^ @]{50}@[^ @]{50}" required="">

                                <h6>手機號碼</h6>
                                <input type="phone" name="phone" id="phone" maxlength="11" pattern="09\d{2}-\d{6}"
                                    class="form-control" placeholder="Ex:09xx-xxxxxx" required>
                                
                                <h6>飼主姓名</h6>
                                <input type="name" id="name" pattern="^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$"
                                    class="form-control" placeholder="Ex:楊貴妃" required>         
                        
                                <h6>飼主生日</h6>
                                <input type="date" class="form-control" min="1900-01-01" max="2023-06-13"
                                 id="birthday" placeholder="Ex:2003-06-25" required="required"/>


                                <h6>地址</h6>
                                <input type="address" name="address" id="address" pattern="[^0-9\u4e00-\u9fa5]{5,100}"
                                    class="form-control" placeholder="Ex:高雄市大社區大吉路186巷19號" required>

                                <div class="col-lg-4 col-md-10 col-8 mx-auto">
                                    <button class="form-control" id="signupbtn">註冊</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
        </section>
        `
        a =a + this.footer()
        return a
    }
    plan(){
        const a = `
        
        `
        // a =a + this.header() ; a =a + this.footer();a =a +this.nav();
        return a     
    }
    form(){
        const a = `
        
        `
        return a     
    }
    memberCenter(){
        let a = ``
        a = a + this.header(); a =a +this.nav();
        a = a + `
        <section class="ticket-section section-padding">
            <div class="section-overlay"></div>

            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-12 mx-auto bg-white mb-5 mb-lg-0 rounded-5 mb-lg-5 mb-5">
                        <div class="my-4 my-lg-4">
                            <h3>個人檔案</h3>
                            <h5 class="page-header"></h5>
                            <hr>
                        </div>
                        <div class="input-group mb-3 mb-lg-3 input-group-lg">
                            <span class="input-group-text input-group-lg" id="basic-addon1" name="member_file">姓名</span>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="inputGroup-sizing-lg">
                        </div>
                        <div class="input-group mb-3 mb-lg-3 input-group-lg">
                            <span class="input-group-text" id="basic-addon1" name="member_file">Email</span>
                            <input type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="inputGroup-sizing-lg"">
                        </div>
                        <div class="input-group mb-3 mb-lg-3 input-group-lg">
                            <span class="input-group-text" id="basic-addon1" name="member_file">手機</span>
                            <input type="text" class="form-control" placeholder="09xxxxxxxx" aria-label="phone" aria-describedby="inputGroup-sizing-lg">
                        </div>
                        <div class="input-group mb-3 mb-lg-3 input-group-lg">
                            <span class="input-group-text" id="basic-addon1" name="member_file">地址</span>
                            <input type="text" class="form-control" placeholder="address" aria-label="address" aria-describedby="inputGroup-sizing-lg">
                        </div>
                        <div class="input-group mb-3 mb-lg-3 input-group-lg">
                            <span class="input-group-text" id="basic-addon1" name="member_file">生日</span>
                            <input type="date" class="form-control" placeholder="birth" aria-label="birth" aria-describedby="inputGroup-sizing-lg">
                        </div>
                        <div class="input-group mb-3 mb-lg-3 input-group-lg">
                            <span class="input-group-text" id="basic-addon1" name="member_file">密碼</span>
                            <input type="password" class="form-control" placeholder="birth" aria-label="password" aria-describedby="inputGroup-sizing-lg">
                        </div>
                        <button type="button" class="btn btn-outline-primary mb-4 mb-lg-4" id="member_store">儲存</button>
                    </div>  
                </div>
        </section>
        `
        a = a + this.footer()
        return a

    }
    qa(){
        const a =`
        <section class="ticket-section section-padding">
            <div class="section-overlay"></div>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        您的愛寵往生了，該怎麼辦?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            本平台提供多種方式的安葬方式，並且設在全台都有服務公司。
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        本平台寵物葬儀的主要服務項目是什麼?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            本平台提供多種項目，例如：環保葬，火葬，團體葬等等。
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        會不會需要高額費用?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            本平台提供的安葬項目，主要是希望安葬可以結合環保，在環保葬的部分提供費用的降價，希望寵物的飼主們再送毛小孩的最後一程時，也可以友善我們的環境。
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        服務的區域有哪些?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            本平台結合全台各地的禮儀公司，並不會有區域上的限制。
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        寵物葬儀需要準備什麼嗎?
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            準備毛小孩生前最喜歡的玩具或是衣服等等，讓毛小孩在另一個世界也可以帶著它們。
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        `
        
        return a
    }
    header(){
      const a = `
      <header class="site-header">
      <div class="container">
          <div class="row">

              <div class="col-lg-12 col-12 d-flex flex-wrap">
                  <p class="d-flex me-4 mb-0">
                      <i class="bi-telephone custom-icon me-2"></i>
                      <strong class="text-dark">24小時專線 0966-683-955</strong>
                  </p>
              </div>

          </div>
        </div>
        </header>
      `
      return a   
    }
    nav(){
        const a = `
        <nav class="navbar navbar-expand-lg bg-black">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    Return of Pets
                </a>

                <a href="login.html" class="btn custom-btn d-lg-none ms-auto me-4">登入/註冊</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav align-items-lg-center ms-auto me-lg-5">
                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="index.html">首頁</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="index.html#section_2">關於我們</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="index.html#section_3">員工介紹</a>
                        </li>


                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="index.html#section_6">聯繫我們</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link click-scroll" href="./memberCenter.html">個人專頁</a>
                        </li>
                    </ul>

                    <a href="login.html" class="btn custom-btn d-lg-block d-none" id="logButton">登入/註冊</a>
                </div>
            </div>
        </nav>
        `
        return a   
    }
    footer(){
        const f = `
        <footer class="site-footer">
        <div class="site-footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-12">
                        <h2 class="text-white mb-lg-0">Return of Pets</h2>
                    </div>

                    <div class="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
                        <ul class="social-icon d-flex justify-content-lg-end">
                            <li class="social-icon-item">
                                <a href="#" class="social-icon-link">
                                    <span class="bi-reddit"></span>
                                </a>
                            </li>

                            <li class="social-icon-item">
                                <a href="#" class="social-icon-link">
                                    <span class="bi-facebook"></span>
                                </a>
                            </li>

                            <li class="social-icon-item">
                                <a href="#" class="social-icon-link">
                                    <span class="bi-instagram"></span>
                                </a>
                            </li>

                            <li class="social-icon-item">
                                <a href="#" class="social-icon-link">
                                    <span class="bi-youtube"></span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">

                <div class="col-lg-6 col-12 mb-4 pb-2">
                    <h5 class="site-footer-title mb-3">Return of Pets 相關連結</h5>

                    <ul class="site-footer-links">
                        <li class="site-footer-link-item">
                            <a href="#section_2" class="site-footer-link">首頁</a>
                        </li>

                        <li class="site-footer-link-item">
                            <a href="#" class="site-footer-link">關於我們</a>
                        </li>

                        <li class="site-footer-link-item">
                            <a href="./qa.html" class="site-footer-link">Q&A</a>
                        </li>

                        <li class="site-footer-link-item">
                            <a href="./memberCenter.html" class="site-footer-link">個人專頁</a>
                        </li>


                        <li class="site-footer-link-item">
                            <a href="#section_6" class="site-footer-link">聯繫我們</a>
                        </li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                    <h5 class="site-footer-title mb-3">有任何問題嗎？聯絡我們</h5>

                    <p class="text-white d-flex mb-1">
                        <a href="tel: 0966-683-955" class="site-footer-link">
                            0966-683-955
                        </a>
                    </p>

                    <p class="text-white d-flex">
                        <a href="mailto:c110156220@nkust.edu.tw" class="site-footer-link">
                            c110156220@nkust.edu.tw
                        </a>
                    </p>
                </div>

                <div class="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
                    <a class="link-fx-1 color-contrast-higher mt-3" href="#">
                        <span>Our Maps</span>
                        <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="16" cy="16" r="15.5"></circle>
                                <line x1="10" y1="18" x2="16" y2="12"></line>
                                <line x1="16" y1="12" x2="22" y2="18"></line>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div class="site-footer-bottom">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-12 mt-5">
                        <p class="copyright-text">Copyright © 2036 Festava Live Company</p>
                        <p class="copyright-text">Distributed by: <a href="https://themewagon.com">ThemeWagon</a></p>
                    </div>

                    <div class="col-lg-8 col-12 mt-lg-5">
                        <ul class="site-footer-links">
                            <li class="site-footer-link-item">
                                <a href="#" class="site-footer-link">Terms &amp; Conditions</a>
                            </li>

                            <li class="site-footer-link-item">
                                <a href="#" class="site-footer-link">Privacy Policy</a>
                            </li>

                            <li class="site-footer-link-item">
                                <a href="#" class="site-footer-link">Your Feedback</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
     </footer>
        `
        return f;
    }
}