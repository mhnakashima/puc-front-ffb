import React from 'react';
import { TOrder } from "../../api/order.type";
import { TProduct, TProductStatus } from "../../api/product.type";
import Header from "../../components/header/Header";
import styles from './Orders.module.scss';

export type TOrderProps = {
    products: TProduct[],
}

export const Orders: React.FC = ({ products }: TOrderProps) => {

    const productsList: TProduct[] = products || [
        {
            id: '1',
            name: 'sanduiche',
            price: 50,
        },
        {
            id: '2',
            name: 'sanduiche',
            price: 50,
        },
        {
            id: '3',
            name: 'sanduiche',
            price: 50,
        },
    ]

    console.log('productsList', productsList);
    return (
        <div className=''>
            <Header>
                <div className={styles.container}>
                    <h1>Pedidos</h1>
                </div>

                <div className="row">
                    {
                        productsList && productsList.map((item, i) => {
                            return (
                                <div key={item.id} className="col-12 col-sm-4">
                                    <div className='card'>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.restaurant}</p>
                                            <a href="#" className="btn btn-primary">Adicionar</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Header>
        </div>
    );
}