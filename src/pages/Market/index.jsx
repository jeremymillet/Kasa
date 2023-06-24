import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Collapse from "../../components/Collapse";
import CollapseEquipement from "../../components/CollapseEquipement";
import Tag from "../../components/Tag";
import Star from "../../components/Star";
import Carousel from "../../components/Carousel";
import "./Market.scss";

function Market({ logement }) {
  let params = useParams();
  const navigate = useNavigate();
  const accLogement = logement.filter((objet) => objet.id === params.id);
  useEffect(() => {
    if (accLogement.length === 0) {
      navigate("/*");
    }
  }, [accLogement]);

  return (
    <div>
      {accLogement.length === 0 ? null : (
        <div>
          <Header />
          <div className="page">
            <Carousel picture={accLogement[0].pictures} keys={"carousel"} />
            <div className="info-container">
              <div className="left">
                <div className="title-container">
                  <h1>{accLogement[0].title}</h1>
                  <h2>{accLogement[0].location}</h2>
                </div>
                <Tag
                  className="tag-container"
                  tags={accLogement[0].tags}
                  keys={"tags"}
                />
              </div>
              <div className="right">
                <div className="profil-container">
                  <p className="profil-name">{accLogement[0].host.name}</p>
                  <img
                    className="profil-picture"
                    src={accLogement[0].host.picture}
                    alt=""
                  />
                </div>
                <Star rating={accLogement[0].rating} />
              </div>
            </div>
            <div className="collapse-container">
              <Collapse
                className="market"
                collapseId={"description"}
                key={"description"}
                title={"Description"}
                description={accLogement[0].description}
              />
              <CollapseEquipement
                collapseId={"equipments"}
                key={"equipement"}
                title={"Equipements"}
                description={accLogement[0]}
              />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Market;
