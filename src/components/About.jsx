import React from "react";
import { motion } from "framer-motion";
// import profileImg from "../assets/profile.avif";
import { aboutInfo } from "../assets/assets";
import { div } from "framer-motion/client";
import profileImg from "../assets/profile02.jpeg";
import presentation from "./presentation";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ onece: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          A propos
          <span className="text-purple"> de moi</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          En savoir plus sur mon parcours et ma passion
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* image  */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ onece: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={profileImg}
              alt="Mon profil"
            />
          </div>
          {/* texte  */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ onece: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Mon profil</h3>
              <p className=" text-gray-300 mb-6">
                Titulaire d’une Licence en Génie Logiciel (niveau Master 2) à
                HEC Abidjan, je suis un professionnel rigoureux, autonome et
                motivé, avec une réelle passion pour le développement logiciel.
                J’ai démarré ma carrière par un stage de 6 mois à Risque
                Informatique, où j’ai acquis une expérience pratique en
                installation, maintenance, assistance technique et organisation
                de systèmes informatiques.
              </p>
              <p className=" text-gray-300 mb-6">
                De 2018 à 2024, j’ai occupé le poste de Correspondant Fichier à
                l’Institut Technique Secondaire Professionnel et Technique. J’y
                ai géré : la base de données des élèves, l’archivage numérique,
                la mise à jour des dossiers, la préparation de documents
                administratifs, ainsi que le support informatique quotidien.
                Cette mission m’a permis de développer une grande rigueur, une
                organisation solide et une maîtrise avancée de la manipulation
                de données sensibles.
              </p>
              <p className=" text-gray-300 mb-6">
                En 2024–2025, j’ai intégré la formation intensive we.code by
                EPITECH, où j’ai réalisé plus de 28 projets en développement web
                et mobile (HTML, CSS, JavaScript, PHP, Laravel, SQL, Vue.js,
                Python, React, Next.js, Nest.js…).
              </p>
              <p className=" text-gray-300 mb-6">
                Au-delà du technique, j’y ai acquis de fortes compétences en :
                leadership, gestion de projet, communication professionnelle,
                travail en équipe, prise de décision, présentation et soutenance
                de projets. J’ai été chef de projet à deux reprises, où j’ai
                coordonné des équipes, réparti les tâches, géré les délais et
                présenté les projets finaux.
              </p>
              <p className="text-gray-300 mb-12"></p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Image plus le journal  */}
    </motion.div>
  );
};

export default About;
