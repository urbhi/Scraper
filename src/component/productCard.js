import React, { useContext } from 'react'
import '../css/productCard.css'
import AllContext from '../context/notes/Context'
import { useNavigate } from 'react-router-dom'


const ProductCard = (props) => {

    const navigate = useNavigate();

    const getImage = (link) => {
        if (link) {
            if (link.slice(0, 18) === "https://www.amazon") { return "/images/amazon.png" }
            else if (link.slice(0, 20) === "https://www.flipkart") { return "/images/flipkart.png" }
            else { return 0 }
        }
    }
    return (
        <div className='product-card'
            onClick={async () => {
                localStorage.setItem('Product_data', JSON.stringify(props.data))
                navigate('/productAnalysis')
            }}
        >

            <div className='product-img'>
                <img src={props.data.url1?.img[0]} alt="" srcset="" />
            </div>
            <div className="product-details">
                <p className="prodcut-title">
                    {
                        props.data.title?.length > 85 ?
                            (props.data.title)?.slice(0, 85) + "..." : props.data.title
                    }
                </p>
                <p className="prodcut-secondry-title">
                    {props.data.url1?.timeData[0]}
                    {/* 12-august 2019 */}
                </p>
                {/* <div className="rating">
                    ★4.3

                </div> */}
                <div className="details">

                    <div className="price-amazon">
                        {
                            getImage(props.data.url1?.link) ?
                                <>
                                    <img src={getImage(props.data.url1?.link)} alt="" srcset="" />
                                    <p className='product-price'>
                                        {props.data.url1?.priceData[props.data.url1?.priceData.length - 1]}
                                        <span className='actual-price'>
                                            {props.data.url1?.actualPrice}

                                        </span>
                                    </p>
                                </>

                                : ""
                        }
                    </div>
                    <div className="price-flipkart">
                        {
                            getImage(props.data.url2?.link) ?
                                <>
                                    <img src={getImage(props.data.url2.link)} alt="" srcset="" />
                                    <p className='product-price'>
                                        {props.data.url2.priceData[props.data.url2.priceData.length - 1]}
                                        <span className='actual-price'>
                                            {props.data.url2.actualPrice}

                                        </span>
                                    </p>
                                </>
                                : ""
                        }
                    </div>
                </div>
                {/* <div className="price-amazon">
                    <img src="/images/amazon.png" alt="" srcset="" />
                    <p className='product-price'>
                        Rs 30,000
                    </p>
                    <div className="rating">
                        ★4.3
                    </div>
                </div> */}
                {/* <div className="price-flipkart">
                    <img src="/images/flipkart.png" alt="" srcset="" />
                    <p className='product-price'>
                        Rs 30,000
                    </p>
                    <div className="rating">
                        ★4.3
                    </div>
                </div> */}
            </div>

        </div >
    )
}

export default ProductCard