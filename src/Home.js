import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />

            {/* Product id, title, price, rating */}
            <div className="home__row">
            <Product
                id ="12345"
                title="
                Crest 3D White Professional Effects Whitestrips 20 Treatments + Crest 3D White 1 Hour Express Whitestrips 2 Treatments"
                price={49.99}
                rating ={5}
                image="https://lh3.googleusercontent.com/qJpB99aFkOAhBdQcFqFsu-zRD0fm7RZdiTDqiTQC-3AVaYInD4ppY81VKwdgIWi5ZX1ezCkGl5CnmszPk8EwGrDIEo00c0Lwmmli-VJEE3WsGqrsX6fyJTMmJVddU0a4wpuMHzi95A=w2400?source=screenshot.guru"
            />

            <Product
                id ="12347"
                title="Philips Sonicare ProtectiveClean 6500 Rechargeable Electric Toothbrush with Charging Travel Case and Extra Brush Head, Pastel Pink "
                price={149.99}
                rating ={4}
                image="https://lh3.googleusercontent.com/UAzlUYVh2Rf5hp-f7GYeVESUIUi9vf4ZUp-4iwj6vvJWT-uwqx9MwlnB-xsRQOtIod1ueYBr5ZGL4aXQKpVjOoJeYEHzy2K4c842Tfd2Nk8qY2w2Pd--s6AwkdMOYknHlmluKPu0pA=w2400?source=screenshot.guru"
            />
            </div>

            <div className="home__row">
            <Product
                id ="12349"
                title="Organic Ginger Tea Bags | 100 Tea Bags | Eco-Conscious Tea Bags in Kraft Bag | Raw from India | by FGO"
                price={14.99}
                rating ={4}
                image="https://lh3.googleusercontent.com/FFNfo8sTuX8cGrEkutoo3WHXIsXyHgDTt21DhS3RiU60pPp-qG2cpQ7Sl4fBZD4aj3fzukevg3H1mwJXlg7JJWclWI59nI1pu7WwafcmD4SVmOtHCv9Sn58HVyZSwY0nIlQQaL_7GA=w2400?source=screenshot.guru"
            />
            <Product
                id ="12341"
                title="FOREO LUNA 3 for Normal, Combination and Sensitive Skin, Smart Facial Cleansing and Firming Massage Brush for Spa at Home"
                price={199.00}
                rating ={5}
                image="https://lh3.googleusercontent.com/TDco19go6cO12mMIh96a9NulM_eiI3jx9amWHuuwoLkVr05QEmXQIk8gCX0e3AsgZh_fRXObp_s13ONx3m34sjGvUaTfLSBsNPU0FapU1icNgsZ_g7MQqfHkpl-m-Wuiz46-_rCQzg=w2400?source=screenshot.guru"
            />
            <Product
                id ="12342"
                title="DHC Perfect Vegetables 60 Days (240 Grains) Japan"
                price={23.95}
                rating ={5}
                image="https://lh3.googleusercontent.com/Epju1NnNVCmfZFQSbfRrcHrjrUUldZ9Jp-o4D0LSKVqfiaDGJOlIfrGKUbe4-ABIvw7F9UriyYXY2rRoBkigYzkDQc8SVMLoljqcqh02k9zHmqSIU72DgiELmSO2SBwL7nYWTCO-4Q=w2400?source=screenshot.guru"
            />
            </div>

            <div className = "home__row">
            <Product
                id ="12345"
                title="Toshiba 43-inch Smart HD 1080p TV - Fire TV, Released 2020"
                price={299.99}
                rating ={5}
                image="https://lh3.googleusercontent.com/r_ou_mSptOX1fv-Fubq2sQCvh567l9XYGoZmj4Zw1R5lx6FX22VZDcJBGOLa8wnapWodCD-TGb-oinD142KEMB0U9Et_ip8xtAKJR3KFz6w4K5wCeaj77YU156D9gVel-2jkwrnDkw=w2400?source=screenshot.guru"
            />
            <Product
                id ="12345"
                title="Microsoft Surface Laptop 4 13.5” Touch-Screen – AMD Ryzen 5 Surface Edition - 16GB Memory - 256GB Solid State Drive (Latest Model) - Platinum"
                price={1166.88}
                rating ={5}
                image="https://lh3.googleusercontent.com/FtAQzgL4QbarKIjkfYuIw8h923I88uTBxnV4hgRZwhiPlOORpSiNJ0FffU_1Xq-oGNcyXiHx0QJt_5FGqzJVkbMDdszp3JibfSDp0VMHrBX5VOvPCFYYL_NOkJxfWYYhIUtDKsBlLg=w2400?source=screenshot.guru"
            />
            </div>
            
            {/* Product */}
        </div>
    );
}



export default Home
