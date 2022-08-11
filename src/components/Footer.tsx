import { Link } from 'gatsby'
import React from 'react'
import { FaDog } from "@react-icons/all-files/fa/FaDog";
import { FaLongArrowAltUp } from "@react-icons/all-files/fa/FaLongArrowAltUp";
import { FaLongArrowAltDown } from "@react-icons/all-files/fa/FaLongArrowAltDown";
import { FaLongArrowAltLeft } from "@react-icons/all-files/fa/FaLongArrowAltLeft";
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";

const Footer = () => {
    return (
        <footer>
            <p>A Gatsby site designed and coded by <Link to='https://github.com/qphandev'>Quynh</Link></p>
            <br />
            <div>
                <FaLongArrowAltUp />
                <FaLongArrowAltUp />
                <FaLongArrowAltDown />
                <FaLongArrowAltDown />
                <FaLongArrowAltLeft />
                <FaLongArrowAltRight />
                <FaLongArrowAltLeft />
                <FaLongArrowAltRight />
                B A 
                ENT 
                <FaDog />
            </div>
        </footer>
    )
}

export default Footer