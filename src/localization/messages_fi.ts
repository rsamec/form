
class Localization {

    /*
     * Translated default messages for the validation engine.
     * Locale: FI (Finnish; suomi)
     */
    static get ValidationMessages():any {
        return {
            required: "Kenttä on pakollinen.",
            remote: "Korjaa kenttä.",
            email: "Syötä sähköpostiosoite oikeassa muodossa.",
            url: "Syötä verkkotunnus oikeassa muodossa.",
            date: "Syötä päivämäärä oikeassa muodossa.",
            dateISO: "Syötä ISO-standardin mukainen päivämäärä.",
            number: "Syötä numero oikeassa muodossa.",
            digits: "Syötä vain numeroita.",
            signedDigits: "Syötä vain etumerkillisiä (+ tai -) numeroita.",
            creditcard: "Syötä luottokorttinumero oikeassa muodossa.",
            equalTo: "Syötä sama arvo uudelleen.",
            maxlength: "Syötä enintään {MaxLength} merkkiä.",
            minlength: "Syötä vähintään {MinLength} merkkiä.",
            rangelength: "Syötä {MinLength} - {MaxLength} merkkiä pitkä arvo",
            range: "Syötä välillä {Min} - {Max} välillä oleva arvo.",
            max: "Syötä arvo, joka on enintään {Max}.",
            min: "Syötä arvo, joka on vähintään {Min}.",
            step: "Syötämäsi arvon tulee kasvaa/vähentyä luvulla {Step}",
            contains: "Syöttämäsi arvo '{AttemptedValue}' ei sisälly annettuihin vaihtoehtoihin.",
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
            multipleOf: "Syötä luvun {Divider} monikerta."
        }
    }
}

export = Localization;
