import webService from "../assets/imags/frontend.jfif";
import uiux from "../assets/imags/Ui-Ux.jfif";
import mobileService from "../assets/imags/mobile-app.jfif";
import backendService from "../assets/imags/backend.jfif";

const services = [
    {
        id: "web",
        title: "WEB DEVELOPMENT",
        highlight: "WEBSITES",
        description:
            "We build modern, responsive websites that turn ideas into powerful digital experiences and help businesses grow.",
        image: webService,
        button: "Start Your Project",
        tag: "WEB DEVELOPMENT",
        color: "electric",
    },

    {
        id: "uiux",
        title: "UI/UX DESIGN",
        highlight: "EXPERIENCES",
        description:
            "We design intuitive and memorable interfaces that connect your brand with your audience through meaningful experiences.",
        image: uiux,
        button: "Design With Us",
        tag: "UI / UX DESIGN",
        color: "orchid",
    },

    {
        id: "mobile",
        title: "MOBILE DEVELOPMENT",
        highlight: "APPLICATIONS",
        description:
            "We create fast, intuitive mobile applications designed to deliver smooth experiences across every device.",
        image: mobileService,
        button: "Build Your App",
        tag: "MOBILE DEVELOPMENT",
        color: "magenta",
    },

    {
        id: "backend",
        title: "BACKEND DEVELOPMENT",
        highlight: "SYSTEMS",
        description:
            "We build secure and scalable backend systems that keep your applications fast, reliable, and ready to grow.",
        image: backendService,
        button: "Build Your System",
        tag: "BACKEND DEVELOPMENT",
        color: "electric",
    },
];

export default services;
