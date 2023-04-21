import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Form } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <Form className='d-flex'>
            {device.brands.map(brand => 
                <Card
                    className='p-3'
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'success' : 'black'}
                    style={{cursor: 'pointer'}}
                >
                    {brand.name}
                </Card>
            )}
        </Form>
    );
});

export default BrandBar;