import React, { useState } from 'react'
import { faqs } from '../constants/data'
import styles from "./styles/faq.module.css"
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi"

const Faqs = () => {
    const [productFaqs, setProductFaqs] = useState(faqs);
    const handleClick = (id) => {
        const updatedProductFaq = productFaqs.map((productFq) => {
            if (productFq.id === id) {
                return {
                    ...productFq,
                    isOpen: !productFq.isOpen
                }
            } else {
                return productFq;
            }
        })
        setProductFaqs(updatedProductFaq)
    }
    return (
        <>
            {
                productFaqs.map((singleFaq) => (
                    <div className={styles.faqContainer}>
                        <div className={styles.innerFaqContainer}>
                        <h3>{singleFaq.question}</h3>
                        {
                            singleFaq.isOpen ? (
                                <HiOutlineChevronUp size={22} cursor={"pointer"} onClick={() => handleClick(singleFaq.id)} />
                            ) : (
                                <HiOutlineChevronDown size={22} cursor={"pointer"} onClick={() => handleClick(singleFaq.id)} />
                            )
                        }
                        </div>
                        {
                            singleFaq.isOpen && (
                                <div className={styles.answerContainer}>
                                    <p>
                                        {singleFaq.answer}
                                    </p>
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </>
    )
}

export default Faqs