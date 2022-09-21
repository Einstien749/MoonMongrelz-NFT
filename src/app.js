import React from "react";
import './app.css';
import { FaBars } from 'react-icons/fa';
import logo from './images/mm3d.png';
import bear from './images/bear.png';
import { Link } from 'react-scroll';
import logo1 from './images/logo1.jpg';
import logo2 from './images/logo2.jpg';
import logo3 from './images/logo3.jpg';
import logo4 from './images/logo4.jpg';
import logo5 from './images/logo5.jpg';
import logo6 from './images/logo6.jpg';
import logo7 from './images/logo7.jpg';
import logo8 from './images/logo8.jpg';
import { Howl } from 'howler';
import { FaArrowAltCircleRight } from 'react-icons/fa';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {nav: false, wallet: false, acc: "", guess: false, win: false};
        this.Wallet = this.Wallet.bind(this);
        this.Bark = this.Bark.bind(this);
    }
    
    Wallet(){
        if(this.state.wallet){

            if (window.ethereum) {
              console.log("hey");
              window.ethereum
              .request({ method: "eth_requestAccounts" })
              .then((res) => {});}
            else {
              alert("install metamask extension!!");
            }
          }
    }


    componentDidMount(){
        this.Wallet();
    }

    Bark(){
        let hi = new Howl({src: ['https://assets.mixkit.co/sfx/download/mixkit-medium-size-angry-dog-bark-54.wav'], html5: true});
        hi.play();
    }

    render(){
        return (
            <div>
                <div className='nav'>
                    <img src={logo} alt='My Pic' />
                    <nav>
                        <Link to='home' spy={true} smooth={true} duration={1000} offset={-10}> Home</Link>
                        <Link to='gallery' spy={true} smooth={true} duration={1000} offset={-10}>Gallery</Link>
                        <Link to='transfer' spy={true} smooth={true} duration={1000} offset={-10}>Transfer</Link>
                        <Link to='mint' spy={true} smooth={true} duration={1000} offset={-10}>Mint</Link>
                        <Link to='burn' spy={true} smooth={true} duration={1000} offset={-10}>Burn</Link>
                        <Link to='description' spy={true} smooth={true} duration={1000} offset={-10}>Description</Link>
                    </nav>
                    <input type='button' value='connect wallet' onClick={() => { this.setState({wallet: true}); this.Wallet(); setTimeout(() => {this.setState({wallet: false})}, 5000)}}/>
                    <div className='fab'>
                        <FaBars style={{width: 'inherit', height: '60%', color: 'rgb(255,255,255)'}} onClick={() => { this.setState({nav: !this.state.nav})}}></FaBars>
                    </div>
                </div>
                <div className='hye' onClick={() => { this.setState({nav: !this.state.nav})}} style={{color: 'rgb(255,255,255)', transform: this.state.nav ? 'translateX(2%)' : 'translateX(-200px)', transition: 'transform 1.5s ease-in-out', flexDirection: 'column', justifyContent: 'space-between', height: '93%', position: 'fixed', top: '7vh',zIndex: '10', left: '2px', backgroundColor: 'rgba(0,0,0,0.8)', textAlign: 'center', width: '200px', fontSize: '1.2rem', border: '2px rgb(0,200,200) outset'}}>
                    <Link to='home' spy={true} smooth={true} duration={1000}> Home</Link>
                    <Link to='gallery' spy={true} smooth={true} duration={1000}>Gallery</Link>
                    <Link to='transfer' spy={true} smooth={true} duration={1000}>Transfer</Link>
                    <Link to='mint' spy={true} smooth={true} duration={1000} offset={-10}>Mint</Link>
                    <Link to='burn' spy={true} smooth={true} duration={1000}>Burn</Link>
                    <Link to='description' spy={true} smooth={true} duration={1000}>Description</Link>
                    
                    <input type='button' onClick={() => { this.setState({wallet: true}); this.Wallet(); setTimeout(() => {this.setState({wallet: false})}, 2000)}} value='Connect Wallet' style={{width: '150px', height: '25px', marginLeft: '25px', color: 'rgb(0,200,200)'}}/>
                </div>
                <section id="home">
                    <div className='hm'>
                        <div className='hm1' style={{textAlign: 'center'}}>
                            <p style={{color: 'rgb(50,50,255)', fontSize: '1.2rem', fontWeight: '500'}}>Buy, Sell and Discover</p>
                            <h3><span style={{color: 'rgb(234,145,11)'}}>MOON MONGRELZ</span> NFT</h3>
                            <p style={{color: 'rgba(200,200,200,0.5)'}}>Find the rarest of the art you can find in NFT world the sooner you place the bid the sooner you get the hands on these Extraordinary NFT's</p>
                        </div>
                        <div className='hm2' style={{height: '300px'}}>
                            <img src={bear} style={{width: '100%', height: '100%'}} alt='useless art' />
                        </div>
                    </div>
                </section>
                <section id="gallery">
                    <div style={{backgroundColor: 'rgb(0,0,0)'}} id='larger'>
                        <div className='nft'>
                            <div>
                                <img src={logo1} alt='NFT art' style={{width: '100%', height: '80%'}}/>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <input type='button' value='Mint' style={{ backgroundColor: 'rgb(10,212,10)', borderRadius: '2px', width: '70px', height: '100%'}} onClick={() => { this.Bark()}} />
                                    <input type='button' value='Burn' style={{ backgroundColor: 'rgb(210,2,10)', borderRadius: '2px', width: '70px', height: '100%'}} onClick={() => {let hi = new Howl({src: ['https://assets.mixkit.co/sfx/download/mixkit-dog-whimper-sad-466.wav'], html5: true});hi.play();}}/>
                                </div>
                            </div>
                            <div>
                                <img src={logo2} alt='NFT art' style={{width: '100%', height: '80%'}}/>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <input type='button' onClick={() => { this.Bark()}} value='Mint' style={{ backgroundColor: 'rgb(10,212,10)', borderRadius: '2px', width: '70px', height: '100%'}}/>
                                    <input type='button' value='Burn' style={{ backgroundColor: 'rgb(210,2,10)', borderRadius: '2px', width: '70px', height: '100%'}} onClick={() => {let hi = new Howl({src: ['https://assets.mixkit.co/sfx/download/mixkit-dog-whimper-sad-466.wav'], html5: true});hi.play();}}/>
                                </div>
                            </div>
                        </div>
                    <div className='nft'>
                        <div>
                            <img src={logo3} alt='NFT art' style={{width: '100%', height: '80%'}}/>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <input type='button' onClick={() => { this.Bark()}} value='Mint'  style={{ backgroundColor: 'rgb(10,212,10)', borderRadius: '2px', width: '70px', height: '100%'}}/>
                                <input type='button' value='Burn' style={{ backgroundColor: 'rgb(210,2,10)', borderRadius: '2px', width: '70px', height: '100%'}} onClick={() => {let hi = new Howl({src: ['https://assets.mixkit.co/sfx/download/mixkit-dog-whimper-sad-466.wav'], html5: true});hi.play();}}/>
                            </div>
                        </div>
                        <div>
                            <img src={logo4} alt='NFT art' style={{width: '100%', height: '80%'}}/>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <input type='button' onClick={() => { this.Bark()}} value='Mint' style={{ backgroundColor: 'rgb(10,212,10)', borderRadius: '2px', width: '70px', height: '100%'}}/>
                                <input type='button' value='Burn' style={{ backgroundColor: 'rgb(210,2,10)', borderRadius: '2px', width: '70px', height: '100%'}} onClick={() => {let hi = new Howl({src: ['https://assets.mixkit.co/sfx/download/mixkit-dog-whimper-sad-466.wav'], html5: true});hi.play();}}/>
                            </div>
                        </div>
                    </div>
                    <div className='nft'>
                        <div>
                            <img src={logo5} alt='NFT art' style={{width: '100%', height: '80%'}}/>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <input type='button' onClick={() => { this.Bark()}} value='Mint' style={{ backgroundColor: 'rgb(10,212,10)', borderRadius: '2px', width: '70px', height: '100%'}}/>
                                <input type='button' value='Burn' style={{ backgroundColor: 'rgb(210,2,10)', borderRadius: '2px', width: '70px', height: '100%'}} onClick={() => {let hi = new Howl({src: ['https://assets.mixkit.co/sfx/download/mixkit-dog-whimper-sad-466.wav'], html5: true});hi.play();}}/>
                            </div>
                        </div>
                        <div>
                            <img src={logo6} alt='NFT art' style={{width: '100%', height: '80%'}}/>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <input type='button' onClick={() => { this.Bark()}} value='Mint' style={{ backgroundColor: 'rgb(10,212,10)', borderRadius: '2px', width: '70px', height: '100%'}}/>
                                <input type='button' value='Burn' style={{ backgroundColor: 'rgb(210,2,10)', borderRadius: '2px', width: '70px', height: '100%'}} onClick={() => {let hi = new Howl({src: ['https://assets.mixkit.co/sfx/download/mixkit-dog-whimper-sad-466.wav'], html5: true});hi.play();}}/>
                            </div>
                        </div>
                    </div>
                    <div className='nft'>
                        <div>
                            <img src={logo7} alt='NFT art' style={{width: '100%', height: '80%'}}/>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <input type='button' onClick={() => { this.Bark()}} value='Mint' style={{ backgroundColor: 'rgb(10,212,10)', borderRadius: '2px', width: '70px', height: '100%'}}/>
                                <input type='button' value='Burn' style={{ backgroundColor: 'rgb(210,2,10)', borderRadius: '2px', width: '70px', height: '100%'}} onClick={() => {let hi = new Howl({src: ['https://assets.mixkit.co/sfx/download/mixkit-dog-whimper-sad-466.wav'], html5: true});hi.play();}}/>
                            </div>
                        </div>
                        <div>
                            <img src={logo8} alt='NFT art' style={{width: '100%', height: '80%'}}/>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <input type='button' onClick={() => { this.Bark()}} value='Mint' style={{ backgroundColor: 'rgb(10,212,10)', borderRadius: '2px', width: '70px', height: '100%'}}/>
                                <input type='button' value='Burn' style={{ backgroundColor: 'rgb(210,2,10)', borderRadius: '2px', width: '70px', height: '100%'}} onClick={() => {let hi = new Howl({src: ['https://assets.mixkit.co/sfx/download/mixkit-dog-whimper-sad-466.wav'], html5: true});hi.play();}}/>
                            </div>
                        </div>
                    </div>

                    </div>
                </section>
                <section id="transfer">
                    <div style={{position: 'relative', top: '40%'}}>
                        <div style={{color: 'rgb(0,200,0)', fontSize: '1.7rem', textAlign: 'center'}}>TO TRANSFER</div>
                        <h3 style={{color: 'rgb(0,200,0)', fontSize: '1.4rem', textAlign: 'center'}}>SEND YOUR MUTT TO A NEW HOME</h3>
                    </div>
                </section>

                <section id="mint">
                    <div style={{position: 'relative', top: '25%'}}>
                        <h2 style={{color: 'rgb(0,200,0)', fontSize: '1.7rem', textAlign: 'center'}}> ARE YOU READY FOR A NEW COMPANION</h2>
                        <h2 style={{color: 'rgb(0,200,0)', fontSize: '1.7rem', textAlign: 'center'}}><input type='button' value='Mint' style={{ backgroundColor: 'rgb(0,200,0)', borderRadius: '2px', width: '100px', height: '50px'}} onClick={ () => { this.Bark(); }} /></h2>
                    </div>
                </section>

                <section id="burn">
                    <div className='burn' style={{color: 'rgb(255,255,255)', minHeight: '100%'}}>
                        <div style={{position: 'relative', top: '5%'}}>
                            <h3 style={{color: 'rgb(200,0,0)', fontSize: '1.4rem', textAlign: 'center'}}>WARNING!!!</h3>
                            <p style={{textAlign: 'center'}}>If you use this feature, it cannot be undone and your pooch will be gone FOREVER</p>
                            <p style={{textAlign: 'center'}}><input type='button' value='BURN' style={{color: 'rgb(255,255,255)',height: '50px', backgroundColor: 'rgb(255,0,0)', border: '2px outset rgb(200,200,200)', borderRadius: '5px'}}  onClick={() => {this.setState({guess: true}); let x = Math.floor(Math.random()*2); let t = [true, false]; this.setState({win: t[x]}); setTimeout(() => {this.setState({guess: false})}, 2000); let hi = new Howl({src: ['https://assets.mixkit.co/sfx/download/mixkit-dog-whimper-sad-466.wav'], html5: true});hi.play();}} /></p>
                            <div style={{display: this.state.guess ? 'block' : 'none', color: 'rgb(200,200,200)', fontSize: '1.4rem', textAlign: 'center'}}><div style={{color: 'rgb(0,200,0)', display: this.state.win ? 'block' : 'none', textAlign: 'center'}}><img src={logo8} style={{width: '20%', height: 'inherit', borderRadius: '50%'}} alt='Moon Mongrelz' /><p>Congratulation's You Won</p></div><div style={{display: !this.state.win ? 'block' : 'none', color: 'rgb(0,0,200)'}}><img src={logo5} style={{width: '20%', height: 'inherit', borderRadius: '50%'}} alt='Moon Mongrelz NFT' /><p>Sorry Try Again Next Time</p></div></div>
                        </div>
                    </div>
                </section>
                <section id="description">
                    <div className='description'>
                        <h3 style={{textAlign: 'center'}}>It's called  <span style={{fontSize: '25px', fontStyle: 'italic', color: 'rgb(200,0,0)'}}>MOON MONGRELZ</span></h3>
                        <div className='desc'>
                            <div className='desc1'>
                                <p style={{textAlign: 'center'}}>Buy, Sell and Discover</p>
                                <h3>Extraordinary <span style={{color: 'rgb(234,145,11)'}}>NF</span>T</h3>
                                <p>Find the rarest of the art you can find in NFT world the sooner you place the bid the sooner you get the hands on these Extraordinary NFT's</p>
                            </div>
                            <div className='desc3'>
                                <p>
                                    To commemorate the ongoing achievement of this amazing blockchain and eco-system, we bring you this special collection of 1500 art pieces.
                                </p>
                                <div id='faq' style={{border: 'rgb(0,200,200) outset 2px', borderRadius: '5px'}}>
                                    <h2 style={{color: 'rgb(200,0,0)'}}>FAQ'S</h2>
                                <div>
                                    <p><FaArrowAltCircleRight style={{color: 'rgb(0,200,200)', width: '20px', height: '20px', paddingTop: '2px'}}></FaArrowAltCircleRight>  How much reward are there ?</p>
                                    <p style={{width: '95%', marginLeft: '2.5%', border: 'rgb(200,200,200) 0.5px outset', textIndent: '5px'}}>      A total of 300 random dogs have an 850<span style={{color: 'rgb(0,200,0)'}}>VLX</span> reward attached. That is 20% of the total supply and a total of 255,000<span style={{color: 'rgb(0,200,0)'}}>VLX</span>.</p>
                                    <p><FaArrowAltCircleRight style={{color: 'rgb(0,200,200)', width: '20px', height: '20px', paddingTop: '2px'}}></FaArrowAltCircleRight>  How do I claim my reward ?</p>
                                    <p style={{width: '95%', marginLeft: '2.5%', border: 'rgb(200,200,200) 0.5px outset'}}> Not every dog has the reward attached, but if you win, you will see the confirmation on screen when you burn and the 850 VLX is automatically transferred to your wallet during the process. In short, you don't need to do anything, it's automatic. The current stats are transparently displayed on the website.</p>
                                    <p><FaArrowAltCircleRight style={{color: 'rgb(0,200,200)', width: '20px', height: '20px', paddingTop: '2px'}}></FaArrowAltCircleRight>  Who are the team behind the project ?</p>
                                    <p style={{width: '95%', marginLeft: '2.5%', border: 'rgb(200,200,200) 0.5px outset'}}> I go by the name BlockApprentice, this is a personal solo project of mine. You may have seen me in the community. I am also one of the founders of Velas.Army .</p>
                                    <p><FaArrowAltCircleRight style={{color: 'rgb(0,200,200)', width: '20px', height: '20px', paddingTop: '2px'}}></FaArrowAltCircleRight>  Where did the idea come from ?</p>
                                    <p style={{width: '95%', marginLeft: '2.5%', border: 'rgb(200,200,200) 0.5px outset'}}> I was looking at ideas for a project and studying tokenomics of various projects. Watching charts all day, it fascinated me to see the behaviour of different traders buying and selling. With this concept I thought it interesting to watch who will hold and who will burn, in this project both can win due to the decrease in supply, and having the reward directly attached to the NFT. So holding for VLX price to increase is like a store of value.</p>
                                    <p><FaArrowAltCircleRight style={{color: 'rgb(0,200,200)', width: '20px', height: '20px', paddingTop: '2px'}}></FaArrowAltCircleRight>  What about the inspiration behind the art ?</p>
                                    <p style={{width: '95%', marginLeft: '2.5%', border: 'rgb(200,200,200) 0.5px outset'}}> That is easy. As an active community member I watched the eco-system develop, so I wanted a way to capture the Velas blockchain like a snapshot in time in my traits. The idea of the dog, is my own pet boxer called Bella. We both was at home one day thinking which trades we will make get to the moon, that's the reason for the name and the jet pack. </p>
                                    <p><FaArrowAltCircleRight style={{color: 'rgb(0,200,200)', width: '20px', height: '20px', paddingTop: '2px'}}></FaArrowAltCircleRight>  When a Mongrel is burnt, where does it go ?</p>
                                    <p style={{width: '95%', marginLeft: '2.5%', border: 'rgb(200,200,200) 0.5px outset'}}> The NFT is sent to a contract address and unretrievable. They will never be put back into circulation. </p>
                                    <h4 style={{position: 'relative', bottom: '0px', textAlign: 'center'}}> <span style={{color: 'rgb(212,22,12)', fontSize: '1.3rem'}}>&copy;</span> 2022 ALL RIGHTS RESERVED</h4>
                                </div>
                    
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default App;