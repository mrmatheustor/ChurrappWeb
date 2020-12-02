import React from 'react'
import { Button, Modal, Fade, Backdrop, Collapse, Grow } from '@material-ui/core'
import '../card/Card.css'
import Tumb from '../../assets/image/tumb.png';
import Video from '../../assets/video/video.mp4';
import Icon from '../../assets/image/icon.png';
import GooglePlay from '../../assets/image/google-play-badge.png';
import { Player } from 'video-react'
// import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";

import '../../../node_modules/video-react/dist/video-react.css'

import '../../fonts/poppins/Poppins-Medium.ttf'
import '../../fonts/poppins/Poppins-Light.ttf'


export default function Card() {
    const [open, setOpen] = React.useState(false);
    const [imgURL, setImgURL] = React.useState();
    const [checked, setChecked] = React.useState(false);

    const modalOpen = () => {
        setOpen(!open);
    }

    function downloadChurrapp(){
        window.open('apk.churrapp.com', '_blank');
    }

    function getImg(props) {
        if (props == Tumb) {
            setOpen(!open);
            setImgURL(Tumb);
        }
        if (props == Icon) {
            setOpen(!open);
            setImgURL(Icon);
        }
    }

    React.useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="Modal"
                open={open}
                onClose={modalOpen}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className="ModalConteudo">
                        <img src={imgURL} className="imgModal" alt="" />
                    </div>
                </Fade>
            </Modal>
            <div className="Tudo">
                <Grow in={checked}>
                    <div className="Card" style={{background:'maroon'}}>
                        <div className="Conteudo" style={{marginTop:'80px'}}>
                            <div style={{color:'white',fontFamily: 'Poppins-Medium'}}>O que é o Churrapp?</div>
                            <div className="Texto">
                                O Churrapp é uma plataforma pensada para facilitar a organização do seu churrasco com os amigos. 
                                Desenvolvida para ser um grande aliado dos amantes de churrasco.
                            </div>
                            <a href='apk.churrapp.com'><img src={GooglePlay} className="googlePlay" alt="Link para download" /></a>
                        </div>
                        <div className="Conteudo" style={{marginTop:'80px'}}>
                            <div className="Video">
                                <Player playsInline
                                    poster={Tumb}
                                    src={Video}></Player>
                            </div>
                        </div>
                    </div>
                </Grow>
                <div className="Linha"></div>
                <div>
                    <div className="ImgBox">
                        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
                            <div className="Card">
                                <div className="Conteudo">
                                    <Button><img src={Tumb} className="sliderimg" alt="" onClick={() => getImg(Tumb)} /></Button>
                                    <Button><img src={Icon} className="sliderimg" alt="" onClick={() => getImg(Icon)} /></Button>
                                    <Button><img src={Tumb} className="sliderimg" alt="" onClick={() => getImg(Tumb)} /></Button>
                                    <Button><img src={Icon} className="sliderimg" alt="" onClick={() => getImg(Icon)} /></Button>
                                    <Button><img src={Tumb} className="sliderimg" alt="" onClick={() => getImg(Tumb)} /></Button>
                                </div>
                            </div>
                        </Grow>
                    </div>
                    <div className="Linha"></div>
                    <div>
                        <div className="Card">
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">1</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Criação Facilitada de Churrasco
                                        </div>
                                </div>
                            </div>
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">2</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Calcula a quantidade de carne e bebida
                                         </div>
                                </div>
                            </div>
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">3</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        <label>Calculadora do total a pagar por pessoa</label>
                                    </div>
                                </div>
                            </div>
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">4</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Texto Sobre Funcionalidades
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">5</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Texto Sobre Funcionalidades
                                        </div>
                                </div>
                            </div>
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">6</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Texto Sobre Funcionalidades
                                        </div>
                                </div>
                            </div>
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">7</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Texto Sobre Funcionalidades
                                        </div>
                                </div>
                            </div>
                            <div className="Conteudo">
                                <div className="Item">
                                    <label className="ItemNumero">8</label>
                                    <div className="Circulo"></div>
                                    <div className="TextoItems">
                                        Texto Sobre Funcionalidades
                                         </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}