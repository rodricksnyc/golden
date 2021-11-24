<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ExperienceSites.ascx.cs" Inherits="Golden_Harvest.UserControls.ExperienceSites" %>
 <script src='<%=ResolveUrl("~/scripts/UserControls.js")%>'></script>
<div id="experienceSitesInfo" runat="server"></div>
<asp:Button ID="btnLoad" runat="server" Style="display: none" OnClick="btnLoad_Click" />
<asp:HiddenField ID="hdnvalue" runat="server" ClientIDMode="Static" />
