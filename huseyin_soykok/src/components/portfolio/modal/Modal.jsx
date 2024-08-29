import React from "react";
import img1 from "../../../assets/img/portfolio/project-1.jpg";
import img2 from "../../../assets/img/portfolio/project-2.jpg";
import img3 from "../../../assets/img/portfolio/project-3.jpg";
import img4 from "../../../assets/img/portfolio/project-4.jpg";
import img5 from "../../../assets/img/portfolio/project-5.jpg";
import img6 from "../../../assets/img/portfolio/project-6.jpg";
import img81 from "../../../assets/img/portfolio/project-8.1.jpg";
import img82 from "../../../assets/img/portfolio/project-8.2.jpg";
import img83 from "../../../assets/img/portfolio/project-8.3.jpg";
import img84 from "../../../assets/img/portfolio/project-8.4.jpg";
import img90 from "../../../assets/img/portfolio/project-9.0.jpg";
import img91 from "../../../assets/img/portfolio/project-9.1.jpg";
import img92 from "../../../assets/img/portfolio/project-9.2.jpg";
import img93 from "../../../assets/img/portfolio/project-9.3.jpg";
import img101 from "../../../assets/img/portfolio/project-10.1.jpg";
import img102 from "../../../assets/img/portfolio/project-10.2.jpg";


import CloseImg from "../../../assets/img/cancel.svg";
import PortfolioData from "../portfolioData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modal = ({ modalId, setGetModal }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

