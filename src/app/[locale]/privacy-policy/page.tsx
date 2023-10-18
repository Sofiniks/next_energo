'use client';
import styled from 'styled-components';
import ContainerLayout from '@/components/layout/ContainerLayout';
import { device } from '@/theme/breakpoints';

const Wrapper = styled.div`
padding-top: 80px;
@media ${device.md} {
  padding-top: 60px;
}
`;
const StyledContainer = styled(ContainerLayout)`
padding: 50px;
`;
const StyledContent = styled.div`
h3, p, ul, li {
  margin-bottom: 10px;
  line-height: 155%;
}
li {
  width: 50%;
  @media ${device.md} {
    width: 100%;
  }
}
`;

export default function PrivacyPolicy() {
  return (
    <Wrapper>
      <StyledContainer>
        <StyledContent>
          <p>
            Šīs Privātuma politikas mērķis ir sniegt fiziskajai personai - SIA
            GoldenA assessments pakalpojumu klientam - informāciju par personas
            datu apstrādes nolūku, apjomu, aizsardzību, apstrādes termiņu un
            datu subjekta tiesībām datu iegūšanas laikā, kā arī apstrādājot
            klienta personas datus.
          </p>
          <h3>Pārzinis un tā kontaktinformācija:</h3>
          <ul>
            <li>
              1. Personas datu apstrādes pārzinis ir SIA GoldenA assessments,
              vienotās reģistrācijas Nr. LV40203166690, juridiskā adrese Rīga,
              Kalna iela 2 - 3, LV-1003.
            </li>
            <li>
              2. SIA GoldenA assessments kontaktinformācija ar personas datu
              apstrādi saistītajos jautājumos ir: goldena.assessments@gmail.com.
              Izmantojot šo kontaktinformāciju vai vēršoties SIA GoldenA
              assessments juridiskajā adresē, var uzdot jautājumu par personas
              datu apstrādi.
            </li>
          </ul>
          <p>
            SIA GoldenA assessments rūpējas par Klientu privātumu un personas
            datu aizsardzību, ievēro Klientu tiesības uz personas datu apstrādes
            likumību saskaņā ar piemērojamajiem tiesību aktiem - Eiropas
            Parlamenta un padomes 2016. gada 27. aprīļa Regulu 2016/679 par
            fizisku personu aizsardzību attiecībā uz personas datu apstrādi un
            šādu datu brīvu apriti (Regula) un citiem piemērojamajiem tiesību
            aktiem privātuma un datu apstrādes jomā. Privātuma politika ir
            attiecināma uz datu apstrādi neatkarīgi no tā, kādā formā un/vai
            vidē Klients sniedz personas datus.
          </p>
          <h3>Personas datu apstrādes nolūki:</h3>
          <ul>
            <li>Pakalpojumu sniegšanai</li>
            <li>Biznesa plānošanai un analītikai</li>
            <li>
              Informācijas, informācijas sistēmu un uzņēmuma drošības
              nodrošināšanai
            </li>
            <li>
              Informācijas sniegšanai valsts pārvaldes iestādēm un operatīvās
              darbības subjektiem ārējos normatīvajos aktos noteiktajos
              gadījumos un apjomā
            </li>
          </ul>
          <h3>Personas datu apstrāde:</h3>
          <p>
            SIA GoldenA assessments aizsargā Klienta datus, izmantojot mūsdienu
            tehnoloģiju iespējas, ņemot vērā pastāvošos privātuma riskus un
            saprātīgi pieejamos organizatoriskos, finansiālos un tehniskos
            resursus, tajā skaitā izmantojot šādus drošības pasākumus:
          </p>
          <ul>
            <li>datu šifrēšanu, pārraidot datus (SSL šifrēšana);</li>
            <li>
              aizsardzības pasākumus atbilstoši aktuālajām tehnikas attīstības
              iespējām.
            </li>
          </ul>
          <h3>
            SIA GoldenA assessments neizpauž trešajām personām Klienta personas
            datus vai jebkādu pakalpojumu sniegšanas un līguma darbības laikā
            iegūtu informāciju, tajā skaitā, informāciju par saņemtajiem
            elektronisko sakaru, satura vai citiem pakalpojumiem.
          </h3>
          <h3>Personas datu glabāšanas ilgums:</h3>
          <p>
            SIA GoldenA assessments glabā un apstrādā Klienta personas datus,
            kamēr pastāv vismaz viens no šiem kritērijiem:
          </p>
          <ul>
            <li>
              tikai tik ilgi, kamēr ir spēkā ar Klientu noslēgtais līgums;
            </li>
            <li>dati ir nepieciešami tam nolūkam, kam tie ir saņemti;</li>
            <li>
              kamēr ārējos normatīvajos aktos noteiktajā kārtībā SIA GoldenA
              assessments vai Klients var realizēt savas leģitīmās intereses
              (piemēram, iesniegt iebildumus vai celt vai vest prasību tiesā);
            </li>
            <li>
              kamēr kādai no pusēm pastāv juridisks pienākums datus glabāt
              (piemēram, saskaņā ar Grāmatvedības likumu, uzņēmumam izrakstītie
              rēķini jāglabā 5 gadus, u.c.);
            </li>
            <li>
              kamēr ir spēkā Klienta piekrišana attiecīgai personas datu
              apstrādei, ja nepastāv cits datu apstrādes likumīgs pamats.
            </li>
          </ul>
          <p>
            Pēc tam, kad šajā punktā minētie apstākļi izbeidzas, Klienta
            personas dati tiek dzēsti. Auditācijas pieraksti tiek uzglabāti
            vismaz vienu gadu no to veikšanas dienas saskaņā ar normatīvajos
            aktos noteikto.
          </p>
          <h3>Saziņa ar Klientu:</h3>
          <p>
            SIA GoldenA assessments veic saziņu ar Klientu, izmantojot Klienta
            norādīto kontaktinformāciju (telefona numuru, e-pasta adresi, pasta
            adresi).
          </p>
          <p>
            Saziņu par pakalpojumu līgumsaistību izpildi SIA GoldenA assessments
            veic uz noslēgtā līguma pamata (piemēram, pakalpojumu piegādes vai
            bojājumu novēršanas laiku saskaņošana, informācija par rēķiniem, par
            plānotiem darbiem u.c.).
          </p>
          <h3>
            Šī Privātuma politikas redakcija stājas spēkā 2018. gada 6.
            septembrī.
          </h3>
        </StyledContent>
      </StyledContainer>
    </Wrapper>
  );
}
