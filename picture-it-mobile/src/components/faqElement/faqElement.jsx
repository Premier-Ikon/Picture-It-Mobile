import './faqElement.css';

function FaqElement({faq, index, toggleFaq}) {
    return ( 
        <div
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleFaq(index)}
        >
            <div className="faq-question-container">
                <div className="faq-question">
                    {faq.question}
                </div>
                <div className="faq-icon">
                    <i className="fa-solid fa-plus"/>
                </div>
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>

        </div>
     );
}

export default FaqElement;