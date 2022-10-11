import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <nav className='navbar navbar-inverse navbar-expand-md navbar-light bg-white'>
                <a href='/dashboard' className='navbar-brand'>
                    <img alt='logo' src={require('../assets/logo1.png')} width='30px' />
                    <span className='px-1 h6'>CashFlakes</span>
                </a>
                <ul className='navbar-nav mx-md-5 pt-md-2'>
                    <li className='nav-item mx-2'>
                        <span className='nav-link text-muted h6'> <i className='fa fa-tachometer'></i> Dashboard</span>
                    </li>
                    <li className='nav-item mx-2'>
                        <NavLink exact style={{textDecoration: 'none'}} to='/dashboard' className={({isActive})=>( isActive ? 'nav-link text-muted h6 border-bottom border-cashflakes' : 'nav-link text-muted h6')}> <i className='fa fa-credit-card'></i> Wallets</NavLink>
                    </li>
                    <li className='nav-item mx-2'>
                        <NavLink exact style={{textDecoration: 'none'}} to='/dashboard/activity' className={({isActive})=>( isActive ? 'nav-link text-muted h6 border-bottom border-cashflakes' : 'nav-link text-muted h6')}> <i className='fa fa-signal'></i> Activity</NavLink>
                    </li>
                    <li className='nav-item mx-2'>
                        <NavLink exact style={{textDecoration: 'none'}} to='/dashboard/help' className={({isActive})=>( isActive ? 'nav-link text-muted h6 border-bottom border-cashflakes' : 'nav-link text-muted h6')}> <i className='fa fa-phone'></i> Help</NavLink>
                    </li>
                </ul>
            </nav>
            {/* <div className='p-3'>
                <img alt='logo' src={require('../assets/logo1.png')} width='30px' />
                <span className='px-1 h6'>CashFlakes</span>
                <span className='px-3 text-muted h6'> <i className='fa fa-tachometer'></i> Dashboard</span>
                <span className='float-right'>
                    <img alt='user_photo' src={require('../assets/images.jpg')} width='30px' height='30px' className='rounded-circle' />
                </span>
            </div> */}
            <div className='dashboard-theme'>
                <div className='container'>
                    <div className='d-flex flex-md-row flex-column justify-content-between'>
                        <p className='py-3'><span className='text-cashflakes'>Wallets</span> / <span className='text-muted'>edit wallet (INV-2020-010)</span></p>
                        <button className='my-3 btn btn-light text-primary'>Manage Wallet <i className='fa fa-caret-down'></i></button>
                    </div>
                    <div className='row w-100 mx-0'>
                        <div className='col-md-8 mb-2'>
                            <div className='bg-white p-3 rounded-lg'>
                                <div className='d-flex flex-md-row flex-column justify-content-between'>
                                    <div className='d-flex'>
                                        <img alt='user_photo' src={require('../assets/images.jpg')} width='50px' height='50px' className='rounded-circle' />
                                        <div className='ml-3'>
                                            <p className='h6 my-0'>Dipa Inhouse</p>
                                            <p className='text-muted'>hello@dipainhouse.com</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-muted my-0'>Ijen Boulevard Street 101</p>
                                        <p className='text-muted my-0'>Malang City, 65115</p>
                                        <p className='text-muted'>East Java, Indonesia</p>
                                    </div>
                                </div>
                                <div className='mx-1 bill-board p-3 rounded-lg'>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <p className='text-white h6'>Wallet Number</p>
                                            <p className='text-white font-weight-bold'>INV-2020-010</p>
                                            <p className='text-white'>Issued Date: <span className='font-weight-bold'>10 Jan, 2022</span></p>
                                            <p className='text-white'>End Date: <span className='font-weight-bold'>18 Jan, 2022</span></p>
                                        </div>
                                        <div>
                                            <p className='text-white h6'>Billed to</p>
                                            <p className='text-white'>Zaky Grizly</p>
                                            <p className='text-white'>Monlight Agency LTD</p>
                                            <p className='text-white'>New York, USA</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='row w-100 mx-auto'>
                                    <div className='col-md-4 col-6 my-2'>
                                        <div className='d-flex'>
                                            <img alt='ethlogo' src={require('../assets/ethereum.png')} width='50px' height='50px' className='rounded-circle' />
                                            <h6 className='mx-1 pt-2'>Ethereum</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6 my-2'>
                                        <div className='d-flex'>
                                            <img alt='bnblogo' src={require('../assets/bnb.png')} width='50px' height='50px' className='rounded-circle' />
                                            <h6 className='mx-1 pt-2'>BNB</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6 my-2'>
                                        <div className='d-flex'>
                                            <img alt='maticlogo' src={require('../assets/matic.png')} width='50px' height='50px' className='rounded-circle' />
                                            <h6 className='mx-1 pt-2'>MATIC</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6 my-2'>
                                        <div className='d-flex'>
                                            <img alt='bitcoinlogo' src={require('../assets/bitcoin.png')} width='50px' height='50px' className='rounded-circle' />
                                            <h6 className='mx-1 pt-2'>Bitcoin</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6 my-2'>
                                        <div className='d-flex'>
                                            <img alt='solalogo' src={require('../assets/solana.jpg')} width='50px' height='50px' className='rounded-circle' />
                                            <h6 className='mx-1 pt-2'>Solana</h6>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-6 my-2'>
                                        <div className='d-flex'>
                                            <img alt='wavlogo' src={require('../assets/waves.png')} width='50px' height='50px' className='rounded-circle' />
                                            <h6 className='mx-1 pt-2'>Waves</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='bg-white rounded-lg p-3'>
                                <div className='form-group col'>
                                    <select className='form-control'>
                                        <option>Select Bank</option>
                                    </select>
                                </div>
                                <div className='form-group col'>
                                    <input className='form-control' placeholder='Enter Amount' />
                                </div>
                                <div className='form-group col'>
                                    <input className='form-control' placeholder='Beneficiary Name' />
                                </div>
                                <button className='btn btn-cashflakes btn-block'>Make Payment</button>
                            </div>
                            <div className='bg-white rounded-lg p-3 my-2'>
                                <img  alt='qrcode' src={require('../assets/qr.jpg')} className='img-fluid' />
                                <img  alt='qrcode' src={require('../assets/qr.jpg')} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;