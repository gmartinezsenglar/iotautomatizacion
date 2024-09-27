"use client";

import Link from "next/link";
import React, { Component } from "react";


class Footer extends Component {
    render() {
        const current_year = new Date().getFullYear();
        return (
            <div id="section_footer">
                <div className="text-center py-4">
                    <Link href="./contact" target="_blank" className="btn btn-link">
                        Contacto
                    </Link>
                    <span>|</span>
                    <Link href="../privacyPolicy/page.js" target="_blank" className="btn btn-link">
                        Politica de Privacidad
                    </Link>
                    <span>|</span>
                    <Link href="../app/termsConditions/page.js" target="_blank" className="btn btn-link">
                        Terminos y condiciones
                    </Link>
                    <span>|</span>
                </div>
                <p className="text-center py-4">Copyright © {current_year}, IOT.sistemas.automatizados LLC. All Rights Reserved.</p>
            </div>
        );
    }
}
export default Footer;