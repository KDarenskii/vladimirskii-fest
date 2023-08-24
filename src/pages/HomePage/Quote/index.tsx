import React, { FC, useState } from "react";

import Container from "components/Container";
import Button from "components/ui/Button";

import useMatchMedia from "hooks/useMatchMedia";

import authorImageSrc from "assets/img/quote-author.jpg";

import styles from "./quote.module.scss";

const Quote: FC = () => {
    return (
        <section className={styles.section}>
            <Container className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.author}>
                        <img
                            src={authorImageSrc}
                            alt="Автор"
                            width={400}
                            height={363}
                        />
                        <h5>Глава Владимирского округа</h5>
                        <p>Денис Тихоненко</p>
                    </div>
                    <QuoteContent />
                </div>
            </Container>
        </section>
    );
};

export default Quote;

function QuoteContent() {
    const [isExtended, setIsExtended] = useState(false);
    const { isDesktop } = useMatchMedia();

    const isShortQuote = !isDesktop;
    const shouldDisplayFullQuote = isShortQuote && !isExtended;

    const quoteText = shouldDisplayFullQuote ? (
        <blockquote>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— «Мы поставили себе цель - развить
            идентичность Владимирского округа: чтобы у жителей было больше
            понимания, в каком округе они живут. На нашей территории находится
            много культурных учреждений - театры, музеи, библиотеки. И мы решили
            провести фестиваль сами...»
        </blockquote>
    ) : (
        <blockquote>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— «Мы поставили себе цель - развить
            идентичность Владимирского округа: чтобы у жителей было больше
            понимания, в каком округе они живут. На нашей территории находится
            много культурных учреждений - театры, музеи, библиотеки. И мы решили
            провести фестиваль сами. Организатором выступил муниципалитет, а
            участниками - культурные организации Владимирского округа. Мы решили
            уйти от обычной практики проведения местных праздников, когда
            муниципалитет приглашает гастролеров, часто не понимающих, для
            жителей какого округа они сегодня приехали исполнять свою
            стандартную программу. И подошли к делу творчески и с любовью,
            организуя праздник своими силами. В результате удалось воплотить в
            жизнь идею уникального фестиваля, интересного не только жителям
            округа, но и всем петербуржцам.»
        </blockquote>
    );

    return (
        <div className={styles.content}>
            {quoteText}
            {shouldDisplayFullQuote && (
                <Button
                    className={styles.moreBtn}
                    size="small"
                    onClick={() => setIsExtended(true)}
                >
                    Читать полностью
                </Button>
            )}
        </div>
    );
}
