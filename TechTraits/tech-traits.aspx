<%@ Page Title="Technology and Traits | Golden Harvest" Language="C#" MasterPageFile="~/Template/GoldenHarvest.Master" %>

<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="Server">
    <meta name="Description" content="Golden Harvest hybrids and varieties are designed using the latest traits and technology to help crops reach their full potential." />
    <style>
        .d-inline-block {
            display:inline-block !important;
        }
    </style>
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="mainBody" runat="Server">

    <section id="techtraits-hero">
        <div class="hero-holder" style="background-image: url('<%=ResolveUrl("~/images/techtraits/techtraits-hero.jpg")%>');"></div>
    </section>

    <section id="techtraits-intro" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="col-sm-8 col-sm-push-2">
                <h1 class="text-center">Industry-leading traits and technologies</h1>
                <p>Golden Harvest<sup>&reg;</sup> corn is engineered using the latest traits and technologies to overcome various production challenges and to allow you to maximize return on investment. The Agrisure<sup>&reg;</sup> traits portfolio offers exceptional insect control, water optimization and herbicide tolerance to protect genetic yield potential. Enogen<sup>&reg;</sup> corn hybrids help to enhance ethanol production, and Enogen Feed corn hybrids unlock the energy potential of your feedlot or dairy ration. With a Service 365 year-round commitment to doing whatever it takes to optimize yield potential, Golden Harvest provides the right traits and technologies for your field conditions and crop marketing and on-farm usage needs.</p>
            </div>
        </div>
    </section>

    <section id="techtraits-agrisure" class="grey has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <img class="img-responsive" alt="Agrisure Artesian" src="<%=ResolveUrl("~/images/techtraits/artesian.png")%>" />
                    <p class="eq-height">Agrisure Artesian<sup>&reg;</sup> technology maximizes yield when it rains and increases yield when it doesn’t. That’s because Artesian<sup>&trade;</sup> contains multiple genes for season-long drought protection, and is widely adapted across a variety of yield environments and soil types.</p>
                    <a href="https://www.syngenta-us.com/corn/agrisure/agrisure-artesian" target="_blank" class="btn-default">Learn More</a>
                </div>
                <div class="col-sm-4">
                    <img class="img-responsive" alt="Agrisure Duracade" src="<%=ResolveUrl("~/images/techtraits/duracade.png")%>" />
                    <%--<p class="eq-height">The Agrisure Duracade<sup>&reg;</sup> trait is an important tool in your corn rootworm management toolbox. Its unique mode of action controls corn rootworm differently than other traits on the market. Agrisure Duracade is always stacked with a second, proven mode of action for corn rootworm control, and is only available as an integrated refuge product for increased convenience.</p>--%>
                     <p class="eq-height">Agrisure Duracade<sup>&reg;</sup> trait stacks are the ultimate option for insect control, simplicity and choice. Offering above- and below-ground control of up to 16 yield-limiting insects, Agrisure Duracade trait stacks protect genetic yield potential of high-yielding hybrids while providing the convenience and simplicity of E-Z Refuge<sup>&reg;</sup>, a 5% in-bag refuge.</p>
                    <a href="https://www.syngenta-us.com/corn/agrisure/agrisure-duracade" target="_blank" class="btn-default">Learn More</a>
                </div>
                <div class="col-sm-4">
                    <img class="img-responsive" alt="Agrisure Viptera" src="<%=ResolveUrl("~/images/techtraits/viptera.png")%>" />
                    <p class="eq-height">By providing comprehensive control of above-ground insects, Agrisure Viptera<sup>&reg;</sup> leads to better crop stands and lower levels of disease. Through control of damaging insects, Agrisure Viptera reduces mold and mycotoxin production resulting in a higher-quality grain and peace of mind, whether your grain is for sale at an elevator or fed on farm.</p>
                    <a href="https://www.syngenta-us.com/agrisure/agrisure-viptera.aspx" target="_blank" class="btn-default">Learn More</a>
                </div>
            </div><br /><br />
            <div class="row">
                <div class="col-sm-6">                   
                    <img class="img-responsive pull-left" src="<%=ResolveUrl("~/images/techtraits/Enogen_RGB.png")%>" />                 
                    <p class="d-inline-block">Enogen corn hybrids feature the first biotech corn output trait designed specifically to enhance ethanol production. Enogen corn is rapidly gaining widespread acceptance because of the value it delivers to ethanol producers and the opportunity it provides corn growers to be enzyme suppliers for their local ethanol plants.</p>
                    <a href="https://www.syngenta-us.com/corn/enogen" target="_blank" class="btn-default">Learn More</a>                
             </div>
                <div class="col-sm-6">                  
                    <img class="img-responsive pull-left"  src="<%=ResolveUrl("~/images/techtraits/Enogen_Feed_RGB.png")%>" />                 
                     <p class="d-inline-block">Enogen Feed corn hybrids improve feed efficiency by unlocking the energy potential of your feedlot or dairy ration. Whether fed as grain or silage, Enogen Feed offers a step-change in starch digestibility and sugar availability that provides more available energy to feedlot or dairy cattle.</p>
                    <a href="https://www.syngenta-us.com/corn/enogen-feed" target="_blank" class="btn-default">Learn More</a>             
                </div>
            </div>
        </div>
    </section>
       

    <section id="techtraits-info" class="white has-arch">
        <div class="arch-element"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <img class="img-responsive" alt="Agrisure Traits Stewardship" src="<%=ResolveUrl("~/images/techtraits/stewardship.jpg")%>" />
                    <h2>Stewardship</h2>
                    <p class="eq-height">Before planting hybrids with Agrisure traits, farmers are required to sign a Stewardship Agreement. The agreement outlines the terms and conditions of growing hybrids with Agrisure traits, compliance with Environmental Protection Agency (EPA)-mandated insect resistance management programs and grain channeling requirements.</p>
                    <a href="https://www.syngenta-us.com/corn/agrisure/agrisure-stewardship" target="_blank" class="btn-default">Learn More</a>
                </div>
                <div class="col-sm-6">
                    <img class="img-responsive" alt="Seed treatment" src="<%=ResolveUrl("~/images/techtraits/seed-treatment.jpg")%>" />
                    <h2>Seed Treatment</h2>
                    <p class="eq-height">The Syngenta Seedcare portfolio offers advanced seed treatments that protect against yield-reducing seed- and soil-borne diseases, and early-season insects. By enhancing germination, seedling vigor and root systems from day one, your corn and soybeans are well-positioned for a higher yield advantage when you combine in the fall.</p>
                    <a href="https://www.syngenta-us.com/crop-protection/seed-treatment" target="_blank" class="btn-default">Learn More</a>
                </div>
            </div>
        </div>
    </section>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Additional" runat="Server">
</asp:Content>