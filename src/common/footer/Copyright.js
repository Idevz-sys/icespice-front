import React from 'react'

const Copyright = () => {
    return (
        <div className="copyright-area copyright-style-one">
            <div className="container">
                <div className="row align-items-center footer-text">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="copyright-right text-center text-md-end">
                            <p className="copyright-text" style={{ textAlign: 'center' }}>&copy; {new Date().getFullYear()} Icespice - Todos os direitos reservados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;