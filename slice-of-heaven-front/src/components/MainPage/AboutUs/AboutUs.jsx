import aboutUsStyles from "./AboutUs.module.css";

const AboutUs = () => {
    return(
        <div className={aboutUsStyles.about__body}>
           <div className={aboutUsStyles.about__us}>
                <div className={aboutUsStyles.about__title}>O NAS</div>
                    <div className={aboutUsStyles.about__text}>
                        Serdecznie zapraszamy do spróbowania naszych niepowtarzalnych, tworzonych z pasją i miłością dań. W ofercie posiadamy pizzę, makarony, a także specjalnie skomponowane zestawy obiadowe. Chcemy podzielić się z Tobą naszym kawałkiem nieba, którym jest rzecz jasna kawałek pizzy. Już tłumaczymy, dlaczego 😊
                        Codziennie przygotowujemy świeże ciasto do pizzy. Nie jest to jednak typowe włoskie, cienkie ciasto – dzięki specjalnej recepturze jest chrupkie na spodzie, a pulchne w środku. Gwarantujemy, że jego wyjątkowego smaku długo nie zapomnisz. Kropką nad i w „Niebie” jest mozzarella – czyli najsmaczniejszy ser, jakim można wzbogacić pizzę.
                        W naszym lokalu możesz zjeść w na miejscu, wziąć jedzenie na wynos lub zamówić dowóz. Natomiast jeśli w nocy złapie Cię głód – zapraszamy, w tygodniu do 3:00 a od piątku do niedzieli, aż do 4 nad ranem.
                        Serdecznie zapraszamy do zamawiania pizzy telefonicznie lub przez portale gastronomiczne. Już dzisiaj zostań naszym stałym klientem – czekają na Ciebie różne promocje i zabawy. Chcesz być na bieżąco? Śledź naszą stronę internetową oraz fanpage na Facebooku.
                    </div>
                </div>
        </div>
    );
}
export default AboutUs;