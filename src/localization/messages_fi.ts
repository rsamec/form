
class Localization {

    /*
     * Translated default messages for the validation engine.
     * Locale: EN (English; english)
     */
    static get ValidationMessages():any {
        return {
            required: "Tämä kenttä on pakollinen.",
            remote: "Korjaa tämä kenttä.",
            email: "Syötä oikeanmuotoinen sähköpostiosoite.",
            url: "Syötä oikeanmuotoinen verkkotunnus.",
            date: "Syötä oikeanmuotoinen päivämäärä.",
            dateISO: "Syötä oikeanmuotoinen ISO-standardin mukainen päivämäärä.",
            number: "Syötä oikeanmuotoinen numero.",
            digits: "Syötä vain numeroita.",
            signedDigits: "Syötä vain etumerkillisiä (+ tai -) numeroita.",
            creditcard: "Syötä oikeanmuotoinen luottokorttinumero.",
            equalTo: "Syötä sama arvo uudelleen.",
            maxlength: "Syötä enintään {MaxLength} merkkiä.",
            minlength: "Syötä vähintään {MinLength} merkkiä.",
            rangelength: "Syötä arvo joka on {MinLength} - {MaxLength} merkkiä pitkä",
            range: "Syötä arvo joka on välillä {Min} - {Max}.",
            max: "Syötä arvo joka on enintään {Max}.",
            min: "Syötä arvo joka on vähintään {Min}.",
            step: "Syötä arvo joka kasvaa/vähenee {Step}:lla.",
            contains: "Syötä arvo joka sisältyy annettuihin vaihtoehtoihin. Syöttämäsi arvo '{AttemptedValue}'.",
            mask: "Syötä vastaava arvo kuin {Mask}.",
            dateCompare: {
                Format: "DD.MM.YYYY",
                LessThan: "Syötä päivämäärä joka on ennen {CompareTo}.",
                LessThanEqual: "Syötä päivämäärä joka on sama tai ennen {CompareTo}.",
                Equal: "Syötä päivämäärä joka on sama kuin {CompareTo}.",
                NotEqual: "Syötä eri päivämäärä kuin {CompareTo}.",
                GreaterThanEqual: "Syötä päivämäärä joka on sama tai {CompareTo} jälkeen.",
                GreaterThan: "Syötä päivämäärä joka on jälkeen {CompareTo}."
            },
            minItems: "Syötä vähintään {Min} kohtaa.",
            maxItems: "Syötä enintään {Max} kohtaa.",
            uniqItems: "Syötä ainoastaan uniikkeja arvoja.",
            enum: "Syötä arvo joka sisältyy sallittuihin vaihtoehtoihin.",
            type: "Syötä arvo joka on tyypiltään '{Type}'.",
            multipleOf: "Syötä arvo joka on numeron {Divider} monikerta."
        }
    }
}

export = Localization;
