import * as React from 'react';
import {Link} from "react-router-dom";
import {FC} from "react";
const cat1 = require('../img/cat1.jpg')
const cat2 = require('../img/cat2.jpg')
const cat3 = require('../img/cat3.jpg')
const cat4 = require('../img/cat4.jpg')
const cat5 = require('../img/cat5.jpg')
const cat6 = require('../img/cat6.jpg')
const cat7 = require('../img/cat7.jpg')
const cat8 = require('../img/cat8.jpg')

const CATS = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8]
const Main: FC = () => {
    return (
        <div>
            <h1>Cornish rex</h1>
            <div className='cats-block'>
                {CATS.map((cat, i) => <div className='cat-item' key={i}>
                    <Link to='/cats'>
                        <img src={cat} />
                    </Link>
                </div>)}
            </div>
        </div>
    );
};

export default Main;