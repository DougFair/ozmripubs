import React from 'react'

const SubHeading = () => {
    return (
    <div className="subBanner" style={{margin: "0 20px"
}}>
        <p className="subBannerText" style={{lineHeight: 1.3, fontSize: "0.9rem"
        }}>If you work at an Australian Medical Research Institute, or are just interested in what your colleagues at MRIs are doing, <span style={{fontWeight: "bold", fontStyle: "italic", color: "orange" }}>"Aussie MRI Publications"</span>  &nbsp;is an easy way to view their latest papers. If you want to know what biomed paper are being published at Aussie universities instead, go to our sister site <span style={{fontWeight: "bold", fontStyle: "italic", color: "purple" }}>"Aussie Uni Publications"</span></p>
        <hr style={{marginTop: "20px"}}/>
    </div>
    )
}

export default SubHeading

