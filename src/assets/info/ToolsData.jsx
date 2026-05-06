import React from 'react';
import { 
  Cloud, BarChart, Code, Hub, Security, SettingsSuggest, AdminPanelSettings 
} from '@mui/icons-material';
import PaymentsIcon from '@mui/icons-material/Payments';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const toolsData = [
    {
      title: "Salesforce",
      desc: "Primary CRM for managing customer relationships, leads, and sales pipelines.",
      link: "https://koblesystems.lightning.force.com/lightning/page/home",
      icon: <Hub sx={{ color: '#00a1e0' }} />, 
      tag: "CRM"
    },
    {
      title: "Landis",
      desc: "Cloud dashboard for managing communication systems and Landis app workflows.",
      link: "https://cc.landis.cloud/app/main/dashboard",
      icon: <Cloud sx={{ color: '#0078d4' }} />,
      tag: "Cloud Ops"
    },
    {
      title: "Passportal",
      desc: "Secure credential management and documentation vault for storing and sharing sensitive system passwords.",
      link: "https://us-clover.passportalmsp.com/dashboard#/default",
      icon: <LockPersonIcon sx={{ color: '#00c853' }} />, 
      tag: "Security"
    },
    {
      title: "Fizzy",
      desc: "Project management and task tracking for specific account workflows.",
      link: "https://app.fizzy.do/6102307/",
      icon: <BarChart sx={{ color: '#e4405f' }} />,
      tag: "PM Tool"
    },
    {
      title: "Fizzibility",
      desc: "Specialized application for visibility and data analytics.",
      link: "https://nice-dune-01849980f.7.azurestaticapps.net/",
      icon: <SettingsSuggest sx={{ color: '#0078d4' }} />,
      tag: "Analytics"
    },
    {
      title: "API Monitor",
      desc: "Real-time monitoring for client environment and API health.",
      link: "https://canary.koblesystems.dev/dashboard",
      icon: <Code sx={{ color: '#38b2ac' }} />,
      tag: "DevOps"
    },
    {
      title: "CloudFlare",
      desc: "Network security and connector management for the Koble infrastructure.",
      link: "https://dash.cloudflare.com/ece11a7c891e7956b6188b74460d5ec3/one/networks/connectors",
      icon: <Security sx={{ color: '#f38020' }} />, 
      tag: "Security"
    },
    {
      title: "Koble Payments Portal",
      desc: "User-facing dashboard for managing transactions, payment methods, and account billing history.",
      link: "https://paymentsportal.koblesystems.com/login?last=%2Fdashboard",
      icon: <PaymentsIcon sx={{ color: '#2e7d32' }} />, 
      tag: "Payments"
    },
    {
      title: "Koble Payments Admin Console",
      desc: "Backend administrative interface for managing client payment accounts and processing configurations.",
      link: "https://webpay.koblesystems.com/ClientAdmin/login",
      icon: <AdminPanelSettings sx={{ color: '#1f3a30' }} />, 
      tag: "Admin"
    },
    {
      title: "Verifone Portal (Internal)",
      desc: "Corporate-level gateway for managing Verifone hardware, encryption keys, and internal device deployments.",
      link: "https://corporateportal.vfipayna.com/",
      icon: <VpnKeyIcon sx={{ color: '#0078d4' }} />,
      tag: "Gateway"
    },
    {
      title: "Verifone Portal (Client)",
      desc: "Client-side access for merchants to manage their specific Verifone hardware and storefront transaction data.",
      link: "https://storeportal.vfipayna.com/",
      icon: <StorefrontIcon sx={{ color: '#9c27b0' }} />, 
      tag: "Merchant"
    },
    {
      title: "Verifone Web Pay Admin",
      desc: "Administrative portal for managing legacy Web Pay integrations and client-specific transaction settings.",
      link: "https://webpay.eaglebusinesssoftware.com/clientadmin/login",
      icon: <PointOfSaleIcon sx={{ color: '#f38020' }} />, 
      tag: "Processing"
    },
    {
      title: "Azure Repo",
      desc: "Version control and source code management for EBMS-2XX development.",
      link: "https://dev.azure.com/koblesystems/ebms-2XX/_versionControl",
      icon: <Code sx={{ color: '#0078d4' }} />,
      tag: "Development"
    },
    {
      title: "Expensify",
      desc: "Platform for managing corporate expenses, receipt tracking, and employee reimbursements.",
      link: "https://www.expensify.com/",
      icon: <ReceiptLongIcon sx={{ color: '#ff5c4b' }} />, 
      tag: "Finance"
    },
    {
      title: "Payrix",
      desc: "Merchant portal (Worldpay for Platforms) for managing payment processing and platform-level transactions.",
      link: "https://portal.worldpayforplatforms.com/Login.aspx",
      icon: <AccountBalanceIcon sx={{ color: '#004a99' }} />, 
      tag: "Payments"
    },
    {
      title: "Plaid",
      desc: "API infrastructure for connecting bank accounts to EBMS and Koble financial services.",
      link: "https://plaid.com/",
      icon: <SettingsInputComponentIcon sx={{ color: '#000000' }} />, 
      tag: "Integration"
    },
    {
      title: "SightStream",
      desc: "Worldpay visibility tool for monitoring transaction health and payment data streams.",
      link: "https://sightstream.worldpay.com/login",
      icon: <VisibilityIcon sx={{ color: '#00bfa5' }} />, 
      tag: "Monitoring"
    },
    {
      title: "Verifone Jira",
      desc: "Dedicated Verifone service desk for logging hardware tickets and technical support requests.",
      link: "https://jiraservicedesk.verifone.com/servicedesk/customer/portal/1",
      icon: <SupportAgentIcon sx={{ color: '#2684ff' }} />, 
      tag: "Support"
    },
    {
      title: "EBMS Upgrade History",
      desc: "Analytical dashboard tracking version deployments, upgrade timelines, and legacy software distribution across the client base.",
      link: "https://app.powerbi.com/groups/cda17dd6-822b-496b-a377-83d5508914cb/reports/aaf9b750-0d4b-4df2-95ea-ee789b23ff84/ReportSection8e52ec0a711e6f373862?experience=power-bi",
      icon: <AssessmentIcon sx={{ color: '#f2c811' }} />, 
      tag: "Analytics"
    }
];