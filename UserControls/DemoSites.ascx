<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="DemoSites.ascx.cs" Inherits="Golden_Harvest.User_Controls.DemoSites" %>

<script src='<%=ResolveUrl("~/scripts/UserControls.js")%>'></script>
<div id="demodays" class="row">
    <div class="col-xs-12 col-sm-6">
        <div class="sq-reveal-ele clearfix">
            <div class="sre-img-cont grow">
                <div class="sre-img-controller">
                    <img src="images/global/corner-grey.jpg" class="corner" alt="corner reveal">
                    <a href="/agronomy-in-action/all-sites">
                        <img class="img-responsive" src="images/home/demo-days.jpg" alt="learn more about Demonstration days"></a>
                </div>

            </div>
        </div>
    </div>
    <div class="col-xs-12 col-sm-6">
        <p>You spend a lot of time researching seed to ensure you’ll have a successful season, but seeing is believing. When you visit one of our Golden Harvest Agronomy in Action sites, you get a first-hand look at the hybrids or varieties you have or are considering planting, and can talk with local representatives and agronomists about the best seed options and management practices for your soil and environment.</p>
        <a href="/agronomy-in-action/all-sites" class="btn-secondary">View All Sites</a>
    </div>
</div>

<asp:Button ID="btnLoad" runat="server" Style="display: none" OnClick="btnLoad_Click" />
<asp:HiddenField ID="hdnvalue" runat="server" ClientIDMode="Static" />
