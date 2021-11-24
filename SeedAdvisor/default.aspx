<%@ Page Title="Seed Advisor | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <meta name="Description" content="Learn more about our Golden Harvest Seed Advisor network. We are focused on providing consultative, whole acre recommendations to help growers maximize returns." />
    <link rel="stylesheet" type="text/css" href='<%= ResolveUrl("~/Styles/seedadvisor.css")%>'>
</asp:Content>


<asp:Content ID="Content2" ContentPlaceHolderID="mainBody" runat="server">

    <section id="bsa-hero">
        <div class="hero-holder" style="background-image: url('<%=ResolveUrl("~/images/seed-advisor/seed-advisor-hero.jpg")%>');"></div>
    </section>
    <section id="bsa-intro" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-push-2">
                    <h1 class="text-center">Become a golden harvest seed advisor to deliver service 365 days a year</h1>
                    <p>As a local, independent Golden Harvest<sup>&reg;</sup> Seed Advisor, you can join our Service 365 year-round commitment to deliver a service experience that yields results. Bring your local farming knowledge, and we’ll provide our unique genetics bred and tested locally, industry-leading trait choices and the E-Luminate<sup>&reg;</sup> digital agronomy platform to give you the tools to maximize profit potential for your farmers and your business.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="bsa-siz-reasons" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-push-2 content-top">
                    <h2 class="text-center">6 REASONS TO BE A GOLDEN HARVEST SEED ADVISOR</h2>
                    <p>Why should you consider becoming a Golden Harvest Seed Advisor? There are many reasons, but here are a few top ones to help you get started&#8230;</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="bene-single clearfix">
                        <img src="<%=ResolveUrl("~/images/seed-advisor/bsa-icon-target.svg")%>" alt="Target Icon" />
                        <p><span>1. </span>You set your own business goals and direction as an independent seed advisor, and Golden Harvest is there to help you realize your vision.</p>
                    </div>
                    <div class="bene-single clearfix">
                        <img src="<%=ResolveUrl("~/images/seed-advisor/bsa-icon-tractor.svg")%>" alt="Tractor Icon" />
                        <p><span>2. </span>You can help farmers maximize yield on every acre with high-yielding Golden Harvest<sup>&reg;</sup> corn and soybeans.</p>
                    </div>
                    <div class="bene-single clearfix">
                        <img src="<%=ResolveUrl("~/images/seed-advisor/bsa-icon-corn.svg")%>" alt="Corn Icon" />
                        <p><span>3. </span>You have access to Agrisure<sup>&reg;</sup> traits and technologies for exceptional insect control, herbicide tolerance and water optimization, and in select areas, Enogen<sup>&reg;</sup> corn hybrids featuring exclusive in-seed innovation designed to enhance ethanol production.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="bene-single clearfix">
                        <img src="<%=ResolveUrl("~/images/seed-advisor/bsa-icon-bargraph.svg")%>" alt="Graph Icon" />
                        <p><span>4. </span>You have the opportunity to grow with few limits because of your access to a broad and diverse seed portfolio that enables tailored, local placements for top performance. </p>
                    </div>
                    <div class="bene-single clearfix">
                        <img src="<%=ResolveUrl("~/images/seed-advisor/bsa-icon-hand.svg")%>" alt="Planting hand Icon" />
                        <p><span>5. </span>You are counted on by farmers to deliver corn and soybean products best suited for individual acres and needs.</p>
                    </div>
                    <div class="bene-single clearfix">
                        <img src="<%=ResolveUrl("~/images/seed-advisor/bsa-icon-people.svg")%>" alt="People Chart Icon" />
                        <p><span>6. </span>You can rely on an extensive network of ag sales representatives, agronomists and customer service specialists to help support your business.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="bsa-form-cont" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 form-img">
                    <div class="video-responsive">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/v9ZDPnyVLxA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                    </div>
                </div>
                <div class="col-md-6">
                    <div id="bsa-form">
                        <h2 class="text-center">Become a Seed Advisor.<br />Deliver a service experience that yields results.</h2>
                        <div class="row">
                            <div class="col-lg-6">
                                <label for="bsa-firstname">First Name*</label>
                                <input id="bsa-firstname" type="text" name="firstname" required />
                            </div>
                            <div class="col-lg-6">
                                <label for="bsa-lastname">Last Name*</label>
                                <input id="bsa-lastname" type="text" name="lastname" required />
                            </div>
                            <div class="col-lg-12">
                                <label for="bsa-farmname">Farm Name*</label>
                                <input id="bsa-farmname" type="text" name="farmname" required />
                            </div>
                            <div class="col-lg-6">
                                <label for="bsa-address">Address*</label>
                                <input id="bsa-address" type="text" name="address" required />
                            </div>
                            <div class="col-lg-6">
                                <label for="bsa-city">City*</label>
                                <input id="bsa-city" type="text" name="city" required />
                            </div>
                            <div class="col-lg-6">
                                <label for="bsa-state">State*</label>
                                <input id="bsa-fullname" type="text" name="state" required />
                            </div>
                            <div class="col-lg-6">
                                <label for="bsa-zip">Zip Code*</label>
                                <input id="bsa-zip" type="text" name="zip" required />
                            </div>
                            <div class="col-lg-6">
                                <label for="bsa-email">Email*</label>
                                <input id="bsa-email" type="text" name="email" required />
                            </div>
                            <div class="col-lg-6">
                                <label for="bsa-phone">Phone Number*</label>
                                <input id="bsa-phone" type="text" name="phone" required />
                            </div>
                            <div class="col-xs-12">
                                <a id="bsa-submit" class="btn-default" href="#">Get in Touch</a>
                            </div>
                        </div>
                        <p class="legal">By providing your e-mail address you are agreeing to receive e-mail communications from Syngenta. We promise to never sell your e-mail address to a third party. Visit <a href="https://www.syngenta-us.com/legal/privacypolicy.html">https://www.syngenta-us.com/legal/privacypolicy.html</a> for the Syngenta privacy policy.</p>
                        <p class="thank-you hidden">Your request has been submitted. Thank you for your interest in our Golden Harvest Seed Advisor network. We look forward to speaking with you soon!</p>
                        <p class="unsupported-region hidden">Sorry, Golden Harvest does not operate in this area.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
     <%-- <section id="bsa-testimonials" class="grey has-arch" style =" padding-bottom : 30px !important">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h2>SEED ADVISOR TESTIMONIALS</h2>
                </div>
                <div class="col-md-4">
                    <div class="testimonial-single">
                        <h3>Andy Neels, Golden Harvest Seed Advisor <span>Dunbar, NE</span></h3>
                        <p>&quot;When your job is to help your neighbors succeed, it hardly feels like a job.&quot;</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="testimonial-single">
                        <h3>David Laur, Golden Harvest Seed Advisor <span>Westboro, MO</span></h3>
                        <p>&quot;Golden Harvest has multiple advanced trait technologies and the product knowledge they provide to the Seed Advisors is incredible.&quot;</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="testimonial-single">
                        <h3>Ralph Pabst, Golden Harvest Seed Advisor <span>Sanborn, MN</span></h3>
                        <p>&quot;My customers are everything to me. They’re neighbors and friends. So it’s very important to me to get my recommendation right. I think my customers understand that I’m totally honest with them and looking out for their best interests. I won’t recommend anything I don’t believe in.&quot;</p>
                    </div>
                </div>
            </div>
        </div>
    </section>--%>
    <script>
        function openModal() {
            $("#videoModal-bg").removeClass("hidden");
        };
        function closeModal() {
            $("#videoModal-bg").addClass("hidden");
            $("#modalContent iframe").attr('src', null); // Stops the YouTube video if it was in the middle of playing
        };
    </script>
    <div id="videoModal-bg" class="hidden" onclick="closeModal();">
        <div id="videoModal">
            <div id="modalTitle"><h4>Title of the video</h4></div>
            <div id="modalClose" onclick="closeModal();"><i class="fas fa-times"></i></div>
            <div id="modalContent" class="video-container">
                <iframe width='560' height='315' src='' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
            </div>
            <div id="modalDescription">Lorem ipsum dolor sit amet</div>
        </div>
    </div>
    <section id="advisor-video" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2>SEED ADVISOR VIDEOS</h2>
                </div>
                <div class="col-sm-12 resource-card-container">
                    <div class="col-sm-4 col-xs-12 resource-card">
                        <a class="primary" id="vid1" onclick="openModal();">
                            <figure><img src="images/seed-advisor/gh_success_port.png"></figure>
                            <div class="video-duration">2:10</div>
                            <figcaption class="title">
                                <span>Golden Harvest Success Story: A Portfolio for Any Field</span>
                            </figcaption>
                            <figcaption class="description">
                                <span>Golden Harvest Seed Advisor Matt Beach works to place the right seed in each of his customers’ fields from the industry-leading Golden Harvest product portfolio.</span>
                            </figcaption>
                        </a>
                        <script>
                            $("#vid1").click(function () {
                                $("#modalTitle").html("Golden Harvest Success Story: A Portfolio for Any Field");
                                $("#modalDescription").html("Golden Harvest Seed Advisor Matt Beach works to place the right seed in each of his customers’ fields from the industry-leading Golden Harvest product portfolio.");
                                $("#modalContent iframe").attr('src', "https://www.youtube.com/embed/Kjrh01ZG3D4");
                            });
                        </script>
                    </div>
                    <div class="col-sm-4 col-xs-12 resource-card">
                        <a class="primary" id="vid2" onclick="openModal();">
                            <figure><img src="images/seed-advisor/gh_success_next.png"></figure>
                            <div class="video-duration">1:48</div>
                            <figcaption class="title">
                                <span>Golden Harvest Success Story: Providing the Next Great Thing</span>
                            </figcaption>
                            <figcaption class="description">
                                <span>Golden Harvest Seed Advisor Jeff Kjellander has become a trusted advisor to his customers by delivering top-notch genetics, agronomic advice and cutting-edge technology.</span>
                            </figcaption>
                        </a>
                        <script>
                            $("#vid2").click(function () {
                                $("#modalTitle").html("Golden Harvest Success Story: Providing the Next Great Thing");
                                $("#modalDescription").html("Golden Harvest Seed Advisor Jeff Kjellander has become a trusted advisor to his customers by delivering top-notch genetics, agronomic advice and cutting-edge technology.");
                                $("#modalContent iframe").attr('src', "https://www.youtube.com/embed/eU7OQWhAwXI");
                            });
                        </script>
                    </div>
                    <div class="col-sm-4 col-xs-12 resource-card">
                        <a class="primary" id="vid3" onclick="openModal();">
                            <figure><img src="images/seed-advisor/gh_success_seeing.png"></figure>
                            <div class="video-duration">1:57</div>
                            <figcaption class="title">
                                <span>Golden Harvest Success Story: Seeing is Believing</span>
                            </figcaption>
                            <figcaption class="description">
                                <span>Golden Harvest Seed Advisor Steve Knorr applies his knowledge as a farmer and the agronomic expertise of Golden Harvest to help his customers succeed.</span>
                            </figcaption>
                        </a>
                        <script>
                            $("#vid3").click(function () {
                                $("#modalTitle").html("Golden Harvest Success Story: Seeing is Believing");
                                $("#modalDescription").html("Golden Harvest Seed Advisor Steve Knorr applies his knowledge as a farmer and the agronomic expertise of Golden Harvest to help his customers succeed.");
                                $("#modalContent iframe").attr('src', "https://www.youtube.com/embed/pTDmuzoohps");
                            });
                        </script>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="bsa-portfolio" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-push-2 content-top">
                    <h2 class="text-center">GOLDEN HARVEST Portfolio</h2>
                    <p>Golden Harvest is rooted in genetics, agronomy and service to deliver a better performance in farmers’ fields. Developed to get the job done in even the most difficult environments and conditions, Golden Harvest hybrids and varieties feature the latest traits and technologies to maximize yield in every field.</p>
                </div>
            </div>
            <div class="row seeds-cont">
                <div class="col-xs-12">
                    <h2>Seeds</h2>
                </div>
                <div class="col-xs-12 col-md-4">
                    <div class="seeds-single">
                        <img class="img-responsive" src="<%=ResolveUrl("~/images/seed-advisor/ghs-logo.png")%>" alt="Golden Harvest Seeds logo" />
                        <p class="eq-height">Powered by broad genetic diversity and exceptional traits and technologies, a diverse portfolio of hybrids and varieties helping farmers to grow a healthy, high-producing crop.</p>
                    </div>
                </div>
                <div class="col-xs-12 col-md-4">
                    <div class="seeds-single">
                        <img class="img-responsive" src="<%=ResolveUrl("~/images/seed-advisor/enogen-logo.png")%>" alt="Enogen Seeds Logo" />
                        <p class="eq-height">Enogen<sup>&reg;</sup> corn enzyme technology, an in-seed innovation that enhances ethanol production.</p>
                        <a class="btn-default" href="https://www.syngenta-us.com/corn/enogen" target="_blank">Learn More</a>
                    </div>
                </div>
                <div class="col-xs-12 col-md-4">
                    <div class="seeds-single">
                        <img class="img-responsive" src="<%=ResolveUrl("~/images/seed-advisor/enogenfeed-logo.png")%>" alt="Enogen Feed Seeds Logo" />
                        <p class="eq-height">Corn hybrids that help unlock the energy potential of grain or silage in livestock feed rations by converting starch to sugar more efficiently.</p>
                        <a class="btn-default" href="https://www.syngenta-us.com/corn/enogen-feed" target="_blank">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="row traits-cont">
                <div class="col-xs-12">
                    <h2>TECHNOLOGY AND TRAITS</h2>
                </div>
                <div class="col-xs-12 col-md-4">
                    <div class="seeds-single">
                        <img class="img-responsive" alt="Agrisure Artesian" src="<%=ResolveUrl("~/images/techtraits/artesian.png")%>" />
                        <p class="eq-height">Agrisure Artesian<sup>&reg;</sup> technology helps maximize yield when it rains and increase yield when it doesn’t.</p>
                        <a class="btn-default" href="https://www.syngenta-us.com/corn/agrisure/agrisure-artesian" target="_blank">Learn More</a>
                    </div>
                </div>
                <div class="col-xs-12 col-md-4">
                    <div class="seeds-single">
                        <img class="img-responsive" alt="Agrisure Duracade" src="<%=ResolveUrl("~/images/techtraits/duracade.png")%>" />
                        <p class="eq-height">Agrisure Duracade<sup>&reg;</sup> trait stacks offer the ultimate option for insect control, simplicity and choice.</p>
                        <a class="btn-default" href="https://www.syngenta-us.com/corn/agrisure/agrisure-duracade" target="_blank">Learn More</a>
                    </div>
                </div>
                <div class="col-xs-12 col-md-4">
                    <div class="seeds-single">
                        <img class="img-responsive" alt="Agrisure Viptera" src="<%=ResolveUrl("~/images/techtraits/viptera.png")%>" />
                        <p class="eq-height">The Agrisure Viptera<sup>&reg;</sup> trait offers more control of more above-ground insects for more yield.</p>
                        <a class="btn-default" href="https://www.syngenta-us.com/agrisure/agrisure-viptera.aspx" target="_blank">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="bsa-faqs" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-sm-push-2 content-top">
                    <h2 class="text-center">FAQs</h2>
                    <p>From planning and planting to growing and harvesting, Golden Harvest Seed Advisors have the distinct pleasure of spending their days helping farmers succeed. Having the in-depth knowledge of local growing conditions and access to data and product placement tools enables Golden Harvest Seed Advisors to work hand-in-hand with farmers to select and place the best hybrids and varieties for each of their fields.</p>
                    <p>Below are questions people ask when considering becoming a Golden Harvest Seed Advisor.</p>
                </div>
            </div>
            <div class="row bsa-qa">
                <div class="col-md-6">
                    <div class="bsa-qa-single">
                        <p class="single-q">Q: Can I afford to be in business on my own?</p>
                        <p class="single-a">A: Golden Harvest works hard to make sure that our independent Seed Advisors have the equipment and capital they need to build their business.</p>
                    </div>
                    <div class="bsa-qa-single">
                        <p class="single-q">Q: Do you provide Golden Harvest Seed Advisors with benefits?</p>
                        <p class="single-a">A: Golden Harvest Seed Advisors are not employees, but rather independent businesses selling Golden Harvest brand products. Thus, there are no employment benefits for Golden Harvest Seed Advisors.  However, we work closely with you to determine your revenue potential.</p>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="bsa-qa-single">
                        <p class="single-q">Q: What support systems do you provide Golden Harvest Seed Advisors?</p>
                        <p class="single-a">A: Golden Harvest has a complete support system for our Seed Advisors including: national, regional, local and online training. Additionally, we provide local sales and agronomy support as well as a customer service staff all dedicated to your success. With $3.9 million per day invested in world-class research and development, Golden Harvest Seed Advisors have access to the most comprehensive lineup and future pipeline of products and technologies to assist farmers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</asp:Content>


<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="server">
    <script type="text/javascript" src='<%=ResolveUrl("~/scripts/seedAdvisor-main.js")%>'></script>
    <script src='<%=ResolveUrl("~/sproutplayer/js/sprout-player.js")%>'></script>
     <script>
         //SET scroll position on jump links because menu position is fixed
         var shiftWindow = function () { scrollBy(0, -80) };
         if (location.hash) shiftWindow();
         window.addEventListener("hashchange", shiftWindow);


         if (location.hash) {
             var getScrollSection = location.hash;
             if ($(getScrollSection).length > 0) {
                 var scrlTop = $(getScrollSection).offset().top;
                 console.log(scrlTop);
             } else {
                 var scrlTop = $('a[name="' + getScrollSection.substr(1) + '"]').offset().top;
             }
             var scrlTopMore;
             if (location.hash == '#advisor-video') {
                 scrlTopMore = scrlTop - 170;
             }
             //else {
             //    scrlTopMore = scrlTop - 100;
             //}

             $('html, body').stop(true, true).delay(1500).animate({
                 scrollTop: scrlTopMore
             }, 500);

         }
</script>
</asp:Content>
