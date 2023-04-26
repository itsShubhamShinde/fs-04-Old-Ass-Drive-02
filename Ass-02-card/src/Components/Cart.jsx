import React from 'react'
import './Cart.css'

const Cart = () => {
    return (
        <div className='cartOuterDiv'>
            <div className="imageDiv">
                <div className="symbolDiv">
                    <p>+</p>
                </div>
                <div className="dotDiv">
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                </div>
            </div>
            <div className="infoDiv">
                <div className="profileNameDiv">
                    <h1>Dima Blover</h1>
                    <p>UI/UX Designar</p>
                </div>
                <div className="followerDiv">
                    <div >
                        <h3>26</h3>
                        <p>Shoots</p>
                    </div>
                    <div >
                        <h3>94</h3>
                        <p>Following</p>
                    </div>
                    <div >
                        <h3>139</h3>
                        <p>Followers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart