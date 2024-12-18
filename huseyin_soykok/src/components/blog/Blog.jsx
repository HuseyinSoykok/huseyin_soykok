import React from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import UseData from "../../Hooks/UseData";

Modal.setAppElement("#root");

const Blog = () => {
  const { singleData, isOpen, setIsOpen, blogsData, handleBlogsData } = UseData();

  const handleModel = (id) => {
    handleBlogsData(id);
  };

  return (
    <>
      <div className="row">
        {blogsData.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
            <article className="post-container" onClick={() => handleModel(item?.id)}>
              <div className="post-thumb">
                <div className="d-block position-relative overflow-hidden">
                  <img src={item?.img} className="img-fluid" alt={item?.title} />
                </div>
              </div>
              {/* End .thumb */}
              <div className="post-content">
                <div className="entry-header">
                  <h3>{item?.title}</h3>
                </div>
                <div className="entry-content open-sans-font">
                  <p>
                    {item?.sections?.find((section) => section.sectionTitle === "Software Engineering")?.content?.slice(0, 100)}
                  </p>
                </div>
              </div>
              {/* End .post-content */}
            </article>

            {/* Start ModalOneBlogContent */}
            <Modal
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
              contentLabel="My dialog"
              className="custom-modal dark"
              overlayClassName="custom-overlay dark"
              closeTimeoutMS={500}
            >
              <div>
                <button className="close-modal" onClick={() => setIsOpen(false)}>
                  <img src={cancelImg} alt="close icon" />
                </button>
                {/* End close icon */}

                <div className="box_inner blog-post">
                  {/* Article Starts */}
                  <article>
                    <div className="title-section text-left text-sm-center">
                      <h1>
                        Post <span>Details</span>
                      </h1>
                      <span className="title-bg">posts</span>
                    </div>
                    {/* Meta Starts */}
                    <div className="meta open-sans-font">
                      <span>
                        <i className="fa fa-user"></i> {singleData.commentor}
                      </span>
                      <span className="date">
                        <i className="fa fa-calendar"></i> {singleData.date}
                      </span>
                      <span>
                        <i className="fa fa-tags"></i> {singleData.tag}
                      </span>
                    </div>
                    {/* Meta Ends */}
                    {/* Article Content Starts */}
                    <h1>{singleData?.title}</h1>
                    <img src={singleData?.img} className="img-fluid" alt={singleData?.title} />
                    <div className="blog-excerpt open-sans-font pb-5">
                      {singleData?.sections?.map((section, index) => (
                        <div key={index}>
                          <h2 style={{ color: "#4169e1", textAlign: 'left' }}>{section.sectionTitle}</h2>
                          <p>{section.content}</p>
                          {section.additionalContent &&
                            section.additionalContent.map((additional, i) => (
                              <p key={i}>{additional}</p>
                            ))}
                        </div>
                      ))}
                    </div>
                    {/* Article Content Ends */}
                  </article>
                  {/* Article Ends */}
                </div>
              </div>
            </Modal>
            {/* End  ModalOneBlogContent */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
