import { PageContentWrapper } from "@/components/Layout/Wrappers/PageContentWrapper";

export const metadata = {
  title: "Disclaimer",
};

const DisclaimerPage = () => {
  return (
    <PageContentWrapper>
      <h1 className="text-3xl font-semibold text-center my-16">Disclaimer</h1>
      <div className="flex flex-col gap-y-4 text-justify">
        <p>
          This website of the StoneBlock Scanner was created for the research
          and analysis purpose. StoneBlock Scanner does not provide any
          investment advice or recommendation. As a platform exclusively for
          research and analysis, this website also contains links to the
          websites of third parties whose content StoneBlock cannot control. We
          emphasise expressly that the StoneBlock does not assume any
          responsibility for these websites and the content contained therein.
          The posting of links on the website of the StoneBlock Scanner is only
          a service which should offer the user of this website a summary
          overview, research and analysis. The StoneBlock Scanner does not
          recommend investments of any kind to anyone. StoneBlock scanner does
          not give any investment advices of any kind to anyone. The content of
          other websites to which the StoneBlock Scanner merely links cannot be
          held liable, since those websites are not under the control of the
          StoneBlock Scanner. Access to the content of external websites is
          therefore at its own risk and responsibility. The content of other
          websites to which the StoneBlock Scanner merely links cannot be held
          liable, since those websites are not under the control of the
          StoneBlock Scanner. If there is a link to a website containing illegal
          or immoral content, the StoneBlock Scanner shall request an e-mail
          notification on the info@stoneblock.hr. The StoneBlock Scanner will
          immediately remove this link.
        </p>
        <p>
          Each user explicitly accepts that the website may also contain content
          for which the Contracting Parties to the StoneBlock Scanner are solely
          responsible. The StoneBlock Scanner does not have the ability to
          control this content, much like the public library or the newsstand
          does. Any information, any opinion, any advice, any statement, any
          service, any offer, etc., expressed in these contents shall be the
          sole responsibility of the Contracting Party concerned, not the
          StoneBlock Scanner. Under no circumstances is the StoneBlock Scanner
          responsible for those communications. The StoneBlock Scanner shall not
          make any promises or assurances relating to these communications and
          shall not take responsibility for any damage caused to them.
        </p>
        <p>
          If users notice that a link refers to legally problematic content,
          please inform the StoneBlock Scanner of the link in question by e-mail
          to info@stoneblock.hr so that we can remove it as quickly as possible
          if necessary.
        </p>
        <p>
          The StoneBlock Scanner regularly checks and updates all the
          information it makes available on its website. However, changes may
          have taken place in the meantime that have not yet been taken into
          account on its website. For those reasons, the StoneBlock Scanner does
          not assume any responsibility or guarantee that the website is
          up-to-date, correct and complete. The content on the website does not
          constitute official communication or legal advice.
        </p>
        <p>
          The StoneBlock Scanner is trying to avoid technical interference as
          far as possible. However, it cannot guarantee or assume responsibility
          that the website or database will not be interrupted or otherwise
          disrupted.
        </p>
        <p>
          Please note that any views or opinions presented in this website are
          solely those of the author and do not necessarily represent those of
          the company.
        </p>
      </div>
    </PageContentWrapper>
  );
};

export default DisclaimerPage;
