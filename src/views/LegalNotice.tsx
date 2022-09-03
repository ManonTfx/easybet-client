import { useContext } from 'react';
import Footer from '../components/Homepage/Footer';
import Header from '../components/Homepage/Header';
import SignUp from '../components/Signup';
import { AuthContext } from '../context/authContext';
import LogIn from '../components/Login';

function LegalNotice(): JSX.Element {
  const { isSignUpModal, isLoginModal } = useContext(AuthContext);

  return (
    <div className="bg-[#0B1216] !text-white">
      {isSignUpModal && <SignUp />}
      {isLoginModal && <LogIn />}
      <div>
        <Header />
        <div className="lg:px-[40px] px-[10px]">
          <h1 className="text-center lg:text-[50px] text-[30px] lg:pt-20 pt-8 tracking-wide">
            Mentions légales
          </h1>
          <section className="text-center">
            <h2 className="text-[25px] mt-20 mb-5">
              Mentions légales site EasyBet
            </h2>
            <p>
              Le présent site web, accessible à partir de l’adresse URL
              www.easybet.site (ci-après le « Site ») est édité par Manon
              Tréfoux. Le Site est hébergé par : Heroku – The Landmark at One
              Market, Suite 300, San Francisco, CA 94105, United States.. et par
              Vercel : Vercel Inc. 340 S Lemon Ave #4133. Walnut, CA 91789.
            </p>
          </section>
          <section className="text-center">
            <h2 className="mt-10 mb-5 text-[25px]">
              Conditions générales d’utilisation
            </h2>
            <p>
              Les présentes conditions générales d’utilisation ont pour objet de
              définir les dispositions applicables à tout usager du présent Site
              et de ses services. Les conditions générales applicables sont
              celles en vigueur au jour de connexion au Site. EasyBet se réserve
              le droit de modifier, à tout moment et sans préavis, les présentes
              conditions générales. En utilisant et en parcourant le Site, en
              qualité d’utilisateur, vous acceptez de vous conformer aux
              présentes conditions d’utilisation que vous reconnaissez avoir
              lues, comprises et acceptées dans leur intégralité. Si vous
              refusez d’accepter ces conditions d’utilisation, nous vous
              remercions de ne pas parcourir le Site et de ne procéder à aucun
              téléchargement d’éléments y figurant.
            </p>
            <h3 className="text-[20px] underline mt-5 mb-2">
              Article 1 – Contenu du site
            </h3>
            <p>
              Tous les éléments constitutifs du présent Site (textes,
              photographies, illustrations, logo, icônes, etc.) sont la
              propriété exclusive de EasyBet et sont, protégés par la loi
              française et les textes internationaux relatifs à la propriété
              intellectuelle. Toute représentation et/ou reproduction et/ou
              exploitation partielle ou totale des contenus et services proposés
              par le présent Site, par quelque procédé que ce soit, sans
              l’autorisation préalable et par écrit de EasyBet est strictement
              interdite et serait susceptible de constituer une contrefaçon au
              sens de l’article L335-2 et suivants du Code de la propriété
              intellectuelle. Est notamment interdite la présentation d’une des
              pages du présent Site dans une page web n’appartenant pas à
              EasyBet. Les marques et autres logos figurant sur le site sont des
              marques déposées par la société EasyBet ou par des tiers. Toute
              reproduction, imitation ou usage, total ou partiel, de ces signes
              distinctifs sans l’autorisation expresse et en violation des
              interdictions prévues aux articles L713-2 et suivants du Code de
              la propriété intellectuelle engage la responsabilité de leur
              auteur. Les autres signes distinctifs, notamment les dénominations
              sociales, noms de domaine reproduits sur le Site sont la propriété
              de la société EasyBet ou de tiers. Toute reproduction sans
              autorisation expresse est susceptible de constituer une usurpation
              engageant la responsabilité de son auteur sur le fondement de
              l’article 1240 du Code civil. Par exception aux alinéas
              précédents, EasyBet autorise les utilisateurs à télécharger les
              lettres d’informations ou les autres documents, propriété de
              EasyBet qui sont mis à la disposition des utilisateurs sous forme
              de fichiers électroniques spécifiquement en vue de leur
              téléchargement. Dans ce cas, et sauf disposition contraire
              expresse reproduite sur chacun des documents susvisés,
              l’utilisateur sera autorisé à détenir une copie de ces documents,
              à les imprimer et à les partager sous réserve de ne pas apporter
              de modifications à ces derniers.
            </p>
            <h3 className="text-[20px] underline mt-5 mb-2">
              Article 2 – Gestion du site
            </h3>
            <p>
              Pour la bonne gestion du site, l’éditeur pourra à tout moment :
              suspendre, interrompre ou limiter l’accès à tout ou partie du
              Site, réserver l’accès au site, ou à certaines parties du site ;
              supprimer toute information pouvant en perturber le fonctionnement
              ou entrant en contravention avec les lois nationales ou
              internationales ; suspendre le site afin de procéder à des mises à
              jour. EasyBet se réserve également la possibilité de mettre en
              cause la responsabilité civile et/ou pénale de l’utilisateur,
              notamment en cas de message à caractère raciste, injurieux,
              diffamant, ou pornographique, quel que soit le support utilisé
              (texte, photographie, etc.).
            </p>
            <h3 className="text-[20px] underline mt-5 mb-2">
              Article 3 – Responsabilité
            </h3>
            <p>
              EasyBet s’engage à faire tout son possible afin que le Site soit
              accessible 24h/24 et 7j/7. Toutefois, EasyBet ne prend aucun
              engagement quant à la disponibilité et l’accessibilité permanente
              du Site. En effet, EasyBet pourrait être contraint d’interrompre
              temporairement l’accès au Site, notamment pour des besoins de
              maintenance technique, sans engager sa responsabilité de quelque
              manière que ce soit. EasyBet ne saurait garantir l’exactitude, la
              complétude, la précision, l’exhaustivité des informations, mises à
              disposition et diffusées sur le Site. Toutes les informations
              indiquées sur le Site sont données à titre indicatif et sont
              susceptibles d’évoluer. Par ailleurs, les renseignements figurant
              sur le site sont donnés sous réserve de modifications ayant été
              apportées depuis leur mise en ligne. Il est également précisé que
              le réseau Internet et les systèmes informatiques et de
              télécommunication ne sont pas exempts d’erreurs et que des
              interruptions et des dysfonctionnements sont susceptibles de
              survenir. EasyBet ne fournit aucune garantie à cet égard et ne
              saurait être tenu responsable de tout dommage résultant de
              l’utilisation du Site, du réseau Internet et des systèmes
              informatiques et de télécommunication. EasyBetne saurait être tenu
              responsable pour quelque dommage que ce soit provenant d’une
              connexion au présent Site que l’utilisateur effectue sous sa seule
              responsabilité. En tant qu’utilisateur du site, il vous appartient
              de prendre toutes les mesures appropriées de façon à protéger vos
              propres données et/ou logiciels de la contamination par
              d’éventuels virus circulant sur Internet.
            </p>
            <h3 className="text-[20px] underline mt-5 mb-2">
              Article 6 – Loi applicable
            </h3>
            <p>
              Le Site et les présentes conditions d’utilisation sont régis par
              la loi française et tout litige à leur sujet relèvera de la
              compétence exclusive des tribunaux de Paris.
            </p>
          </section>
          <section className="text-center">
            <h2 className="mt-10 mb-5 text-[25px]">
              Politique de protection des données à caractère personnel
            </h2>
            <p>
              EasyBet (ci-après « nous ») prend très au sérieux le respect de la
              vie privée et de la protection des Données à Caractère personnel.
              C’est la raison pour laquelle nous nous engageons, en tant que
              Responsable du Traitement, à mettre en œuvre des mesures adéquates
              pour assurer la protection, la confidentialité et la sécurité de
              vos Données à Caractère Personnel et à traiter et utiliser de
              telles Données dans le respect des dispositions applicables et
              notamment du Règlement Européen 2016/679 (dit « RGPD ») et la loi
              du 6 janvier 1978 dite loi Informatique et Libertés et toute loi
              ou règlement qui viendrait la compléter ou la substituer (ci-après
              ensemble de la « Réglementation Applicable »). La présente
              politique de protection des Données à Caractère Personnel a pour
              objectif de vous informer sur la manière dont nous traitons vos
              données à Caractère Personnel et sur les engagements pris par
              EasyBet afin de veiller au respect desdites Données.
            </p>
            <h3 className="text-[20px] underline mt-5 mb-2">
              1. Responsable de la collecte des Données à Caractère Personnel
            </h3>
            <p>
              Le responsable du traitement des données à caractère personnel est
              : Manon Tréfoux. Elle peut être contacté de la manière suivante :
              Par courrier postal : 22 rue de chanterac 13003 Marseille. Le
              responsable du traitement des données est chargé de déterminer les
              finalités et les moyens mis au service du traitement des données à
              caractère personnel.
            </p>
            <h3 className="text-[20px] underline mt-5 mb-2">
              2. Données collectées
            </h3>
            <p>
              Nous veillons à collecter et à traiter des Données à Caractère
              Personnel pertinentes, adéquates, non excessives et strictement
              nécessaires à l’atteinte des finalités qui ont été préalablement
              déterminées. Lors de votre inscription sur le Site, nous sommes
              amenés à collecter et traiter les Données à Caractère Personnel
              suivantes : - Les données vous concernant et de nature à vous
              identifier : votre nom, email, numéro de téléphone, adresse ; -
              Les informations que vous nous transmettez lorsque vous contactez
              notre service client : la nature de la réclamation et toutes
              informations nécessaires au traitement de votre demande ;
            </p>
            <h3 className="text-[20px] underline mt-5 mb-2">3. Sécurité</h3>
            <p>
              Nous, EasyBet, sommes résolument engagés à préserver la sécurité
              de vos données personnelles. Pour ce faire, nous avons conçu nos
              services en gardant à l’esprit votre sécurité. Nous avons adopté
              des mesures de sécurité techniques et organisationnelles
              spécifiques pour protéger les données contre la destruction
              accidentelle ou illicite, la perte ou l’altération, accidentelles,
              la divulgation non autorisée ou l’accès non autorisé.
            </p>
            <h3 className="text-[20px] underline mt-5 mb-2">
              4. Droits de l’utilisateur
            </h3>
            <p>
              Conformément à la Réglementation Applicable, vous disposez des
              droits suivants sur vos Données à Caractère Personnel :
            </p>
            <ol>
              <li>
                Le droit d’accès : vous avez le droit d&apos;obtenir (i) la
                confirmation que des Données à Caractère Personnel vous
                concernant sont ou ne sont pas traitées et, lorsqu&apos;elles le
                sont, d’obtenir (ii) l&apos;accès auxdites Données et une copie
                de ces dernières.
              </li>
              <li>
                Le droit de rectification : vous avez le droit d&apos;obtenir la
                rectification des Données à Caractère Personnel vous concernant
                qui sont inexactes. Vous avez également le droit d&apos;obtenir
                que les Données à Caractère Personnel incomplètes soient
                complétées.
              </li>
              <li>
                Le droit à l’effacement : dans certains cas, vous avez le droit
                d’obtenir l’effacement de vos Données à Caractère Personnel.
              </li>
              <li>
                Droit à la limitation du traitement : dans certains cas, vous
                avez le droit de limiter le traitement, par nous, de vos données
                personnelles.
              </li>
              <li>
                Le droit à la portabilité : vous avec le droit de recevoir les
                Données à Caractère Personnel vous concernant que vous avez
                fournies à EasyBet, dans un format structuré, couramment utilisé
                et lisible par machine, et vous avez le droit de transmettre ces
                Données à un autre Responsable du Traitement sans que EasyBet y
                fasse obstacle. Ce droit ne s’applique que lorsque le Traitement
                de vos Données à Caractère Personnel est fondé sur votre
                consentement ou sur l’exécution d’un contrat et que ledit
                Traitement est effectué à l&apos;aide de procédés automatisés.
              </li>
              <li>
                Le droit d’opposition : Vous avez le droit de vous opposer à
                tout moment, pour des raisons tenant à votre situation
                particulière, à un Traitement de Données à Caractère Personnel
                vous concernant lorsque ledit Traitement est basé sur l’intérêt
                légitime de EasyBet. EasyBet peut cependant invoquer des motifs
                légitimes et impérieux nécessitant la poursuite du Traitement.
              </li>
              <li>
                Le droit de déterminer le sort des données à caractère personnel
                après la mort : vous pouvez organiser le sort de vos données à
                caractère personnel collectées et traitées après votre mort.
              </li>
              <li>
                Droit de retirer votre consentement : lorsque le traitement de
                vos Données Personnelles est fondé sur votre consentement, vous
                avez le droit de retirer ce consentement à tout moment.
              </li>
            </ol>
          </section>
          <section className="text-center mt-10 ">
            <p>Pour exercer vos droits, vous pouvez adresser une demande :</p>
            <p className="text-center mt-2">
              Par courrier à : Manon Trefoux, 22 rue de chanterac 13003
              Marseille
            </p>
            <p>
              En cas de difficulté en lien avec la gestion des Données à
              Caractère Personnel, vous pouvez adresser une réclamation auprès
              de la CNIL (3 Place de Fontenoy, 75007 Paris) ou de toute autre
              autorité compétente. Nous vous invitons toutefois à nous contacter
              au préalable avant d’introduire une réclamation auprès de la CNIL.
            </p>
          </section>
        </div>
        <div className="border-b pt-16" />
        <Footer />
      </div>
    </div>
  );
}

export default LegalNotice;
