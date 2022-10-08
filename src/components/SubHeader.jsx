import React from 'react';

const SubHeader = () => {
    return (
        <div>
            <div className='container'>
                <div className='row w-100 mx-auto'>
                    <div className='col-md-6 py-5'>
                        <p className='h1 theme-color my-0'>
                            One integrated account;
                        </p>
                        <p className='h1 theme-color'>
                            limitless possibilities
                        </p>
                        <p className='text-muted fs-2'>
                        Run your business with everything you need to scale globally. 1aidentiti solution power payments for import & export, e-commerce, marketplaces, SMEs and large corporates.
                        </p>
                    </div>
                    <div className='col-md-6 py-5'>
                        <ul>
                            <li>
                                <div>
                                    <p className='h5 font-weight-bold'>Payments</p>
                                    <p className='text-muted h6'>Flexible and integrated payins & payout processing solution</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p className='h5 font-weight-bold'>Exchange</p>
                                    <p className='text-muted h6'>Accessible, reliable, real-time FX infrastructure</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p className='h5 font-weight-bold'>Multi-currency wallets</p>
                                    <p className='text-muted h6'>One account, multiple currencies</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;