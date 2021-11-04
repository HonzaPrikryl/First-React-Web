import React from "react";
import styled from "styled-components";
import $ from "jquery";

const MenuBar = styled.div`
  height: 100%;
  grid-area: left;
  display: grid;
  place-items: center;
`;

function LeftSection() {
  $(window).on("scroll", function () {
    var link = $("a");
    var top = $(window).scrollTop();

    $(".section").each(function () {
      var id = $(this).attr("id");
      var height = $(this).height();
      var offset = $(this).offset().top - 200;
      if (top >= offset && top < offset + height) {
        link.removeClass("active");
        $(".navbar")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  });

  return (
    <MenuBar>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home" className="dot active" data-scroll="home">
              <span>home</span>
            </a>
          </li>

          <li>
            <a href="#about" className="dot" data-scroll="about">
              <span>about</span>
            </a>
          </li>

          <li>
            <a href="#reference" className="dot" data-scroll="reference">
              <span>reference</span>
            </a>
          </li>

          <li>
            <a href="#contact" className="dot" data-scroll="contact">
              <span>contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </MenuBar>
  );
}
export default LeftSection;
