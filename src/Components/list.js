import { React, useState } from 'react'
import data from "./ListData.json"

function List(props) {

    const filteredData = data.filter((el) => {

        if (el.gstNo && typeof el.gstNo === 'string' && el.gstNo === props.input) {
            return el.gstNo && typeof el.gstNo === 'string' && el.gstNo === props.input;
        }
        else {
            return "";
        }
    })
    return (
        <>

            {filteredData.length === 0 ? (
                // Render an image if filteredData is empty
                <div className="not-found"> <img src="No data-rafiki.png" alt="" /> </div>
            ) : (

                filteredData.map((item) => (
                    <div className="gst-output-cont">
                        <h1>{item.name}</h1>
                        <p>{item.gstNo}</p>
                        <div className="top-bar">
                            <div>
                                <p>Registered On : </p>
                                <div> {item.regDate}</div>
                            </div>
                            <div>
                                <p>GST Status :</p>
                                <div>{item.status}</div>

                            </div>
                            <div>
                                <p>Last Updated On :</p>
                                <div>{item.lastUpdatedDate}</div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card-top">BUSINESS DETAILS</div>
                            <hr style={{ backgroundColor: "#d6dee7", height: "2px", border: "none", marginBottom: "20px" }} />

                            <div className="card-mid">
                                <div>
                                    <div>
                                        <div className='vr'></div>
                                        <div>
                                            <p className='label'>
                                                GSTIN
                                            </p>
                                            <p className='label-op'>
                                                {item.GSTin}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='vr'></div>
                                        <div>
                                            <p className='label'>
                                                Legal Name of Business
                                            </p>
                                            <p className='label-op'>
                                                {item.legalName}
                                            </p>
                                        </div>

                                    </div>
                                    <div>
                                        <div className='vr'></div>
                                        <div>
                                            <p className='label'>
                                                GSTIN Status
                                            </p>
                                            <p className='label-op'>
                                                {item.status}
                                            </p>
                                        </div>

                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <div className='vr'></div>
                                        <div>
                                            <p className='label'>
                                                Constitution of Business
                                            </p>
                                            <p className='label-op'>
                                                {item.constitution}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='vr'></div>
                                        <div>
                                            <p className='label'>
                                                Taxpayer Type
                                            </p>
                                            <p className='label-op'>
                                                {item.taxpayerType}
                                            </p>
                                        </div>

                                    </div>
                                    <div>
                                        <div className='vr'></div>
                                        <div>
                                            <p className='label'>
                                                Date of Rezistration
                                            </p>
                                            <p className='label-op'>
                                                {item.regDate}
                                            </p>
                                        </div>

                                    </div>


                                </div>
                                <div>
                                    <div>
                                        <div className='vr'></div>
                                        <div>
                                            <p className='label'>
                                                State Jurisdiction details
                                            </p>
                                            <p className='label-op'>
                                                {item.stateJurisdictionDetails}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='vr'></div>
                                        <div>
                                            <p className='label'>
                                                Centre Jurisdiction details
                                            </p>
                                            <p className='label-op'>
                                                {item.centreJurisdictionDetails}
                                            </p>
                                        </div>

                                    </div>
                                    <div>

                                    </div>


                                </div>
                            </div>
                            <hr style={{ backgroundColor: "#d6dee7", height: "2px", border: "none", margin: "0 0 20px" }} />
                            <div className="card-bottom">
                                <button>
                                
                                    Copy
                                </button>
                            </div>
                        </div>

                    </div>
                ))

            
            )}

        </>
    )
}

export default List