/*






  if (modalId === 1) {
    return (
      <div className="modal_portfolio ">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 2) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img videocontainer">
                  <iframe
                    src="https://www.youtube.com/embed/7e90gBu4pas"
                    title="YouTube video player"
                    className="youtube-video"
                    allowFullScreen
                  ></iframe>
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } 
  
*/ if (modalId === 1) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <Slider {...settings}>
                    <div>
                      <img src={item.image} alt="WIX" />
                    </div>
                    <div>
                      <img src={img5} alt="WIX" />
                    </div>
                    <div>
                      <img src={img6} alt="WIX" />
                    </div>
                  </Slider>
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="WIX" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
        }
   else if (modalId === 2) {
      return (
        <div className="modal_portfolio">
          <div
            className="modal__outside"
            onClick={() => setGetModal(false)}
          ></div>
          <div className="modal__content">
            {PortfolioData.filter((item) => item.id === modalId).map((item) => {
              //
              return (
                <div key={item.id} data-aos="fade">
                  <h2 className="heading mb-2">{item.type}</h2>
                  <div className="modal__details">
                    {item.modalDetails.map((details, i) => {
                      return (
                        <div key={i} className="row open-sans-font">
                          <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-file-text-o pr-2"></i>
                            Project:{" "}
                            <span className="ft-wt-600 uppercase">
                              {details.project}
                            </span>
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-user-o pr-2"></i>
                            Client :{" "}
                            <span className="ft-wt-600 uppercase">
                              {details.client}
                            </span>
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-code pr-2"></i>
                            Language :{" "}
                            <span className="ft-wt-600 uppercase">
                              {details.language}
                            </span>
                          </div>
                          <div className="col-12 col-sm-6 mb-2">
                            <i className="fa fa-external-link pr-2"></i>
                            Preview :{" "}
                            <a
                              className="preview-link"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              href={details.link}
                            >
                              {details.preview}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <figure className="modal__img">
                    <Slider {...settings}>
                      <div>
                        <img src={item.image} alt="WIX" />
                      </div>
                      <div>
                        <img src={img3} alt="WIX" />
                      </div>
                      <div>
                        <img src={img4} alt="WIX" />
                      </div>
                    </Slider>
                  </figure>
  
                  <button
                    className="close-modal"
                    onClick={() => setGetModal(false)}
                  >
                    <img src={CloseImg} alt="WIX" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      );
         
    }
      else if (modalId === 3) {
            return (
              <div className="modal_portfolio">
                <div
                  className="modal__outside"
                  onClick={() => setGetModal(false)}
                ></div>
                <div className="modal__content">
                  {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                    //
                    return (
                      <div key={item.id} data-aos="fade">
                        <h2 className="heading mb-2">{item.type}</h2>
                        <div className="modal__details">
                          {item.modalDetails.map((details, i) => {
                            return (
                              <div key={i} className="row open-sans-font">
                                <div className="col-12 col-sm-6 mb-2">
                                  <i className="fa fa-file-text-o pr-2"></i>
                                  Project:{" "}
                                  <span className="ft-wt-600 uppercase">
                                    {details.project}
                                  </span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                  <i className="fa fa-user-o pr-2"></i>
                                  Client :{" "}
                                  <span className="ft-wt-600 uppercase">
                                    {details.client}
                                  </span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                  <i className="fa fa-code pr-2"></i>
                                  Language :{" "}
                                  <span className="ft-wt-600 uppercase">
                                    {details.language}
                                  </span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                  <i className="fa fa-external-link pr-2"></i>
                                  Preview :{" "}
                                  <a
                                    className="preview-link"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    href={details.link}
                                  >
                                    {details.preview}
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <figure className="modal__img">
                          <Slider {...settings}>
                            <div>
                              <img src={item.image} alt="WIX" />
                            </div>
                            <div>
                              <img src={img1} alt="WIX" />
                            </div>
                            <div>
                              <img src={img2} alt="WIX" />
                            </div>
                          </Slider>
                        </figure>
        
                        <button
                          className="close-modal"
                          onClick={() => setGetModal(false)}
                        >
                          <img src={CloseImg} alt="WIX" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );

                 } else if (modalId === 4) {
              return (
                <div className="modal_portfolio">
                  <div
                    className="modal__outside"
                    onClick={() => setGetModal(false)}
                  ></div>
                  <div className="modal__content">
                    {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                      //
                      return (
                        <div key={item.id} data-aos="fade">
                          <h2 className="heading mb-2">{item.type}</h2>
                          <div className="modal__details">
                            {item.modalDetails.map((details, i) => {
                              return (
                                <div key={i} className="row open-sans-font">
                                  <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i>
                                    Project:{" "}
                                    <span className="ft-wt-600 uppercase">
                                      {details.project}
                                    </span>
                                  </div>
                                  <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i>
                                    Client :{" "}
                                    <span className="ft-wt-600 uppercase">
                                      {details.client}
                                    </span>
                                  </div>
                                  <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-code pr-2"></i>
                                    Language :{" "}
                                    <span className="ft-wt-600 uppercase">
                                      {details.language}
                                    </span>
                                  </div>
                                  <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i>
                                    Preview :{" "}
                                    <a
                                      className="preview-link"
                                      target="_blank"
                                      rel="noopener noreferrer nofollow"
                                      href={details.link}
                                    >
                                      {details.preview}
                                    </a>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <figure className="modal__img">
                            <Slider {...settings}>
                              <div>
                                <img src={item.image} alt="Blockchain Wallet Demo" />
                              </div>
                              <div>
                                <img src={img81} alt="Blockchain Wallet Demo" />
                              </div>
                              <div>
                                <img src={img82} alt="Blockchain Wallet Demo" />
                              </div>
                              <div>
                                <img src={img83} alt="Blockchain Wallet Demo" />
                              </div>
                              <div>
                                <img src={img84} alt="Blockchain Wallet Demo" />
                              </div>
                            </Slider>
                          </figure>
          
                          <button
                            className="close-modal"
                            onClick={() => setGetModal(false)}
                          >
                            <img src={CloseImg} alt="Blockchain Wallet Demo" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );


            }
             else if (modalId === 5) {
              return (
                <div className="modal_portfolio">
                  <div
                    className="modal__outside"
                    onClick={() => setGetModal(false)}
                  ></div>
                  <div className="modal__content">
                    {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                      //
                      return (
                        <div key={item.id} data-aos="fade">
                          <h2 className="heading mb-2">{item.type}</h2>
                          <div className="modal__details">
                            {item.modalDetails.map((details, i) => {
                              return (
                                <div key={i} className="row open-sans-font">
                                  <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i>
                                    Project:{" "}
                                    <span className="ft-wt-600 uppercase">
                                      {details.project}
                                    </span>
                                  </div>
                                  <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i>
                                    Client :{" "}
                                    <span className="ft-wt-600 uppercase">
                                      {details.client}
                                    </span>
                                  </div>
                                  <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-code pr-2"></i>
                                    Language :{" "}
                                    <span className="ft-wt-600 uppercase">
                                      {details.language}
                                    </span>
                                  </div>
                                  <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i>
                                    Preview :{" "}
                                    <a
                                      className="preview-link"
                                      target="_blank"
                                      rel="noopener noreferrer nofollow"
                                      href={details.link}
                                    >
                                      {details.preview}
                                    </a>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <figure className="modal__img">
                            <Slider {...settings}>
                              <div>
                                <img src={item.image} alt="Incubaby (IB01) Design of controller for a premature infant" />
                              </div>
                              <div>
                                <img src={img90} alt="Incubaby (IB01) Design of controller for a premature infant" />
                              </div>
                              <div>
                                <img src={img91} alt="Incubaby (IB01) Design of controller for a premature infant" />
                              </div>
                              <div>
                                <img src={img92} alt="Incubaby (IB01) Design of controller for a premature infant" />
                              </div>
                              <div>
                                <img src={img93} alt="Incubaby (IB01) Design of controller for a premature infant" />
                              </div>
                            </Slider>
                          </figure>
          
                          <button
                            className="close-modal"
                            onClick={() => setGetModal(false)}
                          >
                            <img src={CloseImg} alt="Incubaby (IB01) Design of controller for a premature infant" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );

                    }  else if (modalId === 6) {
                return (
                  <div className="modal_portfolio">
                    <div
                      className="modal__outside"
                      onClick={() => setGetModal(false)}
                    ></div>
                    <div className="modal__content">
                      {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                        //
                        return (
                          <div key={item.id} data-aos="fade">
                            <h2 className="heading mb-2">{item.type}</h2>
                            <div className="modal__details">
                              {item.modalDetails.map((details, i) => {
                                return (
                                  <div key={i} className="row open-sans-font">
                                    <div className="col-12 col-sm-6 mb-2">
                                      <i className="fa fa-file-text-o pr-2"></i>
                                      Project:{" "}
                                      <span className="ft-wt-600 uppercase">
                                        {details.project}
                                      </span>
                                    </div>
                                    <div className="col-12 col-sm-6 mb-2">
                                      <i className="fa fa-user-o pr-2"></i>
                                      Client :{" "}
                                      <span className="ft-wt-600 uppercase">
                                        {details.client}
                                      </span>
                                    </div>
                                    <div className="col-12 col-sm-6 mb-2">
                                      <i className="fa fa-code pr-2"></i>
                                      Language :{" "}
                                      <span className="ft-wt-600 uppercase">
                                        {details.language}
                                      </span>
                                    </div>
                                    <div className="col-12 col-sm-6 mb-2">
                                      <i className="fa fa-external-link pr-2"></i>
                                      Preview :{" "}
                                      <a
                                        className="preview-link"
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        href={details.link}
                                      >
                                        {details.preview}
                                      </a>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <figure className="modal__img">
                              <Slider {...settings}>
                                <div>
                                  <img src={item.image} alt="Sponsorship Program Web Application" />
                                </div>
                                <div>
                                  <img src={img101} alt="Sponsorship Program Web Application" />
                                </div>
                                <div>
                                  <img src={img102} alt="Sponsorship Program Web Application" />
                                </div>
                              </Slider>
                            </figure>
            
                            <button
                              className="close-modal"
                              onClick={() => setGetModal(false)}
                            >
                              <img src={CloseImg} alt="portfolio project demo" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );


                    } else if (modalId === 7) {
                  return (
                    <div className="modal_portfolio ">
                      <div
                        className="modal__outside"
                        onClick={() => setGetModal(false)}
                      ></div>
                      <div></div>
                      <div className="modal__content">
                        {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                          return (
                            <div key={item.id} data-aos="fade">
                              <h2 className="heading mb-2">{item.type}</h2>
                              <div className="modal__details">
                                {item.modalDetails.map((details, i) => {
                                  return (
                                    <div key={i} className="row open-sans-font">
                                      <div className="col-12 col-sm-6 mb-2">
                                        <i className="fa fa-file-text-o pr-2"></i>
                                        Project:{" "}
                                        <span className="ft-wt-600 uppercase">
                                          {details.project}
                                        </span>
                                      </div>
                                      <div className="col-12 col-sm-6 mb-2">
                                        <i className="fa fa-user-o pr-2"></i>
                                        Client :{" "}
                                        <span className="ft-wt-600 uppercase">
                                          {details.client}
                                        </span>
                                      </div>
                                      <div className="col-12 col-sm-6 mb-2">
                                        <i className="fa fa-code pr-2"></i>
                                        Language :{" "}
                                        <span className="ft-wt-600 uppercase">
                                          {details.language}
                                        </span>
                                      </div>
                                      <div className="col-12 col-sm-6 mb-2">
                                        <i className="fa fa-external-link pr-2"></i>
                                        Preview :{" "}
                                        <a
                                          className="preview-link"
                                          target="_blank"
                                          rel="noopener noreferrer nofollow"
                                          href={details.link}
                                        >
                                          {details.preview}
                                        </a>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              <figure className="modal__img">
                                <img src={item.image} alt="QR Based Entry-Exit System" />
                              </figure>
              
                              <button
                                className="close-modal"
                                onClick={() => setGetModal(false)}
                              >
                                <img src={CloseImg} alt="QR Based Entry-Exit System" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );


      }
      


/*  } else if (modalId === 4) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                 /*  {<img src={item.image} alt="portfolio project demo" /> }*/
/*                  <video
                    id="video"
                    className="responsive-video"
                    controls
                    poster={item.image}
                  >
                    <source src={portfolioVideo} type="video/mp4" />
                   /* { <source src="img/" type="video/mp4" /> } */
/*                  </video>
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 5) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 6) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 7) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 8) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (modalId === 9) {
    return (
      <div className="modal_portfolio">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            //
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-file-text-o pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-user-o pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
*/ }
export default Modal;
