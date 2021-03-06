import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Navbar2 from "./Navbar2";
const { GOOGLE_API_KEY } = require("../config");

export default props => {
  return (
    <div>
      {process.browser ? (
        window.chrome !== null &&
        typeof window.chrome !== "undefined" &&
        window.navigator.vendor === "Google Inc." &&
        window.navigator.userAgent.indexOf("OPR") > -1 === false &&
        window.navigator.userAgent.indexOf("Edge") > -1 === false ? (
          ""
        ) : (
          <div
            style={{
              height: "30px",
              backgroundColor: "#f7d4d4",
              color: "firebrick",
              textAlign: "center",
              paddingTop: "5px",
              fontSize: "16px"
            }}
          >
            We're sorry, Baldy is only available for use on Chrome browsers at
            this time.
          </div>
        )
      ) : (
        ""
      )}
      <Navbar2 />
      <Container
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "40px",
          minHeight: "100vh",
          height: "100%"
        }}
      >
        <Head>
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.9/js/all.js"
            integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
        </Head>
        {/* Background genereated by https://www.svgbackgrounds.com/ */}
        <style jsx global>{`
          body {
            background-color: rgb(255, 255, 255);
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  width='90' height='90' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='1' fill='%230c8346'  cx='45' cy='45' r='10'/%3E%3Cg fill='%238fd5a6'  fill-opacity='1'%3E%3Ccircle  cx='0' cy='90' r='10'/%3E%3Ccircle  cx='90' cy='90' r='10'/%3E%3Ccircle  cx='90' cy='0' r='10'/%3E%3Ccircle  cx='0' cy='0' r='10'/%3E%3C/g%3E%3C/svg%3E");
            background-attachment: scroll;
            background-size: auto;
            color: #329f5b;
            font-family: "Arimo", sans-serif;
          }
          body * {
            font-family: "Arimo", sans-serif;
          }
        `}</style>
        {props.children}
      </Container>
    </div>
  );
};
