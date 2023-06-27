import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Collapse from "../../components/Collapse";
import Tag from "../../components/Tag";
import Star from "../../components/Star";
import Carousel from "../../components/Carousel";
import "./Market.scss";

function Market({ logement }) {
  const params = useParams();
  const navigate = useNavigate();
  const currentLodging = logement.filter((Lodging) => Lodging.id === params.id);
  useEffect(() => {
    if (currentLodging.length === 0) {
      navigate("/*");
    }
  },);

  return (
    <div>
      {currentLodging.length === 0 ? null : (
        <div>
          <Header />
          <main className="page-containe">
            <Carousel picture={currentLodging[0].pictures} keys={"carousel"} />
            <section className="info-container">
              <section className="left">
                <div className="title-container">
                  <h1>{currentLodging[0].title}</h1>
                  <h2>{currentLodging[0].location}</h2>
                </div>
                <Tag
                  className="tag-container"
                  tags={currentLodging[0].tags}
                  keys={"tags"}
                />
              </section>
              <section className="right">
                <div className="profil-container">
                  <p className="profil-name">{currentLodging[0].host.name}</p>
                  <img
                    className="profil-picture"
                    src={currentLodging[0].host.picture}
                    alt=""
                  />
                </div>
                <Star rating={currentLodging[0].rating} />
              </section>
            </section>
            <section className="collapse-container">
              <Collapse
                className="market"
                collapseId={"description"}
                key={"description"}
                title={"Description"}
                description={currentLodging[0].description}
              />
              <Collapse
                collapseId={"equipments"}
                key={"equipement"}
                title={"Equipements"}
                description={currentLodging[0]}
              />
            </section>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Market;
